import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./Signup.css";
import Navbar from "../Common/Navbar";

class signupForm extends Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: "",
    linkedIn: "",
    codeForces: "",
    gitHub: "",
  };

  changeFieldsHandler = (name) => (event) => {
    let newState = { ...this.state };
    newState[name] = event.target.value;
    this.setState(newState);
  };

  sendRequestHandler = async (event) => {
    event.preventDefault();
    let url = "http://localhost:5000/signup?";
    url = url + "name=" + this.state.name;
    url = url + "&username=" + this.state.username;
    url = url + "&email=" + this.state.email;
    url = url + "&password=" + this.state.password;
    url = url + "&linkedIn=" + this.state.linkedIn;
    url = url + "&codeforces=" + this.state.codeforces;
    url = url + "&github=" + this.state.github;
    await fetch(url, {
      method: "POST",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((responseJson) => {
        var getUrl = window.location;
        var baseUrl = getUrl.protocol + "//" + getUrl.host;
        window.location.href = baseUrl + "/login";
      });
  };

  styling = {
    border: "0",
    borderBottom: "2px solid #c4b6b6",
    borderRadius: "0",
    width: "670px",
  }

  render() {
    return (
      <div style={{ backgroundColor: "#dfeae9", height: "100vh" }}>
        <Navbar />
        <Container style={{ height: "auto" }}>
          <div className="signbox">
            <h2 className="loginHead">Create Account</h2>
            <Form>
              <div className="name-user">
                <Form.Group controlId="formBasicName">
                  <Form.Control
                    style={{
                      ...this.styling,
                      width: "300px",
                      marginRight: "70px"
                    }}
                    onChange={this.changeFieldsHandler("name")}
                    type="text"
                    placeholder="Name"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicUsername">
                  <Form.Control
                    style={{
                      ...this.styling,
                      borderRadius: "0",
                      width: "300px"
                    }}
                    onChange={this.changeFieldsHandler("username")}
                    type="text"
                    placeholder="User Name"
                  />
                </Form.Group>
              </div>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  style={this.styling}
                  onChange={this.changeFieldsHandler("email")}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  style={this.styling}
                  onChange={this.changeFieldsHandler("password")}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group controlId="formBasicLinked">
                <Form.Control
                  style={this.styling}
                  onChange={this.changeFieldsHandler("linkedIn")}
                  type="text"
                  placeholder="LinkedIn Profile"
                />
              </Form.Group>
              <Form.Group controlId="formBasicCodeforces">
                <Form.Control
                  style={this.styling}
                  onChange={this.changeFieldsHandler("codeforces")}
                  type="text"
                  placeholder="Codeforces Id"
                />
              </Form.Group>
              <Form.Group controlId="formBasicGit">
                <Form.Control
                  style={this.styling}
                  onChange={this.changeFieldsHandler("github")}
                  type="text"
                  placeholder="GitHub Profile"
                />
              </Form.Group>
              <Button
                className="buttonGradient"
                onClick={this.sendRequestHandler}
                variant="outline-dark"
                type="submit"
              >
                Sign Up
                </Button>
            </Form>
            <p>Already have an account? <a href="/login">Login Here</a></p>
          </div>
        </Container>
      </div>
    );
  }
}

export default signupForm;
