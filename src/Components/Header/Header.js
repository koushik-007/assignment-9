import React from 'react';
import { Navbar, Nav, FormControl, Form, Button, Container } from 'react-bootstrap';
import logo from '../../travel-guru-master/Logo.png'
const Header = () => {
  
    return (
        <div  className="mb-5">
        <Container>
            <Navbar variant="dark">
            <Navbar.Brand href="#home"><img src={logo} width="100px" alt=""/></Navbar.Brand>
            <Form  className="mr-auto">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
            <Nav >
              <Nav.Link href="#home">News</Nav.Link>
              <Nav.Link href="#features">Destination</Nav.Link>
              <Nav.Link href="#pricing">Blog</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
            <button className="button" style={{width: '85px'}}>login</button>
          </Navbar>
        </Container>
   
   </div>
    );
};

export default Header;