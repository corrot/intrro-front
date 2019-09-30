import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import { Navbar, Nav, Container } from "react-bootstrap";
import CreateEmployee from "./components/Employees/CreateEmployee";
import DeleteEmployee from "./components/Employees/DeleteEmployee";
import EditEmployee from "./components/Employees/EditEmployee";
import EmployeesList from "./components/Employees/EmployeesList";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Link className="navbar-brand" to="/">
              Intrro
            </Link>
            <Nav className="mr-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/create-employee" className="nav-link">
                Add employee
              </Link>
            </Nav>
          </Container>
        </Navbar>
        <Container style={{ paddingTop: "20px" }}>
          <Route path="/" exact component={EmployeesList} />
          <Route path="/create-employee" component={CreateEmployee} />
          <Route path="/delete-employee" component={DeleteEmployee} />
          <Route path="/edit-employee/:id" component={EditEmployee} />
        </Container>
      </div>
    </Router>
  );
}

export default App;
