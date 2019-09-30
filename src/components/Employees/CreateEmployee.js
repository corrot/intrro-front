import React, { Component } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

import { API_BASE_URL } from "../../constants";

export default class CreateEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      email: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { firstName, lastName, email, address } = this.state;

    const newEmployee = {
      employee_first_name: firstName,
      employee_last_name: lastName,
      employee_email: email,
      employee_address: address
    };

    axios
      .post(`${API_BASE_URL}/employees/add`, newEmployee)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    this.setState({
      firstName: "",
      lastName: "",
      address: "",
      email: ""
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.name, e.target.value);
  }

  render() {
    return (
      <div>
        <h2>Add new employee</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              onChange={e => this.handleChange(e)}
              type="text"
              name="firstName"
              placeholder="type..."
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              onChange={e => this.handleChange(e)}
              type="text"
              name="lastName"
              placeholder="type..."
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              onChange={e => this.handleChange(e)}
              type="text"
              name="address"
              placeholder="type..."
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput4">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={e => this.handleChange(e)}
              type="email"
              name="email"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
