import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavbarContext from './NavbarContext';
import './css/TopNavBar.css';

const TopNavBar: React.FC = () => {
  const { expanded, setExpanded } = useContext(NavbarContext);
  const location = useLocation();
  const toggleNavbar = () => setExpanded(prev => !prev);
  const closeNavbar = () => setExpanded(false);
  useEffect(() => {
    setExpanded(false);
  }, [location, setExpanded]);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expanded={expanded}
      className={`shadow-sm navbar-fixed morph-navbar ${expanded ? 'open' : 'closed'}`}
    >
      {/* Toggle Button with React Icon */}
      <Button
        className="morph-toggle"
        onClick={toggleNavbar}
        aria-label="Toggle navigation"
      >
        {expanded ? <FaTimes size={28} color="white" /> : <FaBars size={28} color="white" />}
      </Button>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-center w-100">
          <Nav.Link as={Link} to="/" className="custom-nav-link" onClick={closeNavbar}>Home</Nav.Link>
          <Nav.Link as={Link} to="/about" className="custom-nav-link" onClick={closeNavbar}>About</Nav.Link>
          <Nav.Link as={Link} to="/faculty" className="custom-nav-link" onClick={closeNavbar}>Faculty</Nav.Link>
          <Nav.Link as={Link} to="/programs" className="custom-nav-link" onClick={closeNavbar}>Programs</Nav.Link>
          <Nav.Link as={Link} to="/testimonials" className="custom-nav-link" onClick={closeNavbar}>Testimonials</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="custom-nav-link" onClick={closeNavbar}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavBar;
