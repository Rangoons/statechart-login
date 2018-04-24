import React, { Component } from 'react';
import Authentication from 'Authentication';
import { Provider, connect } from 'react-redux';
//import 'App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { machineState: '' };
  }

  handleMachineStateChange = machineState => {
    this.setState({ machineState });
  };
  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <h3>Authentication Machine State: {this.state.machineState}</h3>
          <Authentication handleChange={this.handleMachineStateChange} />
        </div>
      </Provider>
    );
  }
}

//Connecterinio
export default App;
