import React, { useState } from 'react';
import fakeData from '../../Fakedata/Fakedata'
import './Places.css'
import { Col, Container, Row } from 'react-bootstrap';
import PlacesViews from '../PlacesViews/PlacesViews';
import PlacesDetails from '../PlacesDetails/PlacesDetails';
import StartBooking from '../StartBooking/StartBooking';
import Header from '../Header/Header';

const Places = () => {
    const [placeData, setPlaceData] = useState({title: "Sajek",details: "Sajek Valley - is an emerging tourist spot in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District.The valley is 1,476 feet (450 m) above sea level.Sajek valley is known as the Queen of Hills & Roof of Rangamati."});
    const clikedPlaceDetails = (id) => {
        const placeDetails = fakeData.find(data => data.id===id);
        setPlaceData(placeDetails);
    }
    const [showBooking, setShowBooking] = useState(false);
    const toggleBooking = () => {
        setShowBooking(!showBooking);
    }
    return (
        <div className="backgroundImage">
            <Header></Header>
            <Container style={{color: "white"}}>
            <Row>
                <Col>
                    <PlacesDetails placeData={placeData} toggleBooking={toggleBooking} showBooking={showBooking} ></PlacesDetails>
                </Col>
                <Col xs={7}>
                    <Row>
                        {
                            showBooking ? <StartBooking placeData={placeData} ></StartBooking> : 
                                fakeData.map(data => <PlacesViews data={data} clikedPlaceDetails={clikedPlaceDetails}></PlacesViews>)
                            
                        }
                    
                    </Row>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Places;