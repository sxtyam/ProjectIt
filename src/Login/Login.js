import React, { Component } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";
import Navbar from "../Common/Navbar";
import "./Login.css";

class loginForm extends Component {
  state = {
    userDetails: {
      username: "",
      password: "",
    },
    validated: false,
    wrongEntries: false,
  };

  axiosConfig = {
    withCredentials: true,
  };
  loginUser = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      return;
    } else {
      let newState = { ...this.state };
      newState.validated = true;
      this.setState(newState);
      await axios
        .post(
          "http://localhost:5000/login?username=" +
            this.state.userDetails.username +
            "&password=" +
            this.state.userDetails.password,
          this.axiosConfig
        )
        .then((res) => {
          var getUrl = window.location;
          var baseUrl = getUrl.protocol + "//" + getUrl.host;
          if (res.status === 200) {
            document.cookie = "sessionCookie=" + res.data.cookie;
            console.log(document.cookie);
            window.location.href = baseUrl + "/";
          } else {
            console.log("wrong entry");
            window.location.href = baseUrl + "/login";
          }
        })
        .catch(() => {
          let newState = { ...this.state };
          newState.wrongEntries = true;
          this.setState(newState);
        });
    }
  };

  changeFieldsHandler = (name) => (event) => {
    let newState = { ...this.state };
    newState.userDetails[name] = event.target.value;
    this.setState(newState);
  };

  render() {
    return (
      <div className="form-page">
        <Navbar />
        {this.state.wrongEntries && 
          (<Alert className="loginAlert" variant="danger">
            Invalid Username and Password
          </Alert>)
        }
        <Container className="container">
          <div className="form-container">
            <h2 className="loginHead">Login</h2>
            <Form onSubmit={this.loginUser}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  required
                  onChange={this.changeFieldsHandler("username")}
                  type="username"
                  placeholder="Username"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  required
                  onChange={this.changeFieldsHandler("password")}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                className="buttonGradient"
                variant="outline-dark"
                type="submit"
              >
                Login
              </Button>
            </Form>
            <p>
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
          </div>
        </Container>
      </div>
    );
  }
}

export default loginForm;
