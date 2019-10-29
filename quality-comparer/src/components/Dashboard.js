import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CityList from './CityList';
import Metrics from './Metrics';
import getAllCities from '../actions/getAllCities';
import getCitiesByContinent from '../actions/getCitiesByContinent';
import getCityMetrics from '../actions/getCityMetrics';

const Dashboard = props => {
    console.log(props);
    useEffect(() => {
        // Get all citites on mount
        props.getAllCities();
      }, []);

    useEffect(() => {
        // Get citites for chosen continent when updated
        if (props.cities.continent) {
            props.getCitiesByContinent(props.cities.continent._links['continent:urban_areas'].href);
            console.log('continent info updated');
        }
    }, [props.cities.continent]);
    
    return (
        <div className='dashboard'>
            <CityList cities={props.cities.cities} getCityMetrics={props.getCityMetrics} />
            <Metrics city={props.cities.city} />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cities: state.cities
    }
};

export default connect(mapStateToProps, { getAllCities, getCityMetrics, getCitiesByContinent })(Dashboard);
