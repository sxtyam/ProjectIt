import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class signupForm extends Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text" placeholder="User Name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicLinked">
          <Form.Label>LinkedIn</Form.Label>
          <Form.Control type="text" placeholder="LinkedIn Profile" />
        </Form.Group>
        <Form.Group controlId="formBasicCodeforces">
          <Form.Label>CodeForces</Form.Label>
          <Form.Control type="text" placeholder="Codeforces Id" />
        </Form.Group>
        <Form.Group controlId="formBasicGit">
          <Form.Label>GitHub</Form.Label>
          <Form.Control type="text" placeholder="GitHub Profile" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default signupForm;