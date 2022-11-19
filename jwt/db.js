const mysql = require("mysql");
const pool = mysql.createPool({
  port: 3306,
  host: "localhost",
  database: "classicmodels",
  user: "root",
  password: "root",
});
pool.getConnection((err) => {
  if (err) throw err;
  console.log("Connected to db");
});

let runQuery = (query, arrayParams) => {
  return new Promise((resolve, reject) => {
    console.log("query", query);
    pool.query(query, arrayParams, (err, data) => {
      if (err) throw err;
      resolve(data);
    });
  });
};
module.exports = runQuery;
