import React from 'react';

const CityListCard = props =>{
    console.log(props);
    return (
        <div onClick={() => props.getCityMetrics(props.city.href)}>
            <p>{props.city.name}</p>
        </div>
    );
};

export default CityListCard;
