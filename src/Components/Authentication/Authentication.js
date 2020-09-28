import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Authentication.css'
import icon1 from '../../travel-guru-master/Icon/fb.png'
import googleIcon from '../../travel-guru-master/Icon/google.png';

const Authentication = (props) => {
    return (
        <div>
            <div className="containerStyle">
                <Row className="d-flex align-items-center text-center">
                    <Col>
                        <div className="lineStyle justify-content-end"  style={{marginLeft: '80px'}}></div>
                    </Col>
                    <Col>
                        <h3 className="mt-3 mb-3">Or</h3>
                    </Col>
                    <Col>
                    <div className="lineStyle"  style={{marginLeft: '-83px'}}></div>
                    </Col>
                </Row>
               <Container>
                   <Row onClick={()=>props.handleSignInFacebook()} className="d-flex align-items-center loginWithstyle mb-3">
                       <Col xs={3}>
                            <img src={icon1} alt="" width="50px"/>
                       </Col>
                       <Col>
                            <h5>Continue with Facebook</h5>
                       </Col>
                   </Row>
                   <Row onClick={()=>props.handleSignInGoogle()} className="d-flex align-items-center loginWithstyle mb-3">
                        <Col xs={3}>
                        <img src={googleIcon} alt="" width="45px"/>
                        </Col>
                        <Col>
                        <h5>Continue with Google</h5>
                        </Col>
                    </Row>
               </Container>
            </div>
        </div>
    );
};

export default Authentication;