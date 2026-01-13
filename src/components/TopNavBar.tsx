import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css/TopNavBar.css'; // Import the CSS file

const TopNavBar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm navbar-fixed">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-center w-100">
          <Nav.Link as={Link} to="/" className="custom-nav-link">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/mission" className="custom-nav-link">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/faculty" className="custom-nav-link">
            Faculty
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="custom-nav-link">
            Bassoon Workshop
          </Nav.Link>
          <Nav.Link as={Link} to="/lessons-and-reeds" className="custom-nav-link">
            Lessons and Reeds
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="custom-nav-link">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavBar;