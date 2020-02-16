import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Providers from "../components/Providers"

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Providers} />
    </Switch>
  </Router>
);