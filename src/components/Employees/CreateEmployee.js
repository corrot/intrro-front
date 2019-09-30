import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

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
      <div style={{ marginTop: "20px" }}>
        <h2>Add new employee</h2>
        <Form>
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
          <Button variant="primary" type="submit" onSubmit={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
