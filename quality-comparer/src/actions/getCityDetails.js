import axios from 'axios';

export const GET_CITY_DETAILS_START = 'GET_CITY_DETAILS_START';
export const GET_CITY_DETAILS_SUCCESS = 'GET_CITY_DETAILS_SUCCESS';
export const GET_CITY_DETAILS_ERROR = 'GET_CITY_DETAILS_ERROR';

const getCityDetails = url => {
    return dispatch => {
        dispatch({ type: GET_CITY_DETAILS_START });
        axios
            .get(url)
            .then(res => {
                dispatch({ type: GET_CITY_DETAILS_SUCCESS, payload: res.data.categories });
            })
            .catch(err => {
                dispatch({ type: GET_CITY_DETAILS_ERROR, payload: err });
            });
    };
};

export default getCityDetails;
