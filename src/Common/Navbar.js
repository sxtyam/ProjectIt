import React from 'react';
import axios from 'axios'
import { Navbar, Nav } from 'react-bootstrap'
import './navbar.css'

const navbar = (props) => {

  const axiosConfig = {
    withCredentials: true,
  };
  const logout = async () => {
    await axios.get(
      "http://localhost:5000/logout?c=" + document.cookie
    ).then((res) => {
      console.log(document.cookie);
      document.cookie = "sessionCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      console.log(document.cookie);
      var getUrl = window.location;
      var baseUrl = getUrl.protocol + "//" + getUrl.host;
      if(res.status === 200){
        console.log("Logout is done!")
        window.location.href = baseUrl + "/";
      }
    })
  }

  let comp = (
    <Nav className="login-signup">
          <Nav.Link className="navbar-tags" href='/login'><i class="fas fa-user-lock"></i> &nbsp; Login</Nav.Link>
          &nbsp;
          &nbsp;
          <Nav.Link className="navbar-tags" href="/signup"><i class="fas fa-user-plus"></i> &nbsp; Signup</Nav.Link>
        </Nav>
  )

  const cookies  = document.cookie.split(';');
  cookies.forEach((cookie) => {
    if(cookie.split('=')[0].trim() === 'sessionCookie') {
      comp = (
        <Nav className="login-signup">
          <Nav.Link className="navbar-tags" href='/project/add'><i class="far fa-plus-square"></i>&nbsp; Add Project</Nav.Link>
          &nbsp;
          &nbsp;
          <Nav.Link className="navbar-tags" href="/profile"><i class="fas fa-user-circle"></i>&nbsp; Profile</Nav.Link>
          &nbsp;
          &nbsp;
          {props.logout && <Nav.Link className="navbar-tags" onClick={logout}><i class="fas fa-sign-out-alt"></i>&nbsp; Log Out</Nav.Link>}
        </Nav>
      )
    }
  })

  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor: "black"}} variant="dark">
      <Navbar.Brand className="navbar-tags" href='/'>PROJ<span style={{color: "orange"}}>3</span>CT IT</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      {comp}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navbar;