import { FETCH_CITY_DATA_START, FETCH_CITY_DATA_SUCCESS, ERROR } from '../actions';

const intialState = {
    city: [],
    isLoading: false,
    error: ''
};

export const cityReducer = (state = intialState, action) => {
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
                city: action.payload,
                isLoading: false,
                error: ''
            };
        // case ERROR:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         error: 'Server Error :('
        //     };
        default:
            return state;
    }
};
