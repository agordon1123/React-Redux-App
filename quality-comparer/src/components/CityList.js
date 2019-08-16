import React from 'react';
import CityRight from './CityRight';
import CityLeft from './CityLeft';

const CityList = (props) => {
    console.log(props)
    return (
        <div className='cityList'>
            <CityLeft props={props}/>
            <CityRight props={props} />
        </div>
    )
}

export default CityList;
