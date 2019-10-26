import React from 'react';

const Metrics = props => {
    console.log(props.city);
    return (
        <div>
            <p>{props.city.full_name}</p>
        </div>
    );
};

export default Metrics;
