import React, { Component } from "react";
// import store from "./store/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  //   this.methods = {};
  // }

  render() {
    return (
      <Switch>
        <Route exact path="/">
          <p>home</p>
        </Route>
        <Route path="/products">
          <p>products</p>
        </Route>
        <Route path="/users">
          <p>users</p>
        </Route>
        <Route path="*">
          <p>Route not found</p>
        </Route>
      </Switch>
    );
  }
}
