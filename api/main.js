const express = require("express");
const router = express.Router();
const DB_CONNECTION = require("../server");

router.get("/testing", (req, res) => {
  console.log("INSIDE");
  res.send("INSIDE ROUTE");
});

module.exports = router;
