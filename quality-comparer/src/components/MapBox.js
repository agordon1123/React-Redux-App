import React from 'react';
import GoogleMapReact from 'google-map-react';

const MapBox = ({ props }) => {
    console.log(props);

    const staticProps = {
        center: {lat: (props.north + props.south) / 2, lng: (props.east + props.west) /2},
    };

    return (
        <div className='mapbox-container'>
            <GoogleMapReact
                defaultZoom={8}
                defaultCenter={staticProps.center}
                center={staticProps.center}
                bootstrapURLKeys={{
                    key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, 
                    language: 'en'
                }}    
            />
        </div>
    );
};

export default MapBox;
