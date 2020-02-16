import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Providers from "../components/Providers"
import NewProvider from "../components/NewProvider"

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Providers} />
      <Route path="/providers/new" exact component={NewProvider} />
    </Switch>
  </Router>
);