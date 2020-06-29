"use strict";

var schedule = require("node-schedule");
var { pgSQLFunctions } = require("./postgres");

schedule.scheduleJob("1 17 * * * *", function() {
    pgSQLFunctions.insertLivingRoomTemp();
    console.log("I'm scheduled, give me Functions!");
});

// schedule.scheduleJob("1 * * * * *", function() {
//     pgSQLFunctions.insertLivingRoomTemp();
//     console.log("I'm scheduled, give me Functions!");
// });

// *    *    *    *    *    *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    │
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)