import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Contact
        </h1>
        <SearchForm placeholder='Enter a location to search'/>
      </header>
      
    </div>
  );
}

export default App;
