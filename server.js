"use strict";

var express = require("express");
var server = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
require("./scheduler");

server.set("view engine", "ejs");

server.use(express.json());
server.use(bodyParser.urlencoded({ extended: false }));
// server.use(morgan('dev'));

server.use(express.static("public"));
server.use(require("./router"));

var port = 8080;
server.listen(port, function () {
  console.log("The server is listening on port " + port);
});
