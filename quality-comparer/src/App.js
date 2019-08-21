import React from 'react';
// import { connect } from 'react-redux';

import './App.scss';

// components
import CityList from './components/CityList';
import Header from './components/Header';
// import { getLeftCityData } from './actions';

const App = props => {
  console.log(props)
  return (
    <div className="App">
      <Header />
      <CityList props={props} />
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     left: state.left,
//     right: state.right,
//     isLoading: state.isLoading,
//     error: state.error
//   }
// }

export default App;
