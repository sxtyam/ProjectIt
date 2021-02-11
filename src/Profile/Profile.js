import React, { Component } from "react";
import './Profile.css';
import Navbar from "../Common/Navbar";
import { Container } from "react-bootstrap";
import image from "../user.png"

class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <div className="identity">
            <img className="userImage" src={image} />
            <div className="hello">
              <h1>Name</h1>
              <h4>UserName</h4>
              <a href="" className="ic1"><i class="fab fa-linkedin"></i></a>
              <a href="" className="ic2"><i class="fab fa-github"></i></a>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
export default Profile;