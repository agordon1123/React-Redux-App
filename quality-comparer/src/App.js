import React from 'react';
import { connect } from 'react-redux';

import './App.scss';

// components
import CityList from './components/CityList';
import { getLeftCityData } from './actions';

const App = props => {
  console.log(props)
  return (
    <div className="App">
      <h1>CompArea</h1>
      <p>Comparea is an app built using React and Redux for async data transfer</p>
      <button onClick={props.getLeftCityData}>getCityData</button>
      <CityList props={props} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    left: state.left,
    right: state.right,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps, { getLeftCityData })(App);
