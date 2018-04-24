import React, { Component } from "react";
import AuthWithStatechart from "./Authentication";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <AuthWithStatechart />;
  }
}

export default App;
