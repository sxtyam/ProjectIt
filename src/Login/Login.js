import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import Navbar from '../Common/Navbar';
import './Login.css';

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
      <div className="form-page">
        <Navbar />
        <Container>
          <div className="form-container">
            <h2 className="loginHead">Login</h2>
            <Form action="" method="POST">
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  onChange={this.changeFieldsHandler("username")}
                  type="username"
                  placeholder="Username"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  onChange={this.changeFieldsHandler("password")}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button className="buttonGradient" onClick={this.loginUser} variant="outline-dark" type="submit">
                Login
        </Button>
            </Form>
            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
          </div>
        </Container>
        <a href="http://localhost:5000/check">Check</a>
        <a href="http://localhost:5000/logout">Logout</a>
      </div>
    );
  }
}

export default loginForm;
