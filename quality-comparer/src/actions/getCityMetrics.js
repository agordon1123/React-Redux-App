import axios from 'axios';

export const GET_CITY_METRICS_START =  'GET_CITY_METRICS_START';
export const GET_CITY_METRICS_SUCCESS =  'GET_CITY_METRICS_SUCCESS';
export const GET_CITY_METRICS_ERROR =  'GET_CITY_METRICS_ERROR';

const getCityMetrics = url => {
    console.log(url)
    return dispatch => {
        dispatch({ type: GET_CITY_METRICS_START });
        axios
            .get(url)
            .then(res => {
                dispatch({ type: GET_CITY_METRICS_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: GET_CITY_METRICS_ERROR });
            });
    };
};

export default getCityMetrics;
