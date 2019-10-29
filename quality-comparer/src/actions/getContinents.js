import axios from 'axios';

export const GET_CONTINENTS_START = 'GET_CONTINENTS_START';
export const GET_CONTINENTS_SUCCESS = 'GET_CONTINENTS_SUCCESS';
export const GET_CONTINENTS_ERROR = 'GET_CONTINENTS_ERROR';

const getContinents = () => {
    return dispatch => {
        dispatch({ type: GET_CONTINENTS_START });
        axios
            .get('https://api.teleport.org/api/continents/')
            .then(res => {
                dispatch({ type: GET_CONTINENTS_SUCCESS, payload: res.data._links['continent:items'] });
            })
            .catch(err => {
                dispatch({ type: GET_CONTINENTS_ERROR, payload: err });
            })
    };
};

export default getContinents;
