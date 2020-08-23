import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class HeaderComponent extends Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/search">Search</Nav.Link>
          <Nav.Link>Logout</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default HeaderComponent;
