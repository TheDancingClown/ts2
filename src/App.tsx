import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm'
import data from './data/example.json'
import { TalentFilter, TalentFilterByLocation } from './utils/filter'

const App = () => {
  const filter_data = (talent_filter: typeof TalentFilter, arg2: string) => {
    const filter = new talent_filter()
    const result = filter.find_talent(data, arg2)
    console.log(result)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Contact
        </h1>
        <SearchForm 
        placeholder='Enter a location to search' 
        onClickHandler={(arg01) => filter_data(TalentFilterByLocation, arg01)}
        />
      </header>
      
    </div>
  );
}

export default App;
