import React from "react";
import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddProject extends Component {

  state = {
    title: "",
    description: "",
    techStack: "",
    github: "",
    hosted: "",
    difficulty: "",
    field: ""
  }

  changeFieldsHandler = (name) => (event) => {
    let newState = { ...this.state };
    newState[name] = event.target.value;
    this.setState(newState);
  };

//   return fetch(`${API}/signup`, {
//     method: "POST",
    // headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    // },
//     body: JSON.stringify(user)
// })
// .then(response => {
//     return response.json();
// })
// .catch(err => console.log(err));

  submitHandler = async (event) => {
    event.preventDefault();
    let url = "http://localhost:5000/project/add?c=" + document.cookie;
    console.log(url);
    console.log(this.state);
    await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(response => response.json())
    .then(res => console.log(res));
  }

  render() {
    return (
      <Form >
        <Form.Group controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" type="title" onChange={this.changeFieldsHandler("title")} />
        </Form.Group>
        <Form.Group controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" type="description" onChange={this.changeFieldsHandler("description")} />
        </Form.Group>
        <Form.Group controlId="formBasicTechStack">
          <Form.Label>Tech Stack</Form.Label>
          <Form.Control name="techStack" type="techStack" onChange={this.changeFieldsHandler("techStack")} />
        </Form.Group>
        <Form.Group controlId="formBasicGithub">
          <Form.Label>Github</Form.Label>
          <Form.Control name="github" type="github" onChange={this.changeFieldsHandler("github")} />
        </Form.Group>
        <Form.Group controlId="formBasicLink">
          <Form.Label>Hosted Link</Form.Label>
          <Form.Control name="hosted" type="hosted" onChange={this.changeFieldsHandler("hosted")} />
        </Form.Group>
        <Form.Group controlId="formBasicDifficulty">
          <Form.Label>Difficulty</Form.Label>
          <Form.Control name="difficulty" type="difficulty" onChange={this.changeFieldsHandler("difficulty")} />
        </Form.Group>
        <Form.Group controlId="formBasicField">
          <Form.Label>Field</Form.Label>
          <Form.Control name="field" type="field" onChange={this.changeFieldsHandler("field")} />
        </Form.Group>
        <Button onClick={this.submitHandler} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
};

export default AddProject;