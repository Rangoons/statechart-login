import React, { Component } from "react";
import { withStatechart, State } from "react-automata";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import authentication from "./machines/authentication";

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
    setTimeout(() => {
      this.props.transition("SUCCESS");
    }, 1000);
  }

  handleLogout = () => {
    this.props.transition("LOGOUT");
  };

  handleSubmit = e => {
    e.preventDefault();
    const credentials = document.getElementById("username").value;
    this.props.transition("LOGIN", { credentials });
  };

  render() {
    return (
      <div>
        <State value="unauthenticated">
          <Form inline onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="username">Username: </Label>
              <Input type="text" id="username" name="username" />
            </FormGroup>
            <Button
              color="primary"
              disabled={this.props.machineState.value === "loading"}
            >
              Login
            </Button>
          </Form>
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
