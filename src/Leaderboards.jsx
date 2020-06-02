import React, { useState } from "react";
import Scorepost from "./components/Scorepost";

const Leaderboards = () => {
  const [entries] = useState([
    { name: "bob", id: "1", score: 10 },
    { name: "jullian", id: "2", score: 8 },
  ]);
  return (
    <>
      <h3 style={{ textAlign: "center" }}>LEADERBOARDS</h3>
      {entries.map((entry) => {
        return (
          <Scorepost name={entry.name} score={entry.score} id={entry.id} />
        );
      })}
    </>
  );
};

export default Leaderboards;
