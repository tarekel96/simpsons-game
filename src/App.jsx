import React, { useState, useEffect } from "react";
import Game from "./Game.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./Menu.jsx";
import Leaderboards from "./Leaderboards.jsx";
import NotFound from "./NotFound.jsx";
import "./App.scss";

const MUSIC = new Audio("audio/introtrimmed.mp3");

const App = (props) => {
  const [audio] = useState(MUSIC);

  useEffect(() => {
    //if (audio) playAudio();
  });

  const playAudio = () => {
    audio.play();
  };

  const stopAudio = () => {
    audio.pause();
  };

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
