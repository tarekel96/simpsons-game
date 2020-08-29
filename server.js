// env variables
require("dotenv").config();
// packages
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
const router = require("./api");
const path = require("path");

// parses data into JSON
app.use(express.json());

// Connect to MySQL
const DB_CONNECTION = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_ADMIN,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// serve static assets if on production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(___dirname, "../client", "build", "index.html"));
  });
}

// Routes
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Node is now running on PORT: ${PORT}`);
});

module.exports = DB_CONNECTION;
