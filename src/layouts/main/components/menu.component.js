import React, { Component } from "react";
import { Nav } from "react-bootstrap";

class MenuComponent extends Component {
  render() {
    return (
      <Nav defaultActiveKey="/home" className="flex-column bg-dark">
        <Nav.Link eventKey="home" href="/home"  className="text-white">Active</Nav.Link>
        <Nav.Link eventKey="link-1" className="text-white">Link</Nav.Link>
        <Nav.Link eventKey="link-2" className="text-white">Link</Nav.Link>
      </Nav>
    );
  }
}

export default MenuComponent;
