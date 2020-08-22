import React, { Component } from "react";

import { Table, Form, Button, Modal } from "react-bootstrap";
import MainLayout from "../../layouts/main";
import { getApi } from "../../services/crud";

class SearchPage extends Component {
  state = {
    datas: [],
    search: "",
    show: false,
    isLoading: true,
    title: true,
    firstName: true,
    lastName: true,
    gender: true,
    language: true,
    shirtSize: true,
    university: true,
    companyName: false,
    department: false,
    jobTitle: false,
    phone: false,
    city: false,
    countryCode: false,
    country: false,
    postCode: false,
    state: false,
    streetAddress: false,
    movieGenres: false,
    carMark: false,
    money: false,
    color: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

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

  componentDidMount() {
    this.getdata();
  }

  getdata = async () => {
    getApi("http://localhost:5000/api/datas", () => {
      this.props.history.push("/login");
    })
      .then((dataApi) => {
        this.setState({
          datas: dataApi.data.data,
        });
      })
      .finally(() => {
        console.log(this.state.datas);

        this.setState({
          isLoading: false,
        });
      });
  };

  render() {
    if (this.state.isLoading) return <MainLayout>loading...</MainLayout>;

    return (
      <MainLayout>
        {/* search */}
        <Form inline className="mb-3">
          <Form.Group>
            <Form.Label htmlFor="inputPassword6">Search</Form.Label>
            <Form.Control
              type="text"
              className="mx-sm-3"
              onChange={this.handleChange}
              name="search"
            />
          </Form.Group>

          <Button variant="primary" className="mr-3">
            Submit
          </Button>

          <Button variant="primary" onClick={this.handleShow}>
            Visible Column
          </Button>
          <Modal show={this.state.show} onHide={this.handleClose}>
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
        </Form>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th
                style={{
                  display: this.state.title ? "" : "none",
                }}
              >
                Title
              </th>
              <th
                style={{
                  display: this.state.firstName ? "" : "none",
                }}
              >
                First Name
              </th>
              <th
                style={{
                  display: this.state.lastName ? "" : "none",
                }}
              >
                Last Name
              </th>
              <th
                style={{
                  display: this.state.gender ? "" : "none",
                }}
              >
                Gender
              </th>
              <th
                style={{
                  display: this.state.language ? "" : "none",
                }}
              >
                Language
              </th>
              <th
                style={{
                  display: this.state.shirtSize ? "" : "none",
                }}
              >
                Shirt Size
              </th>
              <th
                style={{
                  display: this.state.university ? "" : "none",
                }}
              >
                University
              </th>
              <th
                style={{
                  display: this.state.companyName ? "" : "none",
                }}
              >
                Company Name
              </th>
              <th
                style={{
                  display: this.state.department ? "" : "none",
                }}
              >
                Department
              </th>
              <th
                style={{
                  display: this.state.jobTitle ? "" : "none",
                }}
              >
                Job Title
              </th>
              <th
                style={{
                  display: this.state.phone ? "" : "none",
                }}
              >
                Phone
              </th>
              <th
                style={{
                  display: this.state.city ? "" : "none",
                }}
              >
                City
              </th>
              <th
                style={{
                  display: this.state.country ? "" : "none",
                }}
              >
                Country
              </th>
              <th
                style={{
                  display: this.state.countryCode ? "" : "none",
                }}
              >
                Country Code
              </th>
              <th
                style={{
                  display: this.state.postCode ? "" : "none",
                }}
              >
                Postal Code
              </th>
              <th
                style={{
                  display: this.state.state ? "" : "none",
                }}
              >
                State
              </th>
              <th
                style={{
                  display: this.state.streetAddress ? "" : "none",
                }}
              >
                Street Address
              </th>
              <th
                style={{
                  display: this.state.movieGenres ? "" : "none",
                }}
              >
                Movie Genres
              </th>
              <th
                style={{
                  display: this.state.carMark ? "" : "none",
                }}
              >
                Car mark
              </th>
              <th
                style={{
                  display: this.state.money ? "" : "none",
                }}
              >
                Money
              </th>
              <th
                style={{
                  display: this.state.color ? "" : "none",
                }}
              >
                Color
              </th>
            </tr>
          </thead>
          <tbody>
            {!this.state.isLoading &&
              this.state.datas.dataPage.map((data, index) => {
                return (
                  <tr key={index}>
                    <td
                      style={{
                        display: this.state.title ? "" : "none",
                      }}
                    >
                      {data.TITLE}
                    </td>
                    <td
                      style={{
                        display: this.state.firstName ? "" : "none",
                      }}
                    >
                      {data.FIRSTNAME}
                    </td>
                    <td
                      style={{
                        display: this.state.lastName ? "" : "none",
                      }}
                    >
                      {data.LASTNAME}
                    </td>
                    <td
                      style={{
                        display: this.state.gender ? "" : "none",
                      }}
                    >
                      {data.GENDER}
                    </td>
                    <td
                      style={{
                        display: this.state.language ? "" : "none",
                      }}
                    >
                      {data.LANGUAGE}
                    </td>
                    <td
                      style={{
                        display: this.state.shirtSize ? "" : "none",
                      }}
                    >
                      {data.SHIRT_SIZE}
                    </td>
                    <td
                      style={{
                        display: this.state.university ? "" : "none",
                      }}
                    >
                      {data.UNIVERSITY}
                    </td>
                    <td
                      style={{
                        display: this.state.companyName ? "" : "none",
                      }}
                    >
                      {data.COMPANY_NAME}
                    </td>
                    <td
                      style={{
                        display: this.state.department ? "" : "none",
                      }}
                    >
                      {data.DEPARTMENT}
                    </td>
                    <td
                      style={{
                        display: this.state.jobTitle ? "" : "none",
                      }}
                    >
                      {data.JOB_TITLE}
                    </td>
                    <td
                      style={{
                        display: this.state.phone ? "" : "none",
                      }}
                    >
                      {data.PHONE}
                    </td>
                    <td
                      style={{
                        display: this.state.city ? "" : "none",
                      }}
                    >
                      {data.CITY}
                    </td>
                    <td
                      style={{
                        display: this.state.country ? "" : "none",
                      }}
                    >
                      {data.COUNTRY}
                    </td>
                    <td
                      style={{
                        display: this.state.countryCode ? "" : "none",
                      }}
                    >
                      {data.COUNTRY_CODE}
                    </td>
                    <td
                      style={{
                        display: this.state.postCode ? "" : "none",
                      }}
                    >
                      {data.POSTAL_CODE}
                    </td>
                    <td
                      style={{
                        display: this.state.state ? "" : "none",
                      }}
                    >
                      {data.STATE}
                    </td>
                    <td
                      style={{
                        display: this.state.streetAddress ? "" : "none",
                      }}
                    >
                      {data.STREET_ADDRESS}
                    </td>
                    <td
                      style={{
                        display: this.state.movieGenres ? "" : "none",
                      }}
                    >
                      {data.MOVIE_GENRES}
                    </td>
                    <td
                      style={{
                        display: this.state.carMark ? "" : "none",
                      }}
                    >
                      {data.CAR_MARK}
                    </td>
                    <td
                      style={{
                        display: this.state.money ? "" : "none",
                      }}
                    >
                      {data.MONEY}
                    </td>
                    <td
                      style={{
                        display: this.state.color ? "" : "none",
                      }}
                    >
                      {data.COLOR}
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
