import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import getContinents from '../actions/getContinents';
import getContinent from '../actions/getContinent';
import getAllCities from '../actions/getAllCities';

const Nav = props => {
    console.log(props);
    useEffect(() => {
        console.log('nav mounted');
        props.getContinents();
    }, []);

    return (
        <div className='nav'>
            <h1>Comparea</h1>
            <button onClick={() => props.getAllCities()}>All</button>
            {
                props.cities.continents.length && props.cities.continents.map(cont => {
                    console.log(cont);
                    // Need to do two functions: one to get continent and then another to get continent:urban_areas
                    return <button key={cont.name} onClick={() => props.getContinent(cont.href)}>{cont.name}</button>
                })
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cities: state.cities
    };
};

export default connect(mapStateToProps, { getContinents, getContinent, getAllCities })(Nav);
