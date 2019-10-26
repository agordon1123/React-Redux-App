import { 
    LEFT_FETCH_CITY_DATA_START, 
    LEFT_FETCH_CITY_DATA_SUCCESS, 
    LEFT_FETCH_CITY_SCORES_START, 
    LEFT_FETCH_CITY_SCORES_SUCCESS, 
    RIGHT_FETCH_CITY_DATA_START, 
    RIGHT_FETCH_CITY_DATA_SUCCESS, 
    RIGHT_FETCH_CITY_SCORES_START, 
    RIGHT_FETCH_CITY_SCORES_SUCCESS,
    GET_CITIES_START,
    GET_CITIES_SUCCESS,
    GET_CITIES_ERROR,
    ERROR } from '../actions';
import { GET_CITY_METRICS_START, GET_CITY_METRICS_SUCCESS, GET_CITY_METRICS_ERROR } from '../actions/getCityMetrics';

const intialState = {
    left: {
        data: undefined,
        scores: undefined
    },
    right: {
        data: undefined,
        scores: undefined
    },
    rating: [],
    isLoading: false,
    error: ''
};

const cityState = {
    isLoading: false,
    error: '',
    cities: [],
    city: {}
}

export const leftCityReducer = (state = intialState, action) => {
    switch(action.type) {
        case LEFT_FETCH_CITY_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case LEFT_FETCH_CITY_DATA_SUCCESS:
            return {
                ...state,
                left: {
                    ...state.left,
                    data: action.payload,
                },
                isLoading: false,
                error: ''
            };
        case LEFT_FETCH_CITY_SCORES_START:
                return {
                    ...state,
                    isLoading: true,
                    error: ''
                };
        case LEFT_FETCH_CITY_SCORES_SUCCESS:
            return {
                ...state,
                left: {
                    ...state.left,
                    scores: action.payload
                },
                isLoading: false,
                error: ''
            };     
        case ERROR:
            return {
                ...state,
                isLoading: false,
                error: 'Server Error :('
            };
        default:
            return state;
    }
};

export const rightCityReducer = (state = intialState, action) => {
    switch(action.type) {
        case RIGHT_FETCH_CITY_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case RIGHT_FETCH_CITY_DATA_SUCCESS:
            return {
                ...state,
                right: {
                    ...state.right,
                    data: action.payload,
                },
                isLoading: false,
                error: ''
            };
        case RIGHT_FETCH_CITY_SCORES_START:
                return {
                    ...state,
                    isLoading: true,
                    error: ''
                };
        case RIGHT_FETCH_CITY_SCORES_SUCCESS:
            return {
                ...state,
                right: {
                    ...state.right,
                    scores: action.payload
                },
                isLoading: false,
                error: ''
            };     
        case ERROR:
            return {
                ...state,
                isLoading: false,
                error: 'Server Error :('
            };
        default:
            return state;
    }
};

export const cityReducer = (state = cityState, action) => {
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
        default:
            return state;
    }
}
