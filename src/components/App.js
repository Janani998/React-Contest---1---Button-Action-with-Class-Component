import React, { Component, useState } from "react";
import "../styles/App.css";
import Para from "./Para";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div id="main">
        <button id="click" onClick={() => this.handleClick}>
          Click
        </button>
        {this.state.show ? <Para /> : null}
      </div>
    );
  }
}

export default App;
