import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "./styles/images/springfield-night.jpg";
import styles from "./styles/Menu.module.scss";

const Main = () => {
  return (
    <div
      className={`${styles[`main`]}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1 className={styles.header}>WELCOME TO SIMPSONS's MEMORY GAME</h1>
      <section className={styles.options}>
        <p>
          <Link to="/game">Game</Link>
        </p>
        <p>
          <Link>Leaderboards</Link>
        </p>
      </section>
    </div>
  );
};

export default Main;
