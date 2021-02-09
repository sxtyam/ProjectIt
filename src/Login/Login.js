import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

class loginForm extends Component {
  axiosConfig = {
    withCredentials: true,
  };
  loginUser = async (event) => {
    event.preventDefault();
    const res = await axios.post(
      "http://localhost:5000/login?username=" +
        this.state.username +
        "&password=" +
        this.state.password,
      this.axiosConfig
    );
    document.cookie = "sessionCookie=" + res.data.cookie;
    console.log(document.cookie);
  };

  state = {
    username: "",
    password: "",
  };

  changeFieldsHandler = (name) => (event) => {
    let newState = { ...this.state };
    newState[name] = event.target.value;
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <Form action="" method="POST">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={this.changeFieldsHandler("username")}
              type="username"
              placeholder="Enter username"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={this.changeFieldsHandler("password")}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button onClick={this.loginUser} variant="primary" type="submit">
            Submit
          </Button>
          <a href="http://localhost:5000/check">Check</a>
          <a href="http://localhost:5000/logout">Logout</a>
        </Form>
      </div>
    );
  }
}

export default loginForm;
