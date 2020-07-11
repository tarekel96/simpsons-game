const express = require("express");
const router = express.Router();
const DB = require("../db");

router.get("/userscore", async (req, res) => {
  try {
    let results = await DB.all();
    res.json(results);
  } catch (e) {
    res.sendStatus(500);
  }
});

module.exports = router;
