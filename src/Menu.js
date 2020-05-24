// import packages
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
// import components
import Container from "./components/Container/Container";
import { Button } from "./components/Button/Button";
// import styles
// import backgroundImage from "./styles/images/springfield-night.jpg";
import styles from "./styles/Menu.module.scss";

const Main = () => {
  // const [music, toggleMusic] = useState(true);
  let [audio, toggleAudio] = useState(new Audio("audio/introtrimmed.mp3"));
  const [settings, toggleSettings] = useState(false);

  useEffect(() => {
    // console.log(audio);
    audio.load();
    audio.loop = true;
    startAudio(audio);
  });

  const playAudio = () => {
    audio.play();
  };

  const startAudio = (audio) => {
    const audioPromise = audio.play();
    if (audioPromise !== undefined) {
      audioPromise
        .then((_) => {
          // autoplay started
        })
        .catch((err) => {
          console.log("Error playing the audio");
          // catch dom exception
          console.info(err);
        });
    }
  };

  const stopAudio = () => {
    audio.pause();
  };

  return (
    <Container
      customStyles={styles.main}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      className={`${styles[`main`]}`}
    >
      <h1 className={styles.header}>WELCOME TO SIMPSONS's MEMORY GAME</h1>
      <section className={styles.options}>
        <p>
          <Button
            onClick={() => {
              stopAudio();
            }}
          >
            <Link to="/game">Game</Link>
          </Button>
        </p>
        <p>
          <Button>
            <Link>Leaderboards</Link>
          </Button>
        </p>
        <p>
          <Button
            onClick={() => {
              toggleSettings(true);
            }}
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
      <span>
        <Button
          customStyles={styles.onBtn}
          onClick={(audio) => {
            playAudio(audio);
          }}
        >
          On
        </Button>
      </span>
      <span>
        <Button
          customStyles={styles.offBtn}
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
