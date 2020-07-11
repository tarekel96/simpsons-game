import React, { useState, useEffect } from "react";
import Game from "./pages/Game.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./pages/Menu.jsx";
import Leaderboards from "./pages/Leaderboards";
import NotFound from "./pages/NotFound.jsx";
import "./App.scss";

// MAIN MENU MUSIC
const MUSIC = new Audio("/audio/intro.mp3");
MUSIC.crossOrigin = "anonymous";
console.log(MUSIC);

const App = (props) => {
  const [audio] = useState(MUSIC);

  const playAudio = () => {
    audio.play().catch((err) => {
      console.log(err);
    });
  };

  const stopAudio = () => {
    audio.pause();
  };

  useEffect(
    () => {
      async function fetchMyAPI() {
        let response = await fetch("http://localhost:5000/api/userscore", {
          method: "GET",
        });
        response = await response.json();
        console.log(response);
        // You can await here
      }
      fetchMyAPI();
    }

    // ...
  );

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Menu audio={audio} playAudio={playAudio} stopAudio={stopAudio} />
          </Route>
          <Route exact path="/game">
            <Game {...props} />
          </Route>
          <Route exact path="/leaderboards">
            <Leaderboards />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
