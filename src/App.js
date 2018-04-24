import React, { Component } from "react";
import Authentication from "./Authentication";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { machineState: "" };
  }

  handleMachineStateChange = machineState => {
    this.setState({ machineState });
  };
  render() {
    return (
      <div>
        <h3>Authentication Machine State: {this.state.machineState}</h3>
        <Authentication handleChange={this.handleMachineStateChange} />
      </div>
    );
  }
}

export default App;
