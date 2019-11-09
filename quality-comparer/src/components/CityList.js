import React, { useEffect, useState } from 'react';
import CityListCard from './CityListCard';

const CityList = props => {
    const [filtered, setFiltered] = useState({ cities: [] });
    const [selected, setSelected] = useState('');

    useEffect(() => {
        if(props.cities.length) {
            setFiltered({ cities: props.cities });
        }
    }, [props.cities]);

    const handleChange = e => {
        // Alphanumeric check
        const re = /^[a-z0-9\s]+$/i;
        const cities = props.cities;

        if(e.target.value !== "" && re.test(e.target.value) && cities.length > 0) {
            setFiltered({
                cities: cities.filter(el => {
                    return (
                        el.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1
                    )
                })
            })
        } else if(!re.test(e.target.value) && e.target.value !== "") {

        } else {
            setFiltered({ cities: cities });
        }
    }

    return (
        <div className='city-list-container'>
            <input onChange={handleChange} type='search' placeholder='Search...' className='city-search' />
            <div className='srollable-list'>
                {filtered.cities.length && filtered.cities.map(city => {
                    return <CityListCard city={city} key={city.name} getCityMetrics={props.getCityMetrics} selected={selected} setSelected={setSelected} />
                })}
            </div>
        </div>
    );
};

export default CityList;
