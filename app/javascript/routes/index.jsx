import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/home";
import Providers from "../components/Providers"

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/providers" exact component={Providers} />
    </Switch>
  </Router>
);