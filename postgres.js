const Pool = require("pg").Pool;
var moment = require("moment");
var { tempObject } = require("./router");

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

var pgSQLFunctions = {
    insertLivingRoomTemp: async function() {
        console.log(tempObject.getLivingRoom());
        var tempValue = tempObject.getLivingRoom();
        const query =
            "INSERT INTO livingRoomTemp (id, created, temperature ) VALUES (DEFAULT, current_timestamp , '" +
            tempValue +
            "')";

        try {
            pool.query(query, (err, res) => {
                if (err) {
                    console.log(err.stack);
                } else {
                    console.log("inserted " + moment());
                }
            });
        } finally {
            //   done();
        }
    },

    livingRoomTempHistory: async function() {
        console.log("Getting past 24 hours for Living Room");
        var tempArray = [];


        const result = await pool.query({
            // rowMode: "array",
            text: "SELECT * FROM public.livingroomtemp ORDER BY id ASC LIMIT 24;",
        })
        tempArray = result.rows
        console.log(tempArray)
        return tempArray;
    },
};

pgSQLFunctions.livingRoomTempHistory()
module.exports.pgSQLFunctions = pgSQLFunctions;