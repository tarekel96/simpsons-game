import React, { Component } from "react";
import Thumbnail from "./components/Thumbnail/index.js";
import Container from "./components/Container/index.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.randomizeOrder = this.randomizeOrder.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.incrementScore = this.incrementScore.bind(this);
    this.updateTopScore = this.updateTopScore.bind(this);
    this.resetScore = this.resetScore.bind(this);
    this.state = {
      array: this.randomizeOrder(simpsonImages),
      score: 0,
      topScore: 0
    };
  }

  // onClick={() => {
  //   this.setState({
  //     picked: this.state.picked.push(this.state.array[0]),
  //     score: this.state.score + 1,
  //     topScore: this.state.topScore + 1
  //   });
  //   console.log(this.state.picked);
  // }}

  randomizeOrder(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
  }

  handleClick(object) {
    if (this.state.picked.find(obj => obj.id === object.id)) {
      console.log("game over");
    } else {
      this.setState(prevState => {
        prevState.picked.push(object);
        console.log(prevState);
      });
    }
  }

  updateTopScore(currentScore) {
    currentScore =
      currentScore >= this.state.topScore
        ? this.setState(prevState => {
            return { topScore: prevState.score };
          })
        : currentScore;
  }

  resetScore() {
    this.setState({
      score: 0
    });
  }

  incrementScore() {
    this.setState(prevState => {
      return {
        score: prevState.score + 1
      };
    });
    console.log(this.state.score);
  }

  render() {
    return (
      <div className="App bg-dark">
        <header className="App-header text-warning mt-2 d-block">
          <h1 className="text-center">The Simpsons Game</h1>
        </header>
        <section className="text-warning text-right pr-5">
          <h2>Score: {this.state.score}</h2>
          <h2>Top Score: {this.state.topScore}</h2>
        </section>
        <Container bootstrap="text-warning d-flex row justify-content-center mt-3 container mx-auto">
          {this.state.array.map(character => (
            <Thumbnail
              bootstrap="pt-4 px-4"
              key={character.id}
              imageSrc={character.hash}
              alt={character.id}
              incrementScore={this.incrementScore}
              updateTopScore={this.updateTopScore}
              score={this.state.score}
              resetScore={this.resetScore}
              array={this.state.array}
              randomizeOrder={this.randomizeOrder}
            />
          ))}
        </Container>
      </div>
    );
  }
}

let simpsonImages = [
  {
    hash: "images/Homer.png",
    id: "Homer"
  },
  {
    hash: "images/Marge.png",
    id: "Marge"
  },
  {
    hash: "images/Lisa.png",
    id: "Lisa"
  },
  {
    hash: "images/Bart.png",
    id: "Bart"
  },
  {
    hash: "images/Grandpa.png",
    id: "Grandpa"
  },
  {
    hash: "images/Barney.png",
    id: "Barney"
  },
  {
    hash: "images/Mo.png",
    id: "Mo"
  },
  {
    hash: "images/Krusty.png",
    id: "Krusty"
  },
  {
    hash: "images/Ned.png",
    id: "Ned"
  },
  {
    hash: "images/Edna.png",
    id: "Edna"
  },
  {
    hash: "images/Skinner.png",
    id: "Skinner"
  },
  {
    hash: "images/Waylon.png",
    id: "Waylon"
  }
];

export default App;
