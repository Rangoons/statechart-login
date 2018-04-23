import React, { Component } from 'react';
import { Button } from 'reactstrap';
import authMachine from './machines/authentication';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(authMachine.transition('unauthenticated', 'LOGIN'));
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return <div>hello</div>;
  }
}

export default App;
