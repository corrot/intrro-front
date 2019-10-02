import React, { Component } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import { getDateTime } from "../../utils";
import { API_BASE_URL } from "../../constants";

export default class EmployeesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }

  fetchData() {
    axios
      .get(`${API_BASE_URL}/employees/`)
      .then(response => {
        const { data } = response;
        this.setState({ employees: data });
      })
      .catch(err => console.log("Error: ", err));
  }

  componentDidMount() {
    this.fetchData();
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
              <th>Created</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {employees.map((e, i) => {
              return (
                <tr key={e._id}>
                  <td>{i + 1}</td>
                  <td>{e.employee_first_name}</td>
                  <td>{e.employee_last_name}</td>
                  <td>{e.employee_address}</td>
                  <td>{e.employee_email}</td>
                  <td>{getDateTime(e.employee_add_date)}</td>
                  <td>
                    <Link to={`/edit-employee/${e._id}`}>Edit</Link>
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
