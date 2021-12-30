import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="mt-1">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Fresh Valley</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-end" id="navbarScroll">
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/order">Order</Nav.Link>
              <Nav.Link as={Link} to="login">Admin</Nav.Link>
              <Nav.Link id="login" as={Link} to="admin">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
