import React, { Component } from "react";
import './Profile.css';
import Navbar from "../Common/Navbar";
import { Container } from "react-bootstrap";
import image from "../image.png"

class Profile extends Component {
      render() {
        return (
          <div>
           <Navbar/>
              <div className="identity">
                <img src={image}/>
                <div className="hello">                
                  <h2>Name</h2>
                  <h4>UserName</h4>
                  <a href="" className="ic1"><i class="fab fa-linkedin"></i></a>
                  <a href="" className="ic2"><i class="fab fa-github"></i></a>
                </div>
              </div>
          </div>
        );
      }
    }
export default Profile;