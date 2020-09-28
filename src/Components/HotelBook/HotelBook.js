import React from 'react';
import room1 from '../../travel-guru-master/Image/Rectangle 26.png';
import room2 from '../../travel-guru-master/Image/Rectangle 27.png';
import room3 from '../../travel-guru-master/Image/Rectangle 28.png';
import './HotelBook.css'
import star from '../../travel-guru-master/Icon/star_1_.png'
import { Container } from 'react-bootstrap';
import GoogleMap from '../GoogleMap/GoogleMap';
import Header2 from '../Header2/Header2';

const HotelBook = () => {
    

    return (
        <div>
            <Header2></Header2>
            <Container>
                <p> <small> 252 Stays Apr 13-17-3 guests </small></p>
                <h3>Stay in Cox's Bazar </h3>
           <div className="row">
               <div className="col-md-7">
                   <div className="row showLocation">
                       <div className="col-md-6 d-flex justify-content-center">
                            <img src={room1} alt=""/>
                       </div>
                       <div className="col-md-6">
                       <h4>Light bright airy stylish apt &amp; safe peaceful stay</h4>
                            <p style={{ color: "gray" }}>4 guests 2 bedrooms 2 beds 2 baths wif Air condition kitchen cancellation  fexibility available </p>
                            <small><img className="star" src={star} alt="" /> </small>
                            <span> 
                                <small style={{ fontWeight: "700" }}> 4.9(20)</small> 
                                <small style={{ fontWeight: "700" }}> $34 </small>
                                <small> night </small>
                            </span>
                       </div>
                   </div>
                   <div className="row showLocation">
                       <div className="col-md-6 d-flex justify-content-center">
                            <img src={room2} alt=""/>
                       </div>
                       <div className="col-md-6">
                       <h4>Light bright airy stylish apt &amp; safe peaceful stay</h4>
                            <p style={{ color: "gray" }}>4 guests 2 bedrooms 2 beds 2 baths wif Air condition kitchen cancellation  fexibility available </p>
                            <small><img className="star" src={star} alt="" /> </small>
                            <span> 
                                <small style={{ fontWeight: "700" }}> 4.9(20)</small> 
                                <small style={{ fontWeight: "700" }}> $34 </small>
                                <small> night </small>
                            </span>
                       </div>
                   </div>
                   <div className="row showLocation">
                       <div className="col-md-6 d-flex justify-content-center">
                            <img src={room3} alt=""/>
                       </div>
                       <div className="col-md-6">
                       <h4>Light bright airy stylish apt &amp; safe peaceful stay</h4>
                            <p style={{ color: "gray" }}>4 guests 2 bedrooms 2 beds 2 baths wif Air condition kitchen cancellation  fexibility available </p>
                            <small><img className="star" src={star} alt="" /> </small>
                            <span> 
                                <small style={{ fontWeight: "700" }}> 4.9(20)</small> 
                                <small style={{ fontWeight: "700" }}> $34 </small>
                                <small> night </small>
                            </span>
                       </div>
                   </div>
               </div>
               <div className="col-md-5">
                    <GoogleMap></GoogleMap>
               </div>
           </div>
        </Container>
        </div>
        
        );
    };

export default HotelBook;
                           