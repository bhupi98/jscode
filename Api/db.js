const mysql = require("mysql");
const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "demo",
  timezone: "utc",
});

pool.getConnection((err, con) => {
  if (err) return err;
  console.log("Connected to database");
});

let runQuery = function (query, array) {
  try {
    return new Promise((resolve, reject) => {
      pool.query(query, array, (err, data) => {
        if (err) console.log(err);
        resolve(data);
      });
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { runQuery: runQuery };
