import React, { Component } from "react";

import { Table, Form, Button, Modal } from "react-bootstrap";
import MainLayout from "../../layouts/main";
import { getApi, postApi } from "../../services/crud";

class SearchPage extends Component {
  state = {
    datas: [],
    search: this.props.match.params.word ? this.props.match.params.word : "",
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
    temptitle: true,
    tempfirstName: true,
    templastName: true,
    tempgender: true,
    templanguage: true,
    tempshirtSize: true,
    tempuniversity: true,
    tempcompanyName: false,
    tempdepartment: false,
    tempjobTitle: false,
    tempphone: false,
    tempcity: false,
    tempcountryCode: false,
    tempcountry: false,
    temppostCode: false,
    tempstate: false,
    tempstreetAddress: false,
    tempmovieGenres: false,
    tempcarMark: false,
    tempmoney: false,
    tempcolor: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });

    console.log(name, value);
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
      temptitle: this.state.title,
      tempfirstName: this.state.firstName,
      templastName: this.state.lastName,
      tempgender: this.state.gender,
      templanguage: this.state.language,
      tempshirtSize: this.state.shirtSize,
      tempuniversity: this.state.university,
      tempcompanyName: this.state.companyName,
      tempdepartment: this.state.department,
      tempjobTitle: this.state.jobTitle,
      tempphone: this.state.phone,
      tempcity: this.state.city,
      tempcountryCode: this.state.countryCode,
      tempcountry: this.state.country,
      temppostCode: this.state.postCode,
      tempstate: this.state.state,
      tempstreetAddress: this.state.streetAddress,
      tempmovieGenres: this.state.movieGenres,
      tempcarMark: this.state.carMark,
      tempmoney: this.state.money,
      tempcolor: this.state.color,
    });
  };

  handleOK = () => {
    this.setState({
      show: false,
      title: this.state.temptitle,
      firstName: this.state.tempfirstName,
      lastName: this.state.templastName,
      gender: this.state.tempgender,
      language: this.state.templanguage,
      shirtSize: this.state.tempshirtSize,
      university: this.state.tempuniversity,
      companyName: this.state.tempcompanyName,
      department: this.state.tempdepartment,
      jobTitle: this.state.tempjobTitle,
      phone: this.state.tempphone,
      city: this.state.tempcity,
      countryCode: this.state.tempcountryCode,
      country: this.state.tempcountry,
      postCode: this.state.temppostCode,
      state: this.state.tempstate,
      streetAddress: this.state.tempstreetAddress,
      movieGenres: this.state.tempmovieGenres,
      carMark: this.state.tempcarMark,
      money: this.state.tempmoney,
      color: this.state.tempcolor,
    });

    // let sqlQuery = {
    //   title: this.state.temptitle,
    //   firstName: this.state.tempfirstName,
    //   lastName: this.state.templastName,
    //   gender: this.state.tempgender,
    //   language: this.state.templanguage,
    //   shirtSize: this.state.tempshirtSize,
    //   university: this.state.tempuniversity,
    //   companyName: this.state.companyName,
    //   department: this.state.tempcompanyName,
    //   jobTitle: this.state.tempjobTitle,
    //   phone: this.state.tempphone,
    //   city: this.state.tempcity,
    //   countryCode: this.state.tempcountryCode,
    //   country: this.state.tempcountry,
    //   postCode: this.state.temppostCode,
    //   state: this.state.tempstate,
    //   streetAddress: this.state.tempstreetAddress,
    //   movieGenres: this.state.tempmovieGenres,
    //   carMark: this.state.tempcarMark,
    //   money: this.state.tempmoney,
    //   color: this.state.tempcolor,
    // };

    // postApi(
    //   `http://localhost:5000/api/datas/set`,
    //   () => {
    //     this.props.history.push("/login");
    //   }, sqlQuery
    // )
    //   .then((dataApi) => {
    //     console.log(dataApi)
    //   })
  };

  handleDefault = () => {
    this.setState({
      temptitle: true,
      tempfirstName: true,
      templastName: true,
      tempgender: true,
      templanguage: true,
      tempshirtSize: true,
      tempuniversity: true,
      tempcompanyName: false,
      tempdepartment: false,
      tempjobTitle: false,
      tempphone: false,
      tempcity: false,
      tempcountryCode: false,
      tempcountry: false,
      temppostCode: false,
      tempstate: false,
      tempstreetAddress: false,
      tempmovieGenres: false,
      tempcarMark: false,
      tempmoney: false,
      tempcolor: false,
    });
  };

  handleSearch = () => {
    this.props.history.push(`/search/${this.state.search}`);
    this.getdata();
  }

  componentDidMount() {
    this.getdata();
  }

  getdata = async () => {
    if (this.props.match.params.word) {
      if (this.props.match.params.page) {
        postApi(
          `http://localhost:5000/api/datas/page/${this.props.match.params.page}`,
          () => {
            this.props.history.push("/login");
          },
          {
            text: this.state.search,
          }
        )
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
      } else {
        postApi(
          `http://localhost:5000/api/datas`,
          () => {
            this.props.history.push("/login");
          },
          {
            text: this.state.search,
          }
        )
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
      }
    } else {
      if (this.props.match.params.page) {
        getApi(
          `http://localhost:5000/api/datas/page/${this.props.match.params.page}`,
          () => {
            this.props.history.push("/login");
          }
        )
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
      } else {
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
      }
    }
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
              value={this.state.search}
              name="search"
            />
          </Form.Group>

          <Button variant="primary" className="mr-3" onClick={this.handleSearch}>
            Submit
          </Button>

          <Button variant="primary" onClick={this.handleShow}>
            Visible Column
          </Button>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Visible Column</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <div className="mb-3">
                  <Form.Check
                    inline
                    label="Title"
                    checked={this.state.temptitle}
                    onChange={() =>
                      this.setState({
                        temptitle: !this.state.temptitle,
                      })
                    }
                  />

                  <Form.Check
                    inline
                    label="First Name"
                    checked={this.state.tempfirstName}
                    onChange={() =>
                      this.setState({
                        tempfirstName: !this.state.tempfirstName,
                      })
                    }
                  />

                  <Form.Check
                    inline
                    label="Last Name"
                    checked={this.state.templastName}
                    onChange={() =>
                      this.setState({
                        templastName: !this.state.templastName,
                      })
                    }
                  />

                  <Form.Check
                    inline
                    label="Gender"
                    checked={this.state.tempgender}
                    onChange={() =>
                      this.setState({
                        tempgender: !this.state.tempgender,
                      })
                    }
                  />

                  <Form.Check
                    inline
                    label="Language"
                    checked={this.state.templanguage}
                    onChange={() =>
                      this.setState({
                        templanguage: !this.state.templanguage,
                      })
                    }
                  />

                  <Form.Check
                    inline
                    label="Shirt Size"
                    checked={this.state.tempshirtSize}
                    onChange={() =>
                      this.setState({
                        tempshirtSize: !this.state.tempshirtSize,
                      })
                    }
                  />

                  <Form.Check
                    inline
                    label="University"
                    checked={this.state.tempuniversity}
                    onChange={() =>
                      this.setState({
                        tempuniversity: !this.state.tempuniversity,
                      })
                    }
                  />

                  <Form.Check
                    inline
                    label="Company Name"
                    checked={this.state.tempcompanyName}
                    onChange={() =>
                      this.setState({
                        tempcompanyName: !this.state.tempcompanyName,
                      })
                    }
                  />

                  <Form.Check
                    inline
                    label="tempdepartment"
                    checked={this.state.tempdepartment}
                    onChange={() =>
                      this.setState({
                        tempdepartment: !this.state.tempdepartment,
                      })
                    }
                  />

                  <Form.Check
                    inline
                    label="Job Title"
                    checked={this.state.tempjobTitle}
                    onChange={() =>
                      this.setState({
                        tempjobTitle: !this.state.tempjobTitle,
                      })
                    }
                  />

                  <Form.Check
                    inline
                    label="Phone"
                    checked={this.state.tempphone}
                    onChange={() =>
                      this.setState({
                        tempphone: !this.state.tempphone,
                      })
                    }
                  />

                  <Form.Check
                    inline
                    label="City"
                    checked={this.state.tempcity}
                    onChange={() =>
                      this.setState({
                        tempcity: !this.state.tempcity,
                      })
                    }
                  />

                  <Form.Check
                    inline
                    label="Country Code"
                    checked={this.state.tempcountryCode}
                    onChange={() =>
                      this.setState({
                        tempcountryCode: !this.state.tempcountryCode,
                      })
                    }
                  />

                  <Form.Check
                    inline
                    label="Country"
                    checked={this.state.tempcountry}
                    onChange={() =>
                      this.setState({
                        tempcountry: !this.state.tempcountry,
                      })
                    }
                  />

                  <Form.Check
                    inline
                    label="Postal Code"
                    checked={this.state.temppostCode}
                    onChange={() =>
                      this.setState({
                        temppostCode: !this.state.temppostCode,
                      })
                    }
                  />

                  <Form.Check
                    inline
                    label="State"
                    checked={this.state.tempstate}
                    onChange={() =>
                      this.setState({
                        tempstate: !this.state.tempcomtempstatepanyName,
                      })
                    }
                  />

                  <Form.Check
                    inline
                    label="Street Address"
                    checked={this.state.tempstreetAddress}
                    onChange={() =>
                      this.setState({
                        tempstreetAddress: !this.state.tempstreetAddress,
                      })
                    }
                  />

                  <Form.Check
                    inline
                    label="Movie Genres"
                    checked={this.state.tempmovieGenres}
                    onChange={() =>
                      this.setState({
                        tempmovieGenres: !this.state.tempmovieGenres,
                      })
                    }
                  />

                  <Form.Check
                    inline
                    label="Car Mark"
                    checked={this.state.tempcarMark}
                    onChange={() =>
                      this.setState({
                        tempcarMark: !this.state.tempcarMark,
                      })
                    }
                  />

                  <Form.Check
                    inline
                    label="Money"
                    checked={this.state.tempmoney}
                    onChange={() =>
                      this.setState({
                        tempmoney: !this.state.tempmoney,
                      })
                    }
                  />

                  <Form.Check
                    inline
                    label="Color"
                    checked={this.state.tempcolor}
                    onChange={() =>
                      this.setState({
                        tempcolor: !this.state.tempcolor,
                      })
                    }
                  />
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.handleOK}>
                OK
              </Button>
              <Button variant="secondary" onClick={this.handleDefault}>
                Default
              </Button>
              <Button variant="danger" onClick={this.handleClose}>
                Cancel
              </Button>
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
