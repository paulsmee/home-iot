const Pool = require("pg").Pool;
var moment = require("moment");

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
    var tempValue;
    const query =
      "INSERT INTO livingRoomTemp (id, created, temperature ) VALUES (DEFAULT, DEFAULT, '" +
      tempValue +
      "')";

    try {
      client.query(query, row, (err, res) => {
        if (err) {
          console.log(err.stack);
        } else {
          console.log("inserted " + res.rowCount + " row:", row);
        }
      });
    } finally {
      //   done();
    }
  },
};
