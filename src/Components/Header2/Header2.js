import React, { useContext } from 'react';
import { Navbar, Nav, FormControl, Form, Button, Container, Row, Col } from 'react-bootstrap';
import logo1 from '../../travel-guru-master/Logo1.png';
import { userContext } from '../../App';

const Header2 = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const {name} = loggedInUser;
    return (
        <div  className="mb-5">
        <Container>
          <Row>
            <Col xs={4}>
               
                <Navbar.Brand href="#home"><img src={logo1} width="100px" alt=""/></Navbar.Brand>
            </Col>
           <Col>
           <Nav >
              <Nav.Link href="#home" style={{color: "black"}}>News</Nav.Link>
              <Nav.Link href="#features" style={{color: "black"}}>Destination</Nav.Link>
              <Nav.Link href="#pricing" style={{color: "black"}}>Blog</Nav.Link>
              <Nav.Link href="#pricing" style={{color: "black"}}>Contact</Nav.Link>
            </Nav>
           </Col>
           <Col xs={2}>
           {
                name ? <button className="button" style={{width: '130px'}}> {name}</button> : <button className="button" style={{width: '85px'}}>login</button>
              }
           </Col>
          </Row>
            
        </Container>
   
   </div>
    );
};

export default Header2;