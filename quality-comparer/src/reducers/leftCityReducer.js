import { 
    FETCH_CITY_DATA_START, 
    FETCH_CITY_DATA_SUCCESS, 
    FETCH_CITY_SCORES_START, 
    FETCH_CITY_SCORES_SUCCESS, 
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
        case FETCH_CITY_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_CITY_DATA_SUCCESS:
            return {
                ...state,
                left: {
                    ...state.left,
                    data: action.payload,
                },
                isLoading: false,
                error: ''
            };
        case FETCH_CITY_SCORES_START:
                return {
                    ...state,
                    isLoading: true,
                    error: ''
                };
        case FETCH_CITY_SCORES_SUCCESS:
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
