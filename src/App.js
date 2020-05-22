import React, { Component } from "react";
import Thumbnail from "./components/Thumbnail/index.js";
import Container from "./components/Container/index.js";
import ModalCom from "./components/Modal/index.js";
import Footer from "./components/Footer/index.js";
import "./styles/App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      topScore: 0,
      modal: false,
      array: [
        {
          hash: "images/Homer.png",
          id: "Homer",
          picked: false,
        },
        {
          hash: "images/Marge.png",
          id: "Marge",
          picked: false,
        },
        {
          hash: "images/Lisa.png",
          id: "Lisa",
          picked: false,
        },
        {
          hash: "images/Bart.png",
          id: "Bart",
          picked: false,
        },
        {
          hash: "images/Grandpa.png",
          id: "Grandpa",
          picked: false,
        },
        {
          hash: "images/Barney.png",
          id: "Barney",
          picked: false,
        },
        {
          hash: "images/Mo.png",
          id: "Mo",
          picked: false,
        },
        {
          hash: "images/Krusty.png",
          id: "Krusty",
          picked: false,
        },
        {
          hash: "images/Ned.png",
          id: "Ned",
          picked: false,
        },
        {
          hash: "images/Edna.png",
          id: "Edna",
          picked: false,
        },
        {
          hash: "images/Skinner.png",
          id: "Skinner",
          picked: false,
        },
        {
          hash: "images/Waylon.png",
          id: "Waylon",
          picked: false,
        },
        {
          hash: "images/Apu.png",
          id: "Abu",
          picked: false,
        },
        {
          hash: "images/Milhouse.png",
          id: "Milhouse",
          picked: false,
        },
        {
          hash: "images/Burns.png",
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

  randomizeOrder = (array) => {
    array.sort(() => Math.random() - 0.5);
    return array;
  };

  updateTopScore = (currentScore) => {
    currentScore =
      currentScore >= this.state.topScore
        ? this.setState((prevState) => {
            return { topScore: prevState.score };
          })
        : currentScore;
  };

  resetScore = () => {
    this.setState((prevState) => ({
      score: 0,
      array: prevState.array.map((char) =>
        char.picked === true ? Object.assign(char, { picked: false }) : char
      ),
    }));
    this.openModal();
  };

  compareScore = () => {
    if (this.state.score > this.state.topScore) {
      this.setState((prevState) => ({
        topScore: prevState.topScore + 1,
      }));
    }
  };

  incrementScore = (id) => {
    this.setState((prevState) => ({
      array: prevState.array.map((char) =>
        char.id === id ? Object.assign(char, { picked: true }) : char
      ),
      score: prevState.score + 1,
    }));

    if (
      this.state.array.find((char) => (char.id === id ? char.picked : null))
    ) {
      this.resetScore();
    }

    this.compareScore();
  };

  render() {
    return (
      <div className="App bg-dark">
        <header className="App-header text-warning pt-4 d-block">
          <h1 className="text-center">The Simpsons Game</h1>
        </header>
        <section className="text-warning text-right pr-5">
          <h2>Score: {this.state.score}</h2>
          <h2>Top Score: {this.state.topScore}</h2>
        </section>
        <Container bootstrap="text-warning d-flex row justify-content-center mt-3 container mx-auto pb-4">
          {this.randomizeOrder(this.state.array).map((character) => (
            <Thumbnail
              bootstrap="pt-4 px-4"
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
            topScore={this.state.topScore}
            closeModal={this.closeModal}
          />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
