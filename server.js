require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const app = express();
const PORT = 5000 || process.env.PORT;
console.log(process.env);

// const DB_CONNECTION = mysql.createConnection({
//   host: "localhost",
//   user: "yourusername",
//   password: "yourpassword",
// });

// DB_CONNECTION.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

app.listen(PORT, () => {
  console.log(`Node is now running on PORT: ${PORT}`);
});
