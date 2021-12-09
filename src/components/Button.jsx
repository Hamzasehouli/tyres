import React, { Component } from "react";
import classes from "./Button.module.css";
import { Link } from "react-router-dom";

export default class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.typ === "anchor") {
      return (
        <Link className={classes[this.props.styl]} to={this.props.to}>
          {this.props.children}
        </Link>
      );
    }
    return (
      <button className={classes[this.props.styl]} type={this.props.typ}>
        {this.props.children}
      </button>
    );
  }
}
