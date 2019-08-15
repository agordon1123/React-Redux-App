import React from 'react';
import { connect } from 'react-redux';

import './App.css';

// components
import CityList from './components/CityList';
import { getCityData } from './actions';

const App = props => {
  console.log(props)
  return (
    <div className="App">
      <h1>Hello from App</h1>
      <button onClick={props.getCityData}>getCityData</button>
      <CityList />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    city: state.city,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps, { getCityData })(App);
