import React, { Component } from "react";
import { Nav } from "react-bootstrap";

class MenuComponent extends Component {
  render() {
    return (
      <Nav className="flex-column" bg="dark" variant="dark">
        <Nav.Link className="text-white">All ROUTE</Nav.Link>
        <Nav.Link className="text-white">/</Nav.Link>
        <Nav.Link className="text-white">/login</Nav.Link>
        <Nav.Link className="text-white">/register</Nav.Link>
        <Nav.Link className="text-white">/home</Nav.Link>
        <Nav.Link className="text-white">/search</Nav.Link>
        <Nav.Link className="text-white">/search/:word</Nav.Link>
        <Nav.Link className="text-white">/search/:word/page/:page</Nav.Link>
      </Nav>
    );
  }
}

export default MenuComponent;
