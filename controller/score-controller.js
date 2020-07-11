// const DB = require("../server");

// module.exports = class ScoreController {
//   async getAllScores(req, res, next) {
//     const queryString = "SELECT * FROM simpsonsGameDB.UserScore";

//     try {
//       const results = await DB.query(queryString);
//       if (results == "") {
//         res.status(404).json({ message: "No Scores Found" });
//       } else {
//         res.status(200).json(results);
//       }
//     } catch (error) {
//       next(error);
//     }
//   }
// };
