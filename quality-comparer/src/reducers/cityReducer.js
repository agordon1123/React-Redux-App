import { 
    LEFT_FETCH_CITY_DATA_START, 
    LEFT_FETCH_CITY_DATA_SUCCESS, 
    LEFT_FETCH_CITY_SCORES_START, 
    LEFT_FETCH_CITY_SCORES_SUCCESS, 
    RIGHT_FETCH_CITY_DATA_START, 
    RIGHT_FETCH_CITY_DATA_SUCCESS, 
    RIGHT_FETCH_CITY_SCORES_START, 
    RIGHT_FETCH_CITY_SCORES_SUCCESS, 
    ERROR } from '../actions';

const intialState = {
    left: {
        data: [],
        scores: []
    },
    right: {
        data: [],
        scores: []
    },
    rating: [],
    isLoading: false,
    error: ''
};

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
