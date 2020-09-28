import React from 'react';
import './PlacesViews.css'
import { Card, Col } from 'react-bootstrap';

    function PlacesViews(props) {
        const data = props.data;
        return (
          
            <Col>
            <Card className="Card">
              <Card.Img onClick={()=>props.clikedPlaceDetails(data.id)} style={{borderRadius: "15px"}} src={data.image}/>
            </Card>
            </Col>
        );
      };

export default PlacesViews;