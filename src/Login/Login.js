import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

class loginForm extends Component {

  axiosConfig = {
    withCredentials: true,
  }
  loginUser = async (event) => {
    event.preventDefault();
    // try {
      const res = await axios.post(
        'http://localhost:5000/login?username=' + this.state.username + '&password=' + this.state.password,
        this.axiosConfig
      )
      console.log(res);
      if (document.cookie){
        console.log("Cookie set ho gyi h");
      }else{
        console.log("nhi ho rhi set");
      }
      console.log(document.cookie);
      return res
    // } catch (error) {
    //   console.log(error)
    // }
  }

  state = {
    username: '',
    password: ''
  }

  changeFieldsHandler = (name) => (event) => {
    let newState = {...this.state};

    newState[name] = event.target.value;

    this.setState(newState)
  }

  sendRequestHandler = async (event) => {
    console.log("Entered!");
    event.preventDefault();
    await fetch('http://localhost:5000/login?username=' + this.state.username + '&password=' + this.state.password, {
      method: 'POST',
      mode: 'cors',
    }).then(response => response.json())
    .then(response => {
      var getUrl = window.location;
      var baseUrl = getUrl.protocol + "//" + getUrl.host
      // if (response.status == 200){
        console.log(response)
        console.log(document.cookie)
        // window.location.href = baseUrl + '/'
      // }
      // else{
      //   console.log("Abe password yaad rkha kr")
      //   // window.location.href = baseUrl + '/login'
      // }
    })
    // .then(responseJson => {
    //   console.log(responseJson);
    // });
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
          <Button onClick={this.loginUser} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default loginForm;