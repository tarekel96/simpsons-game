// env variables
require("dotenv").config();
// packages
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
app.use(cors());
const PORT = 5000 || process.env.PORT;
const router = require("./api");

// parses data into JSON
app.use(express.json());
const DB_CONNECTION = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_ADMIN,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// connect to MySQL DB
// DB_CONNECTION.connect((err) => {
//   if (err) throw err;
//   console.log("Connected to MySQL Database");
//   DB_CONNECTION.query("SELECT * FROM simpsonsGameDB.UserScore", function (
//     err,
//     result,
//     fields
//   ) {
//     if (err) throw err;
//     app.get("/userscore", (req, res) => {
//       res.json({ userScores: result });
//     });
//   });
// });

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Node is now running on PORT: ${PORT}`);
});

module.exports = DB_CONNECTION;
