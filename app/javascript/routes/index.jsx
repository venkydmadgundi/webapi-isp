import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Providers from "../components/Providers"
import NewProvider from "../components/NewProvider"
import EditProvider from "../components/EditProvider"

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Providers} />
      <Route path="/providers/new" exact component={NewProvider} />
      <Route path="/providers/:id/edit" exact component={EditProvider} />
      
    </Switch>
  </Router>
);