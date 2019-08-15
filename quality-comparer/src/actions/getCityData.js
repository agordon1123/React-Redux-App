import React from 'react';
import axios from 'axios';

export const FETCH_CITY_DATA_START = 'FETCH_CITY_DATA_START';
export const FETCH_CITY_DATA_SUCCESS = 'FETCH_CITY_DATA_SUCCESS';
export const ERROR = 'ERROR';

export const getCityData = () => {
    return dispatch => {
        dispatch({ type: FETCH_CITY_DATA_START });
        axios
            .get('https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/scores/')
            .then(res => {
                console.log(res);
                dispatch({ type: FETCH_CITY_DATA_SUCCESS, payload: res.data });
            })
            .catch(err => {
                console.log('err', err);
            })
        
    };
}
