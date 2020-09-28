import React, { useState } from 'react';
import './StartBooking.css'
import { Card, Col, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import calenderIcon from '../../travel-guru-master/Icon/calender_icon.png'
import { useHistory } from 'react-router-dom';

const StartBooking = (props) => {
  const {title} = props.placeData;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const history = useHistory();
  const handleBooking = () =>{
      history.push('/hotelBooking');
  }
    return (
        <div  style={{margin: "0 auto"}}>
            <Card style={{ width: '30rem'}}>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Origin</Card.Subtitle>
              <h3 className="backgroundStyle mb-3">Dhaka</h3>
              <Card.Subtitle className="mb-2 text-muted">Destination</Card.Subtitle>
              <h3 className="backgroundStyle mb-3"> {title} </h3>
              <Row>
                <Col>
                    <Card.Subtitle className="mb-2 text-muted">Form</Card.Subtitle>
                    <Row className="mb-3">
                        <Col xs={8}>
                            <DatePicker className="inputStyle"
                            selected={startDate} 
                            onChange={date => setStartDate(date)} 
                            minDate={new Date()}
                            showYearDropdown
                            scrollableMonthYearDropdown
                            dateFormat='dd/MM/yyyy'
                            />
                      </Col>
                        <Col>
                        <img className="iconStyle" src={calenderIcon} alt=""/>
                        </Col>
                      </Row>
                </Col>
                <Col>
                    <Card.Subtitle className="mb-2 text-muted">To</Card.Subtitle>
                      <Row className="mb-3">
                        <Col xs={8}>
                            <DatePicker className="inputStyle"
                            selected={endDate} 
                            onChange={date => setEndDate(date)} 
                            minDate={new Date()}
                            showYearDropdown
                            scrollableMonthYearDropdown
                            dateFormat='dd/MM/yyyy'
                            />
                      </Col>
                        <Col>
                        <img className="iconStyle" src={calenderIcon} alt=""/>
                        </Col>
                      </Row>
                </Col>
              </Row>
              </Card.Body>
              <Row className="mb-3">
                <Col>
                <div className="buttonStyle">
                
                <button onClick={handleBooking} className="button"> Start Booking</button>
                
                </div>
                      
                </Col> 
              </Row>
            </Card>
        </div>
    );
};

export default StartBooking;