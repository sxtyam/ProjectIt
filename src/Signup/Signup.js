import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class signupForm extends Component {

  state = {
    name: "",
    username: "",
    email: "",
    password: "",
    linkedIn: "",
    codeForces: "",
    gitHub: "",
  }

  changeFieldsHandler = (name) => (event) => {
    let newState = { ...this.state };

    newState[name] = event.target.value;

    this.setState(newState)
  }

  sendRequestHandler = async (event) => {
    console.log("Filled!");
    event.preventDefault();
    let url = 'http://localhost:5000/signup?'
    url = url + 'name=' + this.state.name
    url = url + '&username=' + this.state.username
    url = url + '&email=' + this.state.email
    url = url + '&password=' + this.state.password
    url = url + '&linkedIn=' + this.state.linkedIn
    url = url + '&codeForces=' + this.state.codeForces
    url = url + '&gitHub=' + this.state.gitHub
    console.log(url);
    await fetch(url, {
      method: 'POST',
      mode: 'cors',
    }).then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        var getUrl = window.location;
        var baseUrl = getUrl.protocol + "//" + getUrl.host
        window.location.href = baseUrl + '/login'
      });
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={this.changeFieldsHandler("name")} type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>UserName</Form.Label>
          <Form.Control onChange={this.changeFieldsHandler("username")} type="text" placeholder="User Name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={this.changeFieldsHandler("email")} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={this.changeFieldsHandler("password")} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicLinked">
          <Form.Label>LinkedIn</Form.Label>
          <Form.Control onChange={this.changeFieldsHandler("linkedIn")} type="text" placeholder="LinkedIn Profile" />
        </Form.Group>
        <Form.Group controlId="formBasicCodeforces">
          <Form.Label>CodeForces</Form.Label>
          <Form.Control onChange={this.changeFieldsHandler("codeForces")} type="text" placeholder="Codeforces Id" />
        </Form.Group>
        <Form.Group controlId="formBasicGit">
          <Form.Label>GitHub</Form.Label>
          <Form.Control onChange={this.changeFieldsHandler("gitHub")} type="text" placeholder="GitHub Profile" />
        </Form.Group>
        <Button onClick={this.sendRequestHandler} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default signupForm;