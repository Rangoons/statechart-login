import React, { Component } from 'react';
import Authentication from 'Authentication';
import { Provider, connect } from 'react-redux';
import { fetchUserToken, destroyUserToken } from 'actions/users';
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
          <p>{this.props.token}</p>
          <Authentication
            handleChange={this.handleMachineStateChange}
            fetchUserToken={this.props.fetchUserToken}
            destroyUserToken={this.props.destroyUserToken}
          />
        </div>
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
  token: state.users.token,
});

App = connect(mapStateToProps, { fetchUserToken, destroyUserToken })(App);
export default App;
