import React, { Component } from "react";
import Thumbnail from "./components/Thumbnail/index.js";
import Container from "./components/Container/index.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // array: this.randomizeOrder(simpsonImages),
      score: 0,
      topScore: 0,
      restart: false,
      array: [
        {
          hash: "images/Homer.png",
          id: "Homer",
          picked: false
        },
        {
          hash: "images/Marge.png",
          id: "Marge",
          picked: false
        },
        {
          hash: "images/Lisa.png",
          id: "Lisa",
          picked: false
        },
        {
          hash: "images/Bart.png",
          id: "Bart",
          picked: false
        },
        {
          hash: "images/Grandpa.png",
          id: "Grandpa",
          picked: false
        },
        {
          hash: "images/Barney.png",
          id: "Barney",
          picked: false
        },
        {
          hash: "images/Mo.png",
          id: "Mo",
          picked: false
        },
        {
          hash: "images/Krusty.png",
          id: "Krusty",
          picked: false
        },
        {
          hash: "images/Ned.png",
          id: "Ned",
          picked: false
        },
        {
          hash: "images/Edna.png",
          id: "Edna",
          picked: false
        },
        {
          hash: "images/Skinner.png",
          id: "Skinner",
          picked: false
        },
        {
          hash: "images/Waylon.png",
          id: "Waylon",
          picked: false
        }
      ]
    };
  }

  randomizeOrder = array => {
    array.sort(() => Math.random() - 0.5);
    return array;
  };

  updateTopScore = currentScore => {
    currentScore =
      currentScore >= this.state.topScore
        ? this.setState(prevState => {
            return { topScore: prevState.score };
          })
        : currentScore;
  };

  resetScore = () => {
    this.setState(
      {
        score: 0
      },
      this.state.array.forEach(char => char.picked === true)
    );
  };

  makeTrue = thumbnail => {
    if (!thumbnail) {
      this.setState({
        thumbnail: true
      });
    }
  };

  incrementScore = id => {
    // console.log(id);
    this.setState(prevState => ({
      array: prevState.array.map(char =>
        char.id === id ? Object.assign(char, { picked: true }) : char
      ),
      score: prevState.score + 1
    }));

    if (this.state.array.find(char => (char.id === id ? char.picked : null))) {
      this.resetScore();
    }

    // this.state.array.find(char =>
    //   char.id === id ? Object.assign(char, { picked: true }) : char
    // );
    // this.setState({
    //   score: this.state.score + 1
    // });
  };

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
          {this.randomizeOrder(this.state.array).map(character => (
            <Thumbnail
              bootstrap="pt-4 px-4"
              key={character.id}
              id={character.id}
              imageSrc={character.hash}
              alt={character.id}
              picked={character.picked}
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

// let simpsonImages = [
//   {
//     hash: "images/Homer.png",
//     id: "Homer",
//     picked: false
//   },
//   {
//     hash: "images/Marge.png",
//     id: "Marge",
//     picked: false
//   },
//   {
//     hash: "images/Lisa.png",
//     id: "Lisa",
//     picked: false
//   },
//   {
//     hash: "images/Bart.png",
//     id: "Bart",
//     picked: false
//   },
//   {
//     hash: "images/Grandpa.png",
//     id: "Grandpa",
//     picked: false
//   },
//   {
//     hash: "images/Barney.png",
//     id: "Barney",
//     picked: false
//   },
//   {
//     hash: "images/Mo.png",
//     id: "Mo",
//     picked: false
//   },
//   {
//     hash: "images/Krusty.png",
//     id: "Krusty",
//     picked: false
//   },
//   {
//     hash: "images/Ned.png",
//     id: "Ned",
//     picked: false
//   },
//   {
//     hash: "images/Edna.png",
//     id: "Edna",
//     picked: false
//   },
//   {
//     hash: "images/Skinner.png",
//     id: "Skinner",
//     picked: false
//   },
//   {
//     hash: "images/Waylon.png",
//     id: "Waylon",
//     picked: false
//   }
// ];

export default App;
