import React, { useState, useEffect } from "react";
import API from "../utils/api";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Scorepost from "../components/Scorepost";
import Container from "../components/Container";
import Loading from "../components/Loading";
import styles from "../styles/Leaderboards.module.scss";

const Leaderboards = () => {
  const [userScores, setScores] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filter, setFilter] = useState(null);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  useEffect(() => {
    const scores = API.fetchScores();
    scores
      .then((scores) => setScores(scores))
      .catch((err) => {
        throw err;
      });
  }, []);

  const sortHighToLow = () => {
    const newScores = [...userScores];
    newScores.sort((a, b) => b.Score - a.Score);
    setScores(newScores);
    setFilter("Scores - High To Low");
  };

  const sortLowToHigh = () => {
    const newScores = [...userScores];
    newScores.sort((a, b) => a.Score - b.Score);
    setScores(newScores);
    setFilter("Scores - Low To High");
  };

  const sortAlphabetical = () => {
    const newScores = [...userScores];
    newScores.sort((a, b) => a.Name.localeCompare(b.Name));
    setScores(newScores);
    setFilter("Names - Alphabetical");
  };

  const sortReverseAlphabetical = () => {
    const newScores = [...userScores];
    newScores.sort((a, b) => b.Name.localeCompare(a.Name));
    setScores(newScores);
    setFilter("Names - Reverse Alphabetical");
  };

  if (userScores.length === 0) return <Loading />;
  else {
    return (
      <Container className={`${styles["leaderboardContainer"]}`}>
        <div className={`${styles["leaderboardMenuAndTitle"]}`}>
          <h3
            style={{ textAlign: "center" }}
            className={`${styles["leaderboardTitle"]}`}
          >
            LEADERBOARDS
          </h3>
          <Dropdown
            isOpen={dropdownOpen}
            toggle={toggle}
            className={`${styles["dropdownMenu"]}`}
          >
            <DropdownToggle caret>Filter</DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => sortHighToLow()}>
                Highest to Lowest
              </DropdownItem>
              <DropdownItem onClick={() => sortLowToHigh()}>
                Lowest to Highest
              </DropdownItem>
              <DropdownItem onClick={() => sortAlphabetical()}>
                Alphabetical
              </DropdownItem>
              <DropdownItem onClick={() => sortReverseAlphabetical()}>
                Reverse Alphabetical
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <h5 className={`${styles["filter"]}`}>{filter}</h5>
        <div className={styles["scorePostContainer"]}>
          {userScores.map((entry) => {
            return (
              <div style={{ position: "relative" }}>
                <Scorepost
                  className={styles["fade"]}
                  name={entry.Name}
                  score={entry.Score}
                  key={entry.UserScoreId}
                />
              </div>
            );
          })}
        </div>
      </Container>
    );
  }
};

export default Leaderboards;
