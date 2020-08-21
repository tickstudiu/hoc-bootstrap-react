import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import HeaderComponent from "./components/header.component";
import FooterComponent from "./components/footer.component";
import ContentComponent from "./components/content.component";
import MenuComponent from "./components/menu.component";

class MainLayout extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={2}>
            <MenuComponent />
          </Col>
          <Col md={10}>
            <HeaderComponent />
            <ContentComponent>{this.props.children}</ContentComponent>
            <FooterComponent>created by wanchalerm suksawat</FooterComponent>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainLayout;
