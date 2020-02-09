import axios from 'axios';

export const GET_CITIES_BY_CONTINENT_START = 'GET_CITY_BY_CONTINENT_START';
export const GET_CITIES_BY_CONTINENT_SUCCESS = 'GET_CITY_BY_CONTINENT_SUCCESS';
export const GET_CITIES_BY_CONTINENT_ERROR = 'GET_CITY_BY_CONTINENT_ERROR';

const getCitiesByContinent = url => {
    console.log(url);
    return dispatch => {
        dispatch({ type: GET_CITIES_BY_CONTINENT_START });
        axios
            .get(url)
            .then(res => {
                console.log(res);
                dispatch({ type: GET_CITIES_BY_CONTINENT_SUCCESS, payload: res.data._links['ua:items'] });
            })
            .catch(err => {
                dispatch({ type: GET_CITIES_BY_CONTINENT_ERROR, payload: err });
            });
    };
};

export default getCitiesByContinent;
