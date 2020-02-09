import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import getContinents from '../actions/getContinents';
import getContinent from '../actions/getContinent';
import getAllCities from '../actions/getAllCities';

const Nav = props => {
    const [selected, setSelected] = useState('All');
    useEffect(() => {
        // Get continents on mount
        props.getContinents();
    }, []);

    return (
        <div className='nav'>
            <div className='nav-logo'>
                <h1>CompArea</h1>
            </div>

            <div className='nav-buttons'>
                <button 
                    className='nav-button'
                    style={selected === 'All' ? {border: '2px solid #4098F4'} : {border: '2px solid gray'}}
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
                                    style={selected === cont.name ? {border: '2px solid #4098F4'} : {border: '2px solid gray'}}
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
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cities: state.cities
    };
};

export default connect(mapStateToProps, { getContinents, getContinent, getAllCities })(Nav);
