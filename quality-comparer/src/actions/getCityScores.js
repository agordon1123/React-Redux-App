import axios from 'axios';

export const GET_CITY_SCORES_START = 'GET_CITY_SSCORES_START';
export const GET_CITY_SCORES_SUCCESS = 'GET_CITY_SSCORES_SUCCESS';
export const GET_CITY_SCORES_ERROR = 'GET_CITY_SSCORES_ERROR';

const getCityScores = url => {
    return dispatch => {
        dispatch({ type: GET_CITY_SCORES_START });
        axios
            .get(url)
            .then(res => {
                console.log(res.data);
                dispatch({ type: GET_CITY_SCORES_SUCCESS, payload: res.data.categories });
            })
            .catch(err => {
                dispatch({ type: GET_CITY_SCORES_ERROR, payload: err });
            });
    };
};

export default getCityScores;
