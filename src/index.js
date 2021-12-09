import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import Nav from "./layouts/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <Router>
    <Nav></Nav>
    <App />
  </Router>,
  document.getElementById("root")
);
