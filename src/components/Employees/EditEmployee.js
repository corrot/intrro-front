import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Modal } from "react-bootstrap";
import { API_BASE_URL } from "../../constants";

export default class EditEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      employee_first_name: "",
      employee_last_name: "",
      employee_address: "",
      employee_email: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    axios.get(`${API_BASE_URL}/employees/${id}`).then(response => {
      const {
        employee_first_name,
        employee_last_name,
        employee_address,
        employee_email
      } = response.data;
      return this.setState({
        employee_first_name,
        employee_last_name,
        employee_address,
        employee_email
      });
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const {
      match: {
        params: { id }
      }
    } = this.props;

    const {
      employee_first_name,
      employee_last_name,
      employee_address,
      employee_email
    } = this.state;

    const newEmployee = {
      employee_first_name,
      employee_last_name,
      employee_address,
      employee_email
    };

    axios
      .post(`${API_BASE_URL}/employees/update/${id}`, newEmployee)
      .then(response => {
        console.log(response.data);
      });

    this.props.history.push("/");
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleDelete() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    axios
      .get(`${API_BASE_URL}/employees/delete/${id}`)
      .then(response => console.log(response.data));

    this.handleClose();

    this.props.history.push("/");
  }

  render() {
    const {
      employee_first_name,
      employee_last_name,
      employee_address,
      employee_email,
      show
    } = this.state;
    return (
      <div>
        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to remove {employee_first_name}{" "}
            {employee_last_name} from the list?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Nope
            </Button>
            <Button variant="primary" onClick={this.handleDelete}>
              Sure!
            </Button>
          </Modal.Footer>
        </Modal>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>First Name *</Form.Label>
            <Form.Control
              onChange={e => this.handleChange(e)}
              type="text"
              name="employee_first_name"
              placeholder="type..."
              value={employee_first_name}
              required
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Last Name *</Form.Label>
            <Form.Control
              onChange={e => this.handleChange(e)}
              type="text"
              name="employee_last_name"
              placeholder="type..."
              value={employee_last_name}
              required
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              onChange={e => this.handleChange(e)}
              type="text"
              name="employee_address"
              placeholder="type..."
              value={employee_address}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput4">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={e => this.handleChange(e)}
              type="email"
              name="employee_email"
              placeholder="name@example.com"
              value={employee_email}
            />
          </Form.Group>
          <Button variant="danger" className="mr-2" onClick={this.handleShow}>
            Delete
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
