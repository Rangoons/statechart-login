import React, { Component } from "react";
import { withStatechart } from "react-automata";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import authentication from "./machines/authentication";

class Authentication extends Component {
  state = { status: "unauthorized" };

  sendLoginRequest() {
    console.log(this.props.credentials);
  }

  handleSubmit = e => {
    e.preventDefault();
    const credentials = document.getElementById("username").value;
    this.props.transition("LOGIN", { credentials });
  };

  render() {
    return (
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
    );
  }
}

const AuthWithStatechart = withStatechart(authentication)(Authentication);

export default AuthWithStatechart;
