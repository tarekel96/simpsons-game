import React, { useState } from "react";
import Scorepost from "../components/Scorepost";
import Container from "../components/Container";

const Leaderboards = () => {
  const [entries] = useState([
    { name: "bob", id: "1", score: 10 },
    { name: "jullian", id: "2", score: 8 },
  ]);
  return (
    <Container
      bgImage="./styles/images/springfield-night.jpg"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
    >
      <h3 style={{ textAlign: "center" }}>LEADERBOARDS</h3>
      {entries.map((entry) => {
        return (
          <Scorepost name={entry.name} score={entry.score} id={entry.id} />
        );
      })}
    </Container>
  );
};

export default Leaderboards;
