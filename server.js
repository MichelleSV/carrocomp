var express = require("express");
var app = express();
app.use(express.static(__dirname + "/dist"));
app.use(express.static(__dirname + "/assets"));