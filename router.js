"use strict";

const express = require("express");
const router = express.Router();
const { sensorData } = require("./sensor-data");
const { pgSQLFunctions, blah } = require("./postgres");
var moment = require("moment");

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
        const result = await pgSQLFunctions.livingRoomTempHistory()
        var dataObject = {
            data: [],
            label: []
        }
        var labelObject = []
        result.forEach((element) => {
            dataObject.data.push(element.temperature)
            dataObject.label.push(moment(element.created).format("hh"))
        })
        console.log(dataObject)
        res.json(dataObject);
    } catch (e) {
        console.log("Failed to get Living Room Array: ", e)
        res.sendStatus(500)
    }
})




module.exports = router;