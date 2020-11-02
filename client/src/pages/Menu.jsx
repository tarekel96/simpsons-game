// import packages
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import components
import Container from "../components/Container/Container";
import { Button } from "../components/Button/Button";
// import styles
import styles from "../styles/Menu.module.scss";

const Main = ({ audio, playAudio, stopAudio }) => {
  const [settings, toggleSettings] = useState(false);

  return (
    <Container className={`${styles[`main`]}`}>
      <h1 className={styles.header}>WELCOME TO THE SIMPSONS's MEMORY GAME</h1>
      <section className={styles.options}>
        <p>
          <Link
            to="/game"
            className={styles.link}
            style={{ textDecoration: "none" }}
          >
            <Button className={styles["menuBtn"]}>Game</Button>
          </Link>
        </p>
        <p>
          <Link
            to="/leaderboards"
            className={styles.link}
            style={{ textDecoration: "none" }}
          >
            <Button className={styles["menuBtn"]}>Leaderboards</Button>
          </Link>
        </p>
        <p>
          <Button
            className={styles["menuBtn"]}
            onClick={() => {
              toggleSettings((state) => !state);
            }}
            customStyles={styles.menuBtn}
          >
            Settings
          </Button>
        </p>
        {settings ? (
          <Settings audio={audio} playAudio={playAudio} stopAudio={stopAudio} />
        ) : null}
        <p>
          <Link
            to="/trivia"
            className={styles.link}
            style={{ textDecoration: "none" }}
          >
            <Button className={styles["menuBtn"]}>Trivia</Button>
          </Link>
        </p>
      </section>
    </Container>
  );
};

const Settings = ({ className = "", playAudio, stopAudio }) => {
  const [active, setActive] = React.useState(false);
  return (
    <section className={`${styles["settingsContainer"]} ${className}`}>
      Audio:
      <br />
      <span>
        <Button
          variant={active ? "textdisabled" : "primary"}
          disabledClick
          className={`${styles["menuBtn"]}`}
          onClick={(audio) => {
            if (active) {
              return;
            }
            setActive((state) => !state);
            playAudio(audio);
          }}
        >
          On
        </Button>
      </span>
      <span>
        <Button
          variant={active ? "primary" : "textdisabled"}
          className={`${styles["menuBtn"]}`}
          disabledClick
          onClick={(audio) => {
            if (!active) {
              return;
            }
            setActive((state) => !state);
            stopAudio(audio);
          }}
        >
          Off
        </Button>
      </span>
    </section>
  );
};

export default Main;
