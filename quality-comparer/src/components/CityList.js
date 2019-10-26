import React, { useEffect, useState } from 'react';
import CityListCard from './CityListCard';

const CityList = props => {
    const [filtered, setFiltered] = useState({ cities: [] })
    console.log(props);
    return (
        <div className='city-list-container'>
            <input type='search' placeholder='Search...' className='city-search' />
            <div className='srollable-list'>
                {props.cities.length && props.cities.map(city => {
                    return <CityListCard city={city} key={city.name} getCityMetrics={props.getCityMetrics} />
                })}
            </div>
        </div>
    );
};

export default CityList;
