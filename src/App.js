import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="sm">
          <Container>
            <Navbar.Brand href="#home">Animal Points</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#link">Teams</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
              </Nav>
              <Nav>
                <NavDropdown title="User" id="user-dropdown">
                  <NavDropdown.Item href="#user/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="#user/settings">Settings</NavDropdown.Item>
                  <NavDropdown.Item href="#user/logout">Log Out</NavDropdown.Item>
                </NavDropdown>
              </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Alert variant='success'>Hello World!</Alert>
        </Container>
      </div>
    );
  }
}

export default App;
