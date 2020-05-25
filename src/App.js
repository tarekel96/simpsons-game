import React, { useState, useEffect } from "react";
import Game from "./Game.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./Menu.js";
import "./App.scss";

const MUSIC = new Audio("audio/introtrimmed.mp3");

const App = () => {
  const [audio] = useState(MUSIC);

  useEffect(() => {
    if (audio) playAudio();
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
            <Game />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
