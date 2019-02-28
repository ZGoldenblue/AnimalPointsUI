import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

import { Link } from 'react-router-dom';

class Header extends Component {

    check_authentication() {
        if(this.props.user) {
            return(
                <NavDropdown title={this.props.user.username} id="user-dropdown">
                    <Link className="dropdown-item" to="/profile">Profile</Link>
                    <Link className="dropdown-item" to="/settings">Settings</Link>
                    <Link className="dropdown-item" to="/signout">Sign Out</Link>
                </NavDropdown>
            );
        } else {
            return(
                <Link className="nav-item nav-link" to="/signin">Sign In</Link>
            );
        }
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="sm">
                <Container>
                    <Link className="navbar-brand" to="/">Animal Points</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className="nav-item nav-link" to="/about">About</Link>
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