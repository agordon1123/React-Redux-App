import React from 'react';

const City = (props) => {
    return (
        <>
            <option name='rightOption' value={props.city.name}>{props.city.name}</option>
        </>
    )
}

export default City;
