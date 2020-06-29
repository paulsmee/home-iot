const Pool = require("pg").Pool;
var moment = require("moment");

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    database: "postgres",
    password: "password",
    port: 5432,
});

// var client;
// pool.connect().then((clientObj) => {
//     client = clientObj;
// });

var temp5MinLivingRoom

const pgSQLFunctions = {
    insertLivingRoomTemp: async function() {
        console.log(temp5MinLivingRoom);
        const query =
            "INSERT INTO livingRoomTemp (id, created, temperature ) VALUES (DEFAULT, current_timestamp , '" +
            temp5MinLivingRoom +
            "')";

        try {
            pool.query(query, (err, res) => {
                if (err) {
                    console.log(err.stack);
                } else {
                    console.log("inserted " + moment().format("DD/MM/YYYY hh:mm"));
                }
            });
        } finally {
            //   done();
        }
    },

    // @params data = 5 minute temperature from livingroom sensor
    insert5MinuteLivingRoomTemp: async function(data) {
        temp5MinLivingRoom = data
        const query =
            "INSERT INTO livingRoomTemp5Min (id, created, temperature ) VALUES (DEFAULT, current_timestamp , '" +
            data +
            "')";

        try {
            pool.query(query, (err, res) => {
                if (err) {
                    console.log(err.stack);
                } else {
                    console.log("inserted " + moment().format("DD/MM/YYYY hh:mm"));
                }
            });
        } finally {
            //   done();
        }
    },

    livingRoomTempValue: async function() {
        return temp5MinLivingRoom
    },

    livingRoomTempHistory: async function() {
        try {
            console.log("Getting past 24 hours for Living Room");
            var tempArray = [];

            const result = await pool.query({
                // rowMode: "array",
                text: "SELECT * FROM public.livingroomtemp ORDER BY id DESC LIMIT 24;",
            })
            console.log("runnun")
            tempArray = result.rows
        } catch (e) {
            console.log("failed: ", e)
        }
        return tempArray;
    },

};


// pgSQLFunctions.livingRoomTempHistory()
module.exports.pgSQLFunctions = pgSQLFunctions;