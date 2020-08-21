import React, { Component } from "react";
import axios from "axios";

import { Table, Form } from "react-bootstrap";
import MainLayout from "../../layouts/main";

import ModalComponent from "./components/modal.component";

class SearchPage extends Component {
  state = {
    persons: [],
    search: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {

    const filterByName = this.state.persons.filter( person => {
      return person.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    })

    return (
      <MainLayout>
        <Form inline>
          <Form.Group>
            <Form.Label htmlFor="inputPassword6">Search</Form.Label>
            <Form.Control
              type="text"
              className="mx-sm-3"
              onChange={this.handleChange}
              name="search"
            />
            <Form.Text muted>Search only first name and last name.</Form.Text>
          </Form.Group>
        </Form>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Visible</th>
            </tr>
          </thead>
          <tbody>
            {filterByName.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>
                    <ModalComponent />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </MainLayout>
    );
  }
}

export default SearchPage;
