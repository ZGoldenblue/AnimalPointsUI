import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container'

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="sm">
                <Container>
                    <Navbar.Brand href="/">Animal Points</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/teams">Teams</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav>
                        <Nav>
                            <NavDropdown title="User" id="user-dropdown">
                                <NavDropdown.Item href="/user/profile">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="/user/settings">Settings</NavDropdown.Item>
                                <NavDropdown.Item href="/user/logout">Log Out</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;