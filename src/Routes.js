import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import App from "./App.js";
import Cart from "./Cart/Cart.js";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App}></Route>
        <Route path="/cart" exact component={Cart}></Route>
      </Switch>
    </Router>
  );
}
