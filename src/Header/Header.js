import React, { Component } from "react";
import "./Header.css";
// Import as many reactstrap components as necessary
import { Container, Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

class CommonHeader extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <h1 className="display-2">Welcome!</h1>
          <Navbar color="dark" dark>
            <NavbarBrand href="/">Nick Caceres</NavbarBrand>
            <Nav>
              <NavItem href="#">iOS</NavItem>
              <NavItem href="#">Android</NavItem>
              <NavItem href="#">Front-End Web</NavItem>
              <NavItem href="#">Back-End Web</NavItem>
            </Nav>
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default CommonHeader;
