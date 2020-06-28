"use strict";

const express = require("express");
const router = express.Router();
const { sensorData } = require("./sensor-data");
const { pgSQLFunctions } = require("./postgres");

var livingRoomValue;
var tempObject = {
    getLivingRoom: function() {
        return livingRoomValue;
    },
};

router.get("/", function(req, res) {
    res.render("index.ejs");
    res.end();
});

router.post("/sensor/temperature/livingroom", function(req, res) {
    console.log("Received POST request from LivingRoom Sensor")
    livingRoomValue = Math.round(req.body.temperature);
    res.send(req.body);
});

router.get("/sensor/temperature/livingroom/data", function(req, res) {
    res.send(livingRoomValue + "");
});

router.get("/sensor/temperature/livingroom/data-return", async(req, res, next) => {
    try {
        const livingRoomData = await pgSQLFunctions.livingRoomTempHistory()
        console.log(livingRoomData)
            // res.json(livingRoomData);
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }

})


module.exports = router;
module.exports.tempObject = tempObject;