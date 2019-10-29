import axios from 'axios';
import getCityList from './getAllCities';

export const GET_CONTINENT_START = 'GET_CONTINENT_START';
export const GET_CONTINENT_SUCCESS = 'GET_CONTINENT_SUCCESS';
export const GET_CONTINENT_ERROR = 'GET_CONTINENT_ERROR';

const getContinent = url => {
    console.log(url);
    return dispatch => {
        dispatch({ type: GET_CONTINENT_START });
        axios
            .get(url)
            .then(res => {
                console.log(res.data._links['continent:urban_areas'].href);
                // getCityList(res.data._links['continent:urban_areas'].href);
                dispatch({ type: GET_CONTINENT_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: GET_CONTINENT_ERROR, payload: err });
            })
    };
};

export default getContinent;
