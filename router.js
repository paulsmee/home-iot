"use strict";

const express = require("express");
const router = express.Router();
const { sensorData } = require("./sensor-data");

var livingRoomValue;

router.get("/", function (req, res) {
  res.render("index.ejs");
  res.end();
});

router.post("/sensor/temperature/livingroom", function (req, res) {
  livingRoomValue = Math.round(req.body.temperature);
  res.send(req.body);
});

router.get("/sensor/temperature/livingroom/data", function (req, res) {
  res.send(livingRoomValue + "");
});

module.exports = router;
