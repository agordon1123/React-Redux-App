import React from 'react';
import GoogleMapReact from 'google-map-react';

const Metrics = props => {
    console.log(props.city);
    return (
        <div className='dashboard-metrics'>
            <h1>{props.city.full_name}</h1>
            <p></p>
        </div>
    );
};

export default Metrics;
