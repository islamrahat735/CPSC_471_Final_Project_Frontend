import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Form, Container} from 'react-bootstrap'
function NavbarComp() {
    return (
        <div>
              <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Happy Trails Daycare</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Signup">Signup</Nav.Link>
      <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default NavbarComp
