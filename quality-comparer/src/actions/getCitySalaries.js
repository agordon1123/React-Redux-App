import axios from 'axios';

export const GET_CITY_SALARIES_START = 'GET_CITY_SALARIES_START';
export const GET_CITY_SALARIES_SUCCESS = 'GET_CITY_SALARIES_SUCCESS';
export const GET_CITY_SALARIES_ERROR = 'GET_CITY_SALARIES_ERROR';

const getCitySalaries = url => {
    return dispatch => {
        dispatch({ type: GET_CITY_SALARIES_START });
        axios
            .get(url)
            .then(res => {
                console.log(res.data);
                dispatch({ type: GET_CITY_SALARIES_SUCCESS, payload: res.data.salaries });
            })
            .catch(err => {
                dispatch({ type: GET_CITY_SALARIES_ERROR, payload: err });
            });
    };
};

export default getCitySalaries;
