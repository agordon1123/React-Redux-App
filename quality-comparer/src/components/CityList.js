import React from 'react';
import CityRight from './CityRight';
import CityLeft from './CityLeft';

const CityList = (props) => {
    console.log(props)
    return (
        <div className='cityList'>
            <CityLeft />
            <CityRight />
        </div>
    )
}

export default CityList;
