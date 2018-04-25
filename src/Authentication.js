import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import { authenticateUser, unauthenticateUser } from 'actions/authentication';

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
    this.props
      .fetchUserToken(this.props.credentials)
      .then(() => {
        this.props.transition('SUCCESS');
      })
      .catch(() => {
        this.props.transition('FAILURE');
      });
  }

  handleLogout = () => {
    this.props.destroyUserToken();
    this.props.unauthenticateUser();
    this.props.transition('LOGOUT');
  };

  setStoreAuthentication() {
    this.props.authenticateUser();
  }

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
const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
});
Authentication = withStatechart(authentication)(Authentication);
Authentication = connect(mapStateToProps, {
  authenticateUser,
  unauthenticateUser,
})(Authentication);

export default Authentication;
