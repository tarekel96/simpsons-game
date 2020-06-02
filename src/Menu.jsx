// import packages
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import components
import Container from "./components/Container/Container";
import { Button } from "./components/Button/Button";
// import styles
import styles from "./styles/Menu.module.scss";

const Main = ({ audio, playAudio, stopAudio }) => {
  const [settings, toggleSettings] = useState(false);

  return (
    <Container
      customStyles={styles.main}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      className={`${styles[`main`]}`}
    >
      <h1 className={styles.header}>WELCOME TO THE SIMPSONS's MEMORY GAME</h1>
      <section className={styles.options}>
        <p>
          <Button customStyles={styles.menuBtn}>
            <Link
              to="/game"
              className={styles.link}
              style={{ textDecoration: "none" }}
            >
              Game
            </Link>
          </Button>
        </p>
        <p>
          <Button customStyles={styles.menuBtn}>
            <Link
              to="/leaderboards"
              className={styles.link}
              style={{ textDecoration: "none" }}
            >
              Leaderboards
            </Link>
          </Button>
        </p>
        <p>
          <Button
            onClick={() => {
              toggleSettings(!settings);
            }}
            customStyles={styles.menuBtn}
          >
            Settings
          </Button>
        </p>
        {settings ? (
          <Settings audio={audio} playAudio={playAudio} stopAudio={stopAudio} />
        ) : null}
      </section>
    </Container>
  );
};

const Settings = ({ playAudio, stopAudio }) => {
  return (
    <section>
      Audio:
      <br />
      <span>
        <Button
          customStyles={styles.menuBtn}
          onClick={(audio) => {
            playAudio(audio);
          }}
        >
          On
        </Button>
      </span>
      <span>
        <Button
          customStyles={styles.menuBtn}
          onClick={(audio) => {
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
