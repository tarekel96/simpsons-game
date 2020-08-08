import React, { useState, useEffect } from "react";
import API from "./utils/api";
import Game from "./pages/Game.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./pages/Menu.jsx";
import Leaderboards from "./pages/Leaderboards";
import NotFound from "./pages/NotFound.jsx";
import "./App.scss";

// MAIN MENU MUSIC
const MUSIC = new Audio("/audio/intro.mp3");
MUSIC.crossOrigin = "anonymous";

const App = (props) => {
  const [audio] = useState(MUSIC);
  let [userScores, setScores] = useState([]);

  const playAudio = () => {
    audio.play().catch((err) => {
      console.log(err);
    });
  };

  const stopAudio = () => {
    audio.pause();
  };

  useEffect(() => {
    const scores = API.fetchScores();
    scores
      .then((scores) => setScores(scores))
      .catch((err) => {
        throw err;
      });
  }, []);

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
            <Leaderboards userScores={userScores} />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
