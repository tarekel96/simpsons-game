const mysql = require("mysql");

const DB_CONNECTION = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_ADMIN,
  password: process.env.DB_PASSWORD,
});

DB_CONNECTION.connect((err) => {
  if (err) {
    console.log("Error: Cannot connect to DB");
    console.log(err);
  } else {
    console.log("Connected!");
  }
});

let DB = {};

DB.all = () => {
  return new Promise((resolve, reject) => {
    DB_CONNECTION.query(
      "SELECT * FROM simpsonsGameDB.UserScore",
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

DB.addScore = (name, score) => {
  return new Promise((resolve, reject) => {
    DB_CONNECTION.query(
      `INSERT INTO simpsonsGameDB.UserScore (name, score) VALUES ('${name}', ${score});`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

module.exports = DB;
