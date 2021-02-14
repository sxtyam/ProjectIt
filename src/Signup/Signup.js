import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./Signup.css";
import Navbar from "../Common/Navbar";

class signupForm extends Component {
  state = {
    userDetails: {
      name: "",
      username: "",
      email: "",
      password: "",
      linkedIn: "",
      codeforces: "",
      github: "",
    },
    validated: false,
    usernameValid: false,
    formValid: false
  };

  changeFieldsHandler = (name) => (event) => {
    let newState = { ...this.state };
    newState.userDetails[name] = event.target.value;
    this.setState(newState);
  };

  checkUser = async () => {
    let userToCheck = this.state.userDetails.username;
    await fetch("http://localhost:5000/checkUsername?username=" + userToCheck, {
      method: "GET",
      mode: "cors"
    }).then((response) => response.json())
    .then((response) => {
      console.log(response.userExist)
      console.log("Ye hmara type h " + typeof(response.userExist))
      if(response.userExist == false){
        console.log("User not exist!")
        let newState = { ...this.state };
        newState.usernameValid = true;
        newState.formValid = true;
        this.setState(newState);
        console.log(this.state.usernameValid)
        console.log(typeof(this.state.usernameValid))
      }
      else{
        console.log("Ye hmara else h")
        let newState = { ...this.state };
        newState.usernameValid = false;
        this.setState(newState);
      }
    })
  }

  sendRequestHandler = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      return;
    }
    let newState = {...this.state};
    newState.validated = true;
    this.setState(newState);
    let url = "http://localhost:5000/signup?";
    url = url + "name=" + this.state.userDetails.name;
    url = url + "&username=" + this.state.userDetails.username;
    url = url + "&email=" + this.state.userDetails.email;
    url = url + "&password=" + this.state.userDetails.password;
    url = url + "&linkedIn=" + this.state.userDetails.linkedIn;
    url = url + "&codeforces=" + this.state.userDetails.codeforces;
    url = url + "&github=" + this.state.userDetails.github;
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
  };

  render() {
    return (
      <div style={{ backgroundColor: "#dfeae9", minHeight: "100vh" }}>
        <Navbar />
        <Container className="container">
          <div className="signbox">
            <h2 className="loginHead">Create Account</h2>
            <Form onSubmit={this.sendRequestHandler}>
              <div className="name-user">
                <Form.Group controlId="formBasicName">
                  <Form.Control
                    required
                    style={{
                      ...this.styling,
                      width: "300px",
                      marginRight: "70px",
                    }}
                    onChange={this.changeFieldsHandler("name")}
                    type="text"
                    placeholder="Name"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicUsername">
                  <Form.Control
                    required
                    style={{
                      ...this.styling,
                      borderRadius: "0",
                      width: "300px",
                    }}
                    onChange={this.changeFieldsHandler("username")}
                    onBlur={this.checkUser}
                    type="text"
                    placeholder="User Name"
                  />
                  {this.state.userDetails.username && this.state.usernameValid && (
                    <p className="text-success">Valid Username</p>
                  )}
                  {this.state.userDetails.username && !this.state.usernameValid && (
                    <p className="text-danger">Username Already Taken</p>
                  )}
                  </Form.Group>
              </div>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  required
                  style={this.styling}
                  onChange={this.changeFieldsHandler("email")}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  required
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
                variant="outline-dark"
                type="submit"
                disabled={!this.state.formValid}
              >
                Sign Up
              </Button>
            </Form>
            <p>
              Already have an account? <a href="/login">Login Here</a>
            </p>
          </div>
        </Container>
      </div>
    );
  }
}

export default signupForm;
