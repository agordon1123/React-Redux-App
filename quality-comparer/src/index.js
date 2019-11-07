import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { leftCityReducer, rightCityReducer, cityReducer } from './reducers';
// import 'normalize.css';
import './index.scss';
import App from './App';

const rootReducer = combineReducers({left: leftCityReducer, right: rightCityReducer, cities: cityReducer })

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunk,
        logger
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
