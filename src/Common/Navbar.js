import { Navbar, Nav } from 'react-bootstrap'
import './navbar.css'

const navbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor: "black"}} variant="dark">
      <Navbar.Brand className="navbar-tags" href='/'>PROJ3CT IT</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="login-signup">
          <Nav.Link className="navbar-tags" href='/login'><i class="fas fa-user-lock"></i> &nbsp; Login</Nav.Link>
          &nbsp;
          &nbsp;
          <Nav.Link className="navbar-tags" href="/signup"><i class="fas fa-user-plus"></i> &nbsp; Signup</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navbar;