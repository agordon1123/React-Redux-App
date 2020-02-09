import axios from 'axios';

export const GET_CITY_IMAGES_START = 'GET_CITY_IMAGES_START';
export const GET_CITY_IMAGES_SUCCESS = 'GET_CITY_IMAGES_SUCCESS';
export const GET_CITY_IMAGES_ERROR = 'GET_CITY_IMAGES_ERROR';

const getCityImages = url => {
    return dispatch => {
        dispatch({ type: GET_CITY_IMAGES_START });
        axios
            .get(url)
            .then(res => {
                dispatch({ type: GET_CITY_IMAGES_SUCCESS, payload: res.data.photos });
            })
            .catch(err => {
                dispatch({ type: GET_CITY_IMAGES_ERROR, payload: err });
            });
    };
};

export default getCityImages;
