"use strict";

const express = require("express");
const router = express.Router();
const { sensorData } = require("./sensor-data");
const { pgSQLFunctions, blah } = require("./postgres");

router.get("/", function(req, res) {
    res.render("index.ejs");
    res.end();
});

router.post("/sensor/temperature/livingroom", function(req, res) {
    pgSQLFunctions.insert5MinuteLivingRoomTemp(Math.round(req.body.temperature));
});

router.get("/sensor/temperature/livingroom/data", async function(req, res) {
    try {
        const result = await pgSQLFunctions.livingRoomTempValue()
        res.send(result + "");
    } catch (e) {
        console.log("error getting living room temp: ", e)
    }
});

router.get("/sensor/temperature/livingroom/data-return", async(req, res, next) => {
    try {
        const blah = await pgSQLFunctions.livingRoomTempHistory()
        console.log(blah)
        res.json(blah);
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }

})




module.exports = router;