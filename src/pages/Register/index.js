import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

import { Register } from "../../services/auth";

class RegisterPage extends Component {
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async () => {
    const data = await Register(this.state.email, this.state.password)
    if(data.success) this.props.history.push("/home");
  }

  render() {
    return (
      <Container>
        <h2>Register page</h2>
        <Link to="/login">login Page</Link>
        <Form>
          <Form.Group>
            <Form.Label>Email user</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter user"
              name="email"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button variant="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default RegisterPage;
