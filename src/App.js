import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import { Navbar, Nav, Container } from "react-bootstrap";
import CreateEmployee from "./components/Employees/CreateEmployee";
import EditEmployee from "./components/Employees/EditEmployee";
import EmployeesList from "./components/Employees/EmployeesList";
import Contact from "./components/Contact";
import About from "./components/About";

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
            <Nav>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </Nav>
          </Container>
        </Navbar>
        <Container style={{ paddingTop: "20px" }}>
          <Route path="/" exact component={EmployeesList} />
          <Route path="/create-employee" component={CreateEmployee} />
          <Route path="/edit-employee/:id" component={EditEmployee} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Container>
      </div>
    </Router>
  );
}

export default App;
