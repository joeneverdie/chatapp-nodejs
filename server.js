var express = require("express");
var app = express();

var server = app.createServer;

var io = require("socket.io");
app.listen(4200);
