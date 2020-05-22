import React from "react";
import Game from "./Game.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./Menu.js";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Menu />
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
