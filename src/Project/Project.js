import React from "react";
import { Component } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams, withRouter } from "react-router-dom";
import './Project.css'

class Project extends Component {
  state = {
    item: {},
  };

  fetchDetails = async (projectId) => {
    let response = await fetch("http://localhost:5000/project/" + projectId, {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          item: response,
        });
        console.log(this.state.item);
        console.log(this.state.item.username);
      });
  };

  componentDidMount() {
    const projectId = this.props.match.params.projectId;
    console.log(projectId);
    this.fetchDetails(projectId);
  }

  render() {

    let userurl = "/user/" + this.state.item.username;

    return (
      <div className="projBlog">
        {this.state.item.project && (
          <Container className="container projBox">
            <h1 className="projTitle">{this.state.item.project.title}</h1>
            <span className="dif">{this.state.item.project.difficulty}</span>
            <Link target="_blank" to={userurl}>
                <h4 className="projUser">~{this.state.item.username}</h4>
            </Link>
            <p className="projDesc">{this.state.item.project.description}</p>
            <h4 className="techS">Tech Stack</h4>
            <div className="techStack">
                {this.state.item.project.techStack}
            </div>
          </Container>
        )}
      </div>
    );
  }
}

export default Project;
