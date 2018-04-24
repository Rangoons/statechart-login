import React, { Component } from 'react';
import { withStatechart, State } from 'react-automata';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  UncontrolledAlert,
} from 'reactstrap';
import authentication from 'machines/authentication';
import { fetchUserToken } from 'actions/users';

class Authentication extends Component {
  componentDidMount() {
    this.props.handleChange(this.props.machineState.value);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.machineState.value !== nextProps.machineState.value) {
      this.props.handleChange(nextProps.machineState.value);
    }
  }

  sendLoginRequest() {
    fetchUserToken(this.props.credentials)
      .then(() => {
        //should save token in redux state
        this.props.transition('SUCCESS');
      })
      .catch(() => {
        this.props.transition('FAILURE');
      });
  }

  handleLogout = () => {
    this.props.transition('LOGOUT');
  };

  handleSubmit = e => {
    e.preventDefault();
    const credentials = document.getElementById('username').value;
    this.props.transition('LOGIN', { credentials });
  };

  render() {
    return (
      <div>
        <State value={['unauthenticated', 'error']}>
          <Form inline onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="username">Username: </Label>
              <Input type="text" id="username" name="username" />
            </FormGroup>
            <Button
              color="primary"
              disabled={this.props.machineState.value === 'loading'}
            >
              Login
            </Button>
          </Form>
          <State value="error">
            <UncontrolledAlert color="danger">
              Your username was invalid
            </UncontrolledAlert>
          </State>
        </State>

        <State value="authenticated">
          <Button color="danger" onClick={this.handleLogout}>
            Logout
          </Button>
        </State>
      </div>
    );
  }
}

export default withStatechart(authentication)(Authentication);
