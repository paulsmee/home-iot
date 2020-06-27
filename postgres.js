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

var client;
pool.connect().then((clientObj) => {
  client = clientObj;
});

var pgSQLFunctions = {
  insertLivingRoomTemp: async function () {
    console.log(tempObject.getLivingRoom());
    var tempValue = tempObject.getLivingRoom();
    const query =
      "INSERT INTO livingRoomTemp (id, created, temperature ) VALUES (DEFAULT, current_timestamp , '" +
      tempValue +
      "')";

    try {
      client.query(query, (err, res) => {
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
};

module.exports.pgSQLFunctions = pgSQLFunctions;
