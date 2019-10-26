import axios from 'axios';

export const GET_CITIES_START = 'GET_CITIES_START';
export const GET_CITIES_SUCCESS = 'GET_CITIES_SUCCESS';
export const GET_CITIES_ERROR = 'GET_CITIES_ERROR';

const getCityList = () => {
    return dispatch => {
        dispatch({ type: GET_CITIES_START });
        axios
            .get('https://api.teleport.org/api/urban_areas')
            .then(res => {
                dispatch({ type: GET_CITIES_SUCCESS, payload: res.data._links['ua:item'] });
            })
            .catch(err => {
                dispatch({ type: GET_CITIES_ERROR, payload: err });
            });
    };
};

export default getCityList;
