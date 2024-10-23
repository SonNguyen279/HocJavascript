import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">SonNguyen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="my-auto">
            <Nav.Link as={Link} to="/" className="navbar-add">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="navbar-add">About</Nav.Link>
            <Nav.Link as={Link} to="/projects" className="navbar-add">Projects</Nav.Link>
            <Nav.Link as={Link} to="/resume" className="navbar-add">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
