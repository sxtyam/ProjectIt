import { Navbar, Nav } from 'react-bootstrap'
import './navbar.css'

const navbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Project It</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="login-signup">
          <Nav.Link href='/login'><i class="fas fa-user-lock"></i> &nbsp; Login</Nav.Link>
          &nbsp;
          &nbsp;
          <Nav.Link href="/signup"><i class="fas fa-user-plus"></i> &nbsp; Signup</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navbar;