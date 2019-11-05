import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import getContinents from '../actions/getContinents';
import getContinent from '../actions/getContinent';
import getAllCities from '../actions/getAllCities';

const Nav = props => {
    console.log(props);
    const [selected, setSelected] = useState('All');
    console.log(selected);
    useEffect(() => {
        // Get continents on mount
        props.getContinents();
    }, []);

    return (
        <div className='nav'>
            <h1>Comparea</h1>
            <button 
                className='nav-button'
                style={selected === 'All' ? {border: '2px solid blue'} : {border: '2px solid gray'}}
                onClick={() => {
                    props.getAllCities();
                    setSelected('All');
                }}
            >All</button>
            {
                props.cities.continents.length && props.cities.continents.map(cont => {
                    console.log(cont);
                    if(cont.name === "Antarctica") {
                        // No urban areas in this continent
                        return null;
                    } else {
                        return (
                            <button 
                                className='nav-button'
                                style={selected === cont.name ? {border: '2px solid blue'} : {border: '2px solid gray'}}
                                key={cont.name}
                                onClick={() => {
                                    props.getContinent(cont.href);
                                    setSelected(cont.name);
                                }}
                            >{cont.name}</button>
                        )
                    }
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
