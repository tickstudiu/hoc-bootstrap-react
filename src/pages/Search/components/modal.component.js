import React, { Component } from "react";

import { Button, Modal } from "react-bootstrap";

class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.wrapper = React.createRef();
  }

  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <div >
        <Button variant="primary" onClick={this.handleShow}>
          View
        </Button>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;
