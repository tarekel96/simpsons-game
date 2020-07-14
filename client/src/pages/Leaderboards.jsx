import React, { useState } from "react";
import Scorepost from "../components/Scorepost";
import Container from "../components/Container";

const Leaderboards = ({ userScores }) => {
  return (
    <Container
      bgImage="./styles/images/springfield-night.jpg"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
    >
      <h3 style={{ textAlign: "center" }}>LEADERBOARDS</h3>
      {userScores.map((entry) => {
        return (
          <Scorepost
            name={entry.Name}
            score={entry.Score}
            id={entry.UserScoreId}
          />
        );
      })}
    </Container>
  );
};

export default Leaderboards;
