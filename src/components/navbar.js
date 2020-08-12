import React, {Component} from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

class NavBar extends Component {
    render() {
        return(
            <Container>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">KL-Techniek</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <NavDropdown title="Projecten" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Elektro</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Installatietechniek</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Straat- en Sloopwerk</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Tuinontwerp</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Loodgieterswerk</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.6">Afspraak maken</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Container>
        )
    }
}

export default NavBar;