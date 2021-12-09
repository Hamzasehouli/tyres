import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";
import Button from "../components/Button";

export default class Nav extends Component {
  render() {
    return (
      <nav className={classes.nav}>
        <Link>
          <p className={classes.logo}>tyres</p>
        </Link>
        <div>
          <Button styl="standard" typ="anchor" to="/login">
            Login
          </Button>

          <Button styl="standard" typ="anchor" to="/signup">
            Signup
          </Button>
        </div>
        <Button styl="createAd" typ="button">
          Create an ad
        </Button>
      </nav>
    );
  }
}
