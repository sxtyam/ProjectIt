import React from "react";
import { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import Navbar from "../Common/Navbar";
import "./AddProjects.css";

class AddProject extends Component {
  state = {
    formDetails: {
      title: "",
      description: "",
      techStack: "",
      github: "",
      hosted: "",
      difficulty: "",
      field: "",
    },
    validated: false,
  };

  changeFieldsHandler = (name) => (event) => {
    let newState = { ...this.state };
    newState.formDetails[name] = event.target.value;
    this.setState(newState);
  };

  submitHandler = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      return;
    }
    let newState = {...this.state};
    newState.validated = true;
    this.setState(newState);
    let message = <div></div>;
    let url = "http://localhost:5000/project/add?c=" + document.cookie;
    console.log(url);
    console.log(this.state);
    await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.formDetails),
    })
      .then((response) => response.json())
      .then((res) => console.log(res))
      .then(() => {
        this.setState({
          formDetails: {
            title: "",
            description: "",
            techStack: "",
            github: "",
            hosted: "",
            difficulty: "",
            field: "",
          },
          validated: false,
        });
        message = <h3 className="text-success">Project Added Successfully!</h3>;
        window.location.reload();
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
      <div
        className="addprojpage"
        style={{ backgroundColor: "#dfeae9", minHeight: "100vh" }}
      >
        <Navbar />
        <message />
        <Container className="addContainer">
          <div className="addp">
            <h2 className="loginHead">Add your Work</h2>
            <Form onSubmit={this.submitHandler}>
              <Form.Group controlId="formBasicTitle">
                <Form.Control
                  required
                  style={{
                    ...this.styling,
                  }}
                  name="title"
                  type="title"
                  placeholder="Title"
                  onChange={this.changeFieldsHandler("title")}
                />
              </Form.Group>
              <Form.Group controlId="formBasicDescription">
                <Form.Control
                  required
                  minLength="100"
                  as="textarea"
                  rows={1}
                  style={{
                    ...this.styling,
                  }}
                  name="description"
                  type="description"
                  placeholder="Description"
                  onChange={this.changeFieldsHandler("description")}
                />
              </Form.Group>
              <Form.Group controlId="formBasicTechStack">
                <Form.Control
                  required
                  style={{
                    ...this.styling,
                  }}
                  name="techStack"
                  type="techStack"
                  placeholder="Tech Stack"
                  onChange={this.changeFieldsHandler("techStack")}
                />
              </Form.Group>
              <Form.Group controlId="formBasicGithub">
                <Form.Control
                  style={{
                    ...this.styling,
                  }}
                  name="github"
                  type="github"
                  placeholder="Github"
                  onChange={this.changeFieldsHandler("github")}
                />
              </Form.Group>
              <Form.Group controlId="formBasicLink">
                <Form.Control
                  style={{
                    ...this.styling,
                  }}
                  name="hosted"
                  type="hosted"
                  placeholder="Hosted Link"
                  onChange={this.changeFieldsHandler("hosted")}
                />
              </Form.Group>
              <Form.Group controlId="formBasicDifficulty">
                <Form.Control
                  required
                  style={{
                    ...this.styling,
                  }}
                  name="difficulty"
                  type="difficulty"
                  onChange={this.changeFieldsHandler("difficulty")}
                  placeholder="Difficulty"
                  as="select"
                  size="sm"
                >
                  <option value="" disabled selected>
                    Difficulty
                  </option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Expert</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formBasicField">
                <Form.Control
                  required
                  style={{
                    ...this.styling,
                  }}
                  name="field"
                  type="field"
                  placeholder="Field"
                  onChange={this.changeFieldsHandler("field")}
                  as="select"
                  size="sm"
                >
                  <option value="" disabled selected>
                    Field
                  </option>
                  <option value="ml">Machine Learning</option>
                  <option value="webd">Web Development</option>
                  <option value="appd">App Development</option>
                </Form.Control>
              </Form.Group>
              <Button
                className="buttonGradient"
                variant="outline-dark"
                type="submit"
              >
                Add Project
              </Button>
            </Form>
          </div>
        </Container>
      </div>
    );
  }
}

export default AddProject;
