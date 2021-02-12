import React, { Component } from "react";
import "./Profile.css";
import axios from "axios";
import Navbar from "../Common/Navbar";
import { useParams, withRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import CardProject from "../Project/CardProject";
import image from "../user.png";

class Profile extends Component {
  state = {};

  fetchData = async () => {
    const username = this.props.match.params.username;
    let url = "http://localhost:5000/user?c=" + document.cookie;
    if (username) url = "http://localhost:5000/user/" + username;
    await axios.get(url).then((res) => {
      this.setState({
        userDetails: res.data.userDetails,
        projects: res.data.projects,
      });
      console.log(this.state);
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    let userContent, linkedIn, github;
    if (this.state.userDetails) {
      userContent = (
        <div>
          <h1>{this.state.userDetails.name}</h1>
          <h4>@{this.state.userDetails.username}</h4>
        </div>
      );
      if (this.state.userDetails.linkedIn) {
        linkedIn = (
          <a target="_blank" href={this.state.userDetails.linkedIn} className="ic1">
            <i className="fab fa-linkedin"></i>
          </a>
        );
      }
      if (this.state.userDetails && this.state.userDetails.github) {
        github = (
          <a target="_blank" href={this.state.userDetails.github} className="ic1">
            <i className="fab fa-github"></i>
          </a>
        );
      }
    }
    return (
      <div className="profileSec">
        <Navbar />
        <Container>
          <div className="identity">
            <img className="userImage" src={image} />
            <div className="hello">
              {userContent}
              {linkedIn}
              &nbsp; &nbsp;
              {github}
            </div>
          </div>
        </Container>
        <Container className="projects-container">
          <div>
            <h2 style={{ textAlign: "center" }}>Projects</h2>
          </div>
          <div>
            {this.state.projects && this.state.projects.map((item) => (
              <CardProject project={item} />
            ))}
          </div>
        </Container>
      </div>
    );
  }
}
export default withRouter(Profile);
