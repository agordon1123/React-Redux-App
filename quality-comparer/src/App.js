import React from 'react';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import './App.scss';

const App = () => {

  return (
    <div className="App">
      <Nav />
      <Dashboard />
    </div>
  );
}

export default App;
