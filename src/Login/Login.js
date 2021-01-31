import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class loginForm extends Component {

  state = {
    username: '',
    password: ''
  }

  changeFieldsHandler = (name) => (event) => {
    let newState = {...this.state};

    newState[name] = event.target.value;

    this.setState(newState, () => {
      console.log(this.state);
    })
  }

  sendRequestHandler = async (event) => {
    console.log("Entered!");
    event.preventDefault();
    await fetch('http://localhost:5000/login?username=' + this.state.username + '&password=' + this.state.password, {
      method: 'GET',
      mode: 'cors',
    }).then(response => response.json())
    .then(responseJson => {
      console.log(responseJson);
    });
  }

  render() {
    return (
      <div>
        <Form action="" method="POST">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control onChange={this.changeFieldsHandler("username")} type="username" placeholder="Enter username" />
          </Form.Group>
  
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={this.changeFieldsHandler("password")} type="password" placeholder="Password" />
          </Form.Group>
          <Button onClick={this.sendRequestHandler} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default loginForm;