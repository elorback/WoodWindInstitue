import React, { useContext, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
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
      className={`navbar-fixed shadow-sm ${expanded ? 'open' : 'closed'}`}
      expand="md" // Bootstrap handles mobile collapse
    >
      <button
        className="morph-toggle"
        onClick={toggleNavbar}
        aria-label="Toggle navigation"
        aria-expanded={expanded}
      >
        {expanded ? <FaTimes size={28} color="white" /> : <FaBars size={28} color="white" />}
      </button>

      <Navbar.Collapse>
        <Nav className="justify-content-center w-100">
          {[
            ['/', 'Home'],
            ['/about', 'About'],
            ['/faculty', 'Faculty'],
            ['/programs', 'Programs'],
            ['/testimonials', 'Testimonials'],
            ['/contact', 'Contact'],
          ].map(([path, label]) => (
            <Nav.Link
              key={path}
              as={Link}
              to={path}
              className="custom-nav-link"
              onClick={closeNavbar}
            >
              {label}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavBar;
