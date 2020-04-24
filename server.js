var express = require("express");
var app = express();
var path = require("path");
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"))
})


app.listen(PORT, function() {
    console.log("listening on " + PORT)});