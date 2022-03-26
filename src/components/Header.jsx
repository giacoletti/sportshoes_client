import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="transparent" style={{ position: "relative", zIndex: 10 }}>
      <Container fluid style={{ paddingLeft: "2vw", paddingRight: "2vw" }}>
        <Navbar.Brand className="ms-3">
          <img
            data-cy="header-logo"
            alt="sportshoes logo"
            src="images/sportshoes_logo.png"
            height="20vw"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="">
          <Nav.Link
            data-cy="header-men-btn"
            href="#men"
            style={{ color: "white" }}
          >
            MEN
          </Nav.Link>
          <Nav.Link
            data-cy="header-women-btn"
            href="#women"
            style={{ color: "white" }}
          >
            WOMEN
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
