import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
function nav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Simple Notes</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Groups</Nav.Link>
            <NavDropdown title="Notes" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Recent</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Create</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">@gyanendrapc</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default nav