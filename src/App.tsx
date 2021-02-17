import React from 'react';
import FilterPage from './components/FilterPage/FilterPage'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact</h1>
        <FilterPage/>
      </header>
    </div>
  );
};

export default App;
