import React, { Component } from 'react';
import Authentication from 'Authentication';
import { Provider, connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';
import { fetchUserToken, destroyUserToken } from 'actions/users';
import { Public } from 'components/Public';
import { Protected } from 'components/Protected';
import { PrivateRoute } from 'containers/PrivateRoute';
//import 'App.css';

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <div>
            <h3>Authentication Machine State: {this.props.machineState}</h3>
            <p>{this.props.token}</p>
            <Authentication
              fetchUserToken={this.props.fetchUserToken}
              destroyUserToken={this.props.destroyUserToken}
            />

            <ul>
              <li>
                <Link to="/public">Public Page</Link>
              </li>
              <li>
                <Link to="/protected">Protected Page</Link>
              </li>
            </ul>
            <Route path="/public" component={Public} />
            <PrivateRoute
              path="/protected"
              component={Protected}
              isAuthenticated={this.props.isAuthenticated}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
  token: state.users.token,
  isAuthenticated: state.authentication.isAuthenticated,
  machineState: state.authentication.machineState,
});

App = connect(mapStateToProps, { fetchUserToken, destroyUserToken })(App);
export default App;
