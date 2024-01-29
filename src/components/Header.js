// src/components/Header.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCode, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Navbar.Brand as={Link} to="/" className="mx-auto py-2 px-3 brand-title">Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" className="mx-3">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/skills" className="mx-3">
            <FontAwesomeIcon icon={faCode} className="mr-2" />
            Skills
          </Nav.Link>
          <Nav.Link as={Link} to="/projects" className="mx-3">
            <FontAwesomeIcon icon={faProjectDiagram} className="mr-2" />
            Projects
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="mx-3">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
