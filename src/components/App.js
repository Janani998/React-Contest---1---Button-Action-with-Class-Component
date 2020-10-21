import React, { Component, useState } from "react";
import "./styles.css";
import Para from "./Para";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  render() {
    return (
      <div id="main">
        <button
          id="click"
          onClick={() => this.setState({ show: !this.state.show })}
        >
          Click
        </button>
        {this.state.show ? <Para /> : null}
      </div>
    );
  }
}

export default App;
