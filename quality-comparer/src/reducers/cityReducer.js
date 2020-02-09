import { 
    GET_CITIES_START,
    GET_CITIES_SUCCESS,
    GET_CITIES_ERROR,
    GET_CONTINENTS_START,
    GET_CONTINENTS_SUCCESS,
    GET_CONTINENTS_ERROR,
    GET_CONTINENT_START,
    GET_CONTINENT_SUCCESS,
    GET_CONTINENT_ERROR,
    GET_CITIES_BY_CONTINENT_START,
    GET_CITIES_BY_CONTINENT_SUCCESS,
    GET_CITIES_BY_CONTINENT_ERROR,
    GET_CITY_IMAGES_START,
    GET_CITY_IMAGES_SUCCESS,
    GET_CITY_IMAGES_ERROR,
    GET_CITY_SALARIES_START,
    GET_CITY_SALARIES_SUCCESS,
    GET_CITY_SALARIES_ERROR,
    GET_CITY_DETAILS_START,
    GET_CITY_DETAILS_SUCCESS,
    GET_CITY_DETAILS_ERROR,
    GET_CITY_SCORES_START,
    GET_CITY_SCORES_SUCCESS,
    GET_CITY_SCORES_ERROR,
    ERROR } from '../actions';

import { GET_CITY_METRICS_START, GET_CITY_METRICS_SUCCESS, GET_CITY_METRICS_ERROR } from '../actions/getCityMetrics';

const intialState = {
    isLoading: false,
    error: '',
    cities: [],
    city: {},
    continents: [],
    continent: undefined,
    images: [],
    salaries: [],
    details: [],
    scores: []
}

export const cityReducer = (state = intialState, action) => {
    switch(action.type) {
        case GET_CITIES_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case GET_CITIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cities: action.payload
            }
        case GET_CITIES_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_CITY_METRICS_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case GET_CITY_METRICS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                city: action.payload
            }
        case GET_CITY_METRICS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_CONTINENTS_START:
            return {
                ...state,
                isLoading: true,
            }
        case GET_CONTINENTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                continents: action.payload
            }
        case GET_CONTINENTS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_CONTINENT_START:
            return {
                ...state,
                isLoading: true,
            }
        case GET_CONTINENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                continent: action.payload
            }
        case GET_CONTINENT_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_CITIES_BY_CONTINENT_START:
            return {
                ...state,
                isLoading: true
            }
        case GET_CITIES_BY_CONTINENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cities: action.payload
            }
        case GET_CITIES_BY_CONTINENT_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_CITY_IMAGES_START:
            return {
                ...state,
                isLoading: true
            }
        case GET_CITY_IMAGES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                images: action.payload
            }
        case GET_CITY_IMAGES_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_CITY_SALARIES_START:
            return {
                ...state,
                isLoading: true
            }
        case GET_CITY_SALARIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                salaries: action.payload
            }
        case GET_CITY_SALARIES_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_CITY_DETAILS_START:
            return {
                ...state,
                isLoading: true
            }
        case GET_CITY_DETAILS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                details: action.payload
            }
        case GET_CITY_DETAILS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_CITY_SCORES_START:
            return {
                ...state,
                isLoading: true
            }
        case GET_CITY_SCORES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                scores: action.payload
            }
        case GET_CITY_SCORES_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
