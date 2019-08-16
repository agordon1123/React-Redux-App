import axios from 'axios';

export const LEFT_FETCH_CITY_DATA_START = 'LEFT_FETCH_CITY_DATA_START';
export const LEFT_FETCH_CITY_SCORES_START = 'LEFT_FETCH_CITY_SCORES_START';
export const LEFT_FETCH_CITY_DATA_SUCCESS = 'LEFT_FETCH_CITY_DATA_SUCCESS';
export const LEFT_FETCH_CITY_SCORES_SUCCESS = 'LEFT_FETCH_CITY_SCORES_SUCCESS';
export const RIGHT_FETCH_CITY_DATA_START = 'RIGHT_FETCH_CITY_DATA_START';
export const RIGHT_FETCH_CITY_SCORES_START = 'RIGHT_FETCH_CITY_SCORES_START';
export const RIGHT_FETCH_CITY_DATA_SUCCESS = 'RIGHT_FETCH_CITY_DATA_SUCCESS';
export const RIGHT_FETCH_CITY_SCORES_SUCCESS = 'RIGHT_FETCH_CITY_SCORES_SUCCESS';
export const ERROR = 'ERROR';

export const getLeftCityData = (target) => {
    console.log(target)
    return dispatch => {
        dispatch({ type: LEFT_FETCH_CITY_DATA_START });
        axios
            .get(`https://api.teleport.org/api/urban_areas/slug:${target}/`)
            .then(res => {
                console.log(res);
                dispatch({ type: LEFT_FETCH_CITY_DATA_SUCCESS, payload: res.data });
            })
            .catch(err => {
                console.log('err', err);
            });
        dispatch({ type: LEFT_FETCH_CITY_SCORES_START });
        axios
            .get(`https://api.teleport.org/api/urban_areas/slug:${target}/scores/`)
            .then(res => {
                console.log(res);
                dispatch({ type: LEFT_FETCH_CITY_SCORES_SUCCESS, payload: res.data });
            })
            .catch(err => {
                console.log('err', err);
            })
    };
}

export const getRightCityData = (target) => {
    console.log(target)
    return dispatch => {
        dispatch({ type: RIGHT_FETCH_CITY_DATA_START });
        axios
            .get(`https://api.teleport.org/api/urban_areas/slug:${target}/`)
            .then(res => {
                console.log(res);
                dispatch({ type: RIGHT_FETCH_CITY_DATA_SUCCESS, payload: res.data });
            })
            .catch(err => {
                console.log('err', err);
            });
        dispatch({ type: RIGHT_FETCH_CITY_SCORES_START });
        axios
            .get(`https://api.teleport.org/api/urban_areas/slug:${target}/scores/`)
            .then(res => {
                console.log(res);
                dispatch({ type: RIGHT_FETCH_CITY_SCORES_SUCCESS, payload: res.data });
            })
            .catch(err => {
                console.log('err', err);
            })
    };
}
