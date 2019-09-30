import React, { Component } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../constants";

export default class EmployeesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    axios
      .get(`${API_BASE_URL}/employees/`)
      .then(response => {
        const { data } = response;
        this.setState({ employees: data });
      })
      .catch(err => console.log("Error: ", err));
  }

  render() {
    const { employees } = this.state;
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {employees.map((e, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{e.employee_first_name}</td>
                  <td>{e.employee_last_name}</td>
                  <td>{e.employee_address}</td>
                  <td>{e.employee_email}</td>
                  <td>
                    <Link to={`/edit-employee/${e._id}`}>Edit</Link>
                  </td>
                  <td>
                    <Link to={`/delete-employee/${e._id}`}>Delete</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
