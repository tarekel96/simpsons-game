import React, { useState, useEffect } from "react";
import API from "../utils/api";
import Scorepost from "../components/Scorepost";
import Container from "../components/Container";
import styles from "../styles/Leaderboards.module.scss";

const Leaderboards = () => {
  const [userScores, setScores] = useState([]);
  useEffect(() => {
    const scores = API.fetchScores();
    scores
      .then((scores) => setScores(scores))
      .catch((err) => {
        throw err;
      });
  }, []);
  console.log(userScores);
  return (
    <Container className={`${styles["leaderboardContainer"]}`}>
      <h3
        style={{ textAlign: "center" }}
        className={`${styles["leaderboardTitle"]}`}
      >
        LEADERBOARDS
      </h3>
      {userScores !== [] ? (
        userScores.map((entry) => {
          return (
            <Scorepost
              name={entry.Name}
              score={entry.Score}
              key={entry.UserScoreId}
            />
          );
        })
      ) : (
        <h2>LOADING...</h2>
      )}
    </Container>
  );
};

export default Leaderboards;
