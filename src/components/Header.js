import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

class Header extends Component {

    check_authentication() {
        if(this.props.user) {
            return(
                <NavDropdown title={this.props.user.username} id="user-dropdown">
                    <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                    <NavDropdown.Item href="/signout">Sign Out</NavDropdown.Item>
                </NavDropdown>
            );
        } else {
            return(
                <Nav.Link href="/signin">Sign In</Nav.Link>
            );
        }
    }

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
                            {this.check_authentication()}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;