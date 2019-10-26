import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CityList from './CityList';
import Metrics from './Metrics';
import getCityList from '../actions/getCityList';
import getCityMetrics from '../actions/getCityMetrics';

const Dashboard = props => {
    console.log(props);
    useEffect(() => {
        props.getCityList();
      }, []);
    
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

export default connect(mapStateToProps, { getCityList, getCityMetrics })(Dashboard);
