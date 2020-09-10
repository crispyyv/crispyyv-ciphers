import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Ceaser } from "./components/Ceaser";
import { Home } from "./components/Home";
import NavBar from "./components/NavBar";
import { Trithemius } from "./components/Trithemius";
import "./styles/main.scss";
export const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="center">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/ceaser">
            <Ceaser />
          </Route>
          <Route path="/trithemius">
            <Trithemius />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
