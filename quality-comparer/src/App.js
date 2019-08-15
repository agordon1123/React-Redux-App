import React from 'react';
import { connect } from 'react-redux';

import './App.scss';

// components
import CityList from './components/CityList';
import { getCityData } from './actions';

const App = props => {
  console.log(props)
  return (
    <div className="App">
      <h1>CompArea</h1>
      <p>Comparea is an app built using React and Redux for async data transfer</p>
      <button onClick={props.getCityData}>getCityData</button>
      <CityList props={props} />
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
