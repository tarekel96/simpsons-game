require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const app = express();
const PORT = 5000 || process.env.PORT;
const router = require("./api/main");

const DB_CONNECTION = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_ADMIN,
  password: process.env.DB_PASSWORD,
});

DB_CONNECTION.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL Database");
  DB_CONNECTION.query("SELECT * FROM simpsonsGameDB.UserScore", function (
    err,
    result,
    fields
  ) {
    if (err) throw err;
    console.log(result);
  });
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Node is now running on PORT: ${PORT}`);
});

module.exports = DB_CONNECTION;
