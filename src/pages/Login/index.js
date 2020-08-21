import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

import { Login } from "../../services/auth";

class LoginPage extends Component {

  state = {
    email: '',
    password: '',
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async () => {
    const data = await Login(this.state.email, this.state.password)
    if(data.success) this.props.history.push("/home");
  }

  render() {
    return (
      <Container>
        <h2>login page</h2>
        <Link to="/register">Register Page</Link>
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

export default LoginPage;
