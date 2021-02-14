import React from "react";
import { Component } from "react";
import { Card, Container } from "react-bootstrap";
import { Link, useParams, withRouter } from "react-router-dom";
import "./Project.css";

class Project extends Component {
  state = {
    item: {},
  };

  fetchDetails = async (projectId) => {
    await fetch("http://localhost:5000/project/" + projectId, {
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
          <Container className="container">
            <Card className="projBox">
              <div className="project-title-div">
                <div>
                  <h1 className="projTitle">
                    {this.state.item.project.title}&nbsp;&nbsp;&nbsp;
                    {this.state.item.project.github && (
                      <a
                        target="_blank"
                        href={this.state.item.project.github}
                        className="ic1"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                  </h1>
                </div>
              </div>
              <div id="project-diff">
                <div className={"dif " + this.state.item.project.difficulty}>
                  {this.state.item.project.difficulty}
                </div>
                <Link
                  style={{ textDecoration: "none" }}
                  className="project-link"
                  target="_blank"
                  to={userurl}
                >
                  <span className="projUser">~{this.state.item.username}</span>
                </Link>
              </div>
              <hr className="custom-hr" />
              <div>
                <h4 className="left-border-heaing">Description</h4>
                <p className="projDesc">
                  {this.state.item.project.description}
                </p>
              </div>
              <div>
                <h4 className="left-border-heaing">Tech Stack</h4>
                <div className="techStack">
                  {this.state.item.project.techStack}
                </div>
              </div>
              {this.state.item.project.hosted && (
                <div>
                  <h4 className="left-border-heaing">View Project</h4>
                  <a target="_blank" href={this.state.item.project.hosted}>
                    <div className="readMore">{this.state.item.project.hosted}</div>
                  </a>
                </div>
              )}
            </Card>
          </Container>
        )}
      </div>
    );
  }
}

export default Project;
