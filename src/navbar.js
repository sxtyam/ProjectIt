import { Navbar, Nav } from "react-bootstrap";
import React from 'react';

const navbar = () => {
  return (
    <Navbar style={{backgroundColor: "black"}} collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="#home">ProjectIt</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Login</Nav.Link>
          <Nav.Link href="#deets">SignUp</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navbar;