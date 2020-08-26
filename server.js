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

// Connect to MySQL
const DB_CONNECTION = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_ADMIN,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Node is now running on PORT: ${PORT}`);
});

module.exports = DB_CONNECTION;
