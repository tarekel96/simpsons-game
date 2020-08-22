// import packages
import React, { Component } from "react";
// import components
import Thumbnail from "../components/Thumbnail/index.js";
//import Container from "../components/Container/index.js";
import ModalCom from "../components/Modal/index.js";
import Footer from "../components/Footer/index.js";
import styles from "../styles/Game.module.scss";

// doh sound effect
const DOH = new Audio("/audio/doh.mp3");

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: {},
      score: 0,
      topScore: 0,
      modal: false,
      array: [
        {
          hash: process.env.PUBLIC_URL + "/images/Homer.png",
          id: "Homer",
          picked: false,
        },
        {
          hash: process.env.PUBLIC_URL + "/images/Marge.png",
          id: "Marge",
          picked: false,
        },
        {
          hash: process.env.PUBLIC_URL + "/images/Lisa.png",
          id: "Lisa",
          picked: false,
        },
        {
          hash: process.env.PUBLIC_URL + "/images/Bart.png",
          id: "Bart",
          picked: false,
        },
        {
          hash: process.env.PUBLIC_URL + "/images/Grandpa.png",
          id: "Grandpa",
          picked: false,
        },
        {
          hash: process.env.PUBLIC_URL + "/images/Barney.png",
          id: "Barney",
          picked: false,
        },
        {
          hash: process.env.PUBLIC_URL + "/images/Mo.png",
          id: "Mo",
          picked: false,
        },
        {
          hash: process.env.PUBLIC_URL + "/images/Krusty.png",
          id: "Krusty",
          picked: false,
        },
        {
          hash: process.env.PUBLIC_URL + "/images/Ned.png",
          id: "Ned",
          picked: false,
        },
        {
          hash: process.env.PUBLIC_URL + "/images/Edna.png",
          id: "Edna",
          picked: false,
        },
        {
          hash: process.env.PUBLIC_URL + "/images/Skinner.png",
          id: "Skinner",
          picked: false,
        },
        {
          hash: process.env.PUBLIC_URL + "/images/Waylon.png",
          id: "Waylon",
          picked: false,
        },
        {
          hash: process.env.PUBLIC_URL + "/images/Apu.png",
          id: "Abu",
          picked: false,
        },
        {
          hash: process.env.PUBLIC_URL + "/images/Milhouse.png",
          id: "Milhouse",
          picked: false,
        },
        {
          hash: process.env.PUBLIC_URL + "/images/Burns.png",
          id: "Burns",
          picked: false,
        },
      ],
    };
  }

  closeModal = () => {
    this.setState({
      modal: false,
    });
  };

  openModal = () => {
    this.setState({
      modal: true,
    });
  };

  // algorithm that randomly orders array
  randomizeOrder = (array) => {
    array.sort(() => Math.random() - 0.5);
    return array;
  };

  // compares the current score with the top score and updates appropriately
  updateTopScore = (currentScore) => {
    currentScore =
      currentScore >= this.state.topScore
        ? this.setState((prevState) => {
            return { topScore: prevState.score };
          })
        : currentScore;
  };

  resetScore = () => {
    // checks if beat the top score before restarting the game
    this.compareScore();
    this.setState((prevState) => ({
      score: 0,
      array: prevState.array.map((char) =>
        char.picked === true ? Object.assign(char, { picked: false }) : char
      ),
    }));
    this.openModal();
  };

  // compares the current score with the top score
  compareScore = () => {
    if (this.state.score > this.state.topScore) {
      let diff = this.state.score - this.state.topScore;
      this.setState((prevState) => ({
        topScore: prevState.topScore + diff,
      }));
    }
  };

  /**
   * @param {number} id the id number for a character that was passed by onClick event
   */
  incrementScore = (id) => {
    // prevState - current state before incrementing
    this.setState((prevState) => ({
      // finds the clicked character by id which is passed from the thumbnail component
      array: prevState.array.map((char) =>
        // once the character is found, its boolean property (picked) is set to true
        char.id === id ? Object.assign(char, { picked: true }) : char
      ),
      // increments the score without mutations
      score: prevState.score + 1,
    }));

    // resets the score/game if the selected character was already selected
    if (
      this.state.array.find((char) => (char.id === id ? char.picked : null))
    ) {
      DOH.play();
      this.resetScore();
    }
  };

  render() {
    return (
      <div className={styles.game}>
        <header className="App-header pt-4 d-block">
          <h1 className="text-center">The Simpsons Game</h1>
        </header>
        <section className={` ${styles["scoreSection"]}`}>
          <h2>Score: {this.state.score}</h2>
          <h2>Topscore: {this.state.topScore}</h2>
        </section>
        <div className={styles["gameGrid"]}>
          {this.randomizeOrder(this.state.array).map((character) => (
            <Thumbnail
              customStyles={`${styles["fade"]} ${styles["gameGridItem"]}`}
              key={character.id}
              id={character.id}
              imageSrc={character.hash}
              alt={character.id}
              incrementScore={this.incrementScore}
            />
          ))}
          <ModalCom
            modal={this.state.modal}
            score={this.state.score}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            topScore={this.state.topScore}
            closeModal={this.closeModal}
          />
        </div>
        <Footer bootstrap="pl-5 pb-3 " />
      </div>
    );
  }
}

export default Game;
