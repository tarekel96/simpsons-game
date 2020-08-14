const express = require("express");
const router = express.Router();
const DB = require("../db");

router.get("/userscore", async (req, res) => {
  try {
    let results = await DB.all();
    res.json(results);
  } catch (e) {
    res.sendStatus(500).send("Error fetching data from DB");
  }
});

router.post("/newscore", async (req, res) => {
  const { name, score } = req.body;
  try {
    let newScore = await DB.addScore(name.name, score.score);
    res.json(newScore);
  } catch (e) {
    res.sendStatus(500).send("Error in adding new score to DB");
  }
});

module.exports = router;
