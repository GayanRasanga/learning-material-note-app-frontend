
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function NavBar() {

const [input,setInput] = useState("")




  return (
    <Navbar 
    bg="primary" 
    variant="dark"
    >
    <Container
    fluid>
      <Navbar.Brand><Link className='nav-link' to={"/add"}>Learning Material App</Link>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto"
          style={{ maxHeight: '100px'}}
          navbarScroll
        >
          <Link className='nav-link' to={"/add"}>Add Note</Link>
          <Link className='nav-link' to={"/view"}>View Notes</Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  );
}

export default NavBar;