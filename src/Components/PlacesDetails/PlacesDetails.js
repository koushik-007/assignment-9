import React from 'react';

const PlacesDetails = (props) => {
    const {title, details} = props.placeData;
    return (
        <div>
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                <p>{details}</p>
            </div>
            <div>
                {!props.showBooking && <button className="button" style={{width: '85px'}} onClick={()=>props.toggleBooking()}>Booking</button>}
            </div>
        </div>
    );
};

export default PlacesDetails;