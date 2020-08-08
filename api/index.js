const express = require("express");
const router = express.Router();
const DB = require("../db");

router.get("/userscore", async (req, res) => {
  try {
    let results = await DB.all();
    res.json(results);
  } catch (e) {
    res.send("Error fetching data from DB");
    res.sendStatus(500);
  }
});

router.post("/newscore", async (req, res) => {
  const { name, score } = req.body;
  try {
    let newScore = await DB.addScore(name.name, score.score);
    res.json(newScore);
  } catch (e) {
    res.send("Error in adding new score to DB");
    res.sendStatus(500);
  }
});

module.exports = router;
