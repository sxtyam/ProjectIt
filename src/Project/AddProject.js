import React from "react";
import { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import Navbar from "../Common/Navbar";
import "./AddProjects.css";

class AddProject extends Component {
  state = {
    title: "",
    description: "",
    techStack: "",
    github: "",
    hosted: "",
    difficulty: "",
    field: "",
  };

  changeFieldsHandler = (name) => (event) => {
    let newState = { ...this.state };
    newState[name] = event.target.value;
    this.setState(newState);
  };

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
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((res) => console.log(res))
      .then(() => {
        this.setState({
          title: "",
          description: "",
          techStack: "",
          github: "",
          hosted: "",
          difficulty: "",
          field: "",
        })
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
      <div style={{ backgroundColor: "#dfeae9", minHeight: "100vh" }}>
        <Navbar />
        <Container className="addContainer">
          <div className="addp">
            <h2 className="loginHead">Add your Work</h2>
            <Form>
              <Form.Group controlId="formBasicTitle">
                <Form.Control
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
                  <option value="ai">Artificial Intelligence</option>
                </Form.Control>
              </Form.Group>
              <Button
                className="buttonGradient"
                onClick={this.submitHandler}
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
