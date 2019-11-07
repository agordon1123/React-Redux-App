import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CityList from './CityList';
import Metrics from './Metrics';
import getAllCities from '../actions/getAllCities';
import getCitiesByContinent from '../actions/getCitiesByContinent';
import getCityMetrics from '../actions/getCityMetrics';
import getCityImages from '../actions/getCityImages';
import getCitySalaries from '../actions/getCitySalaries';
import getCityDetails from '../actions/getCityDetails';
import getCityScores from '../actions/getCityScores';

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
        }
    }, [props.cities.continent]);
    
    return (
        <div className='dashboard'>
            <CityList cities={props.cities.cities} getCityMetrics={props.getCityMetrics} getCityScores={props.getCityScores} />
            <Metrics city={props.cities.city} getCityImages={props.getCityImages} images={props.cities.images} getCitySalaries={props.getCitySalaries} salaries={props.cities.salaries} details={props.cities.details} getCityDetails={props.getCityDetails} getCityScores={props.getCityScores} scores={props.cities.scores} />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cities: state.cities
    }
};

export default connect(mapStateToProps, { getAllCities, getCityMetrics, getCitiesByContinent, getCityImages, getCitySalaries, getCityDetails, getCityScores })(Dashboard);
