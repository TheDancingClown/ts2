import React, { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm/SearchForm'
import ResultsDisplay from './components/ResultsDisplay/ResultsDisplay'
import { TalentFilter, TalentFilterByLocation, Talent } from './utils/filter'
import data from './data/example.json'

const App = () => {

  const [talentPool, filterTalentPool] = useState<Talent[]>([])

  const filter_data = async (talent_filter: typeof TalentFilter, arg2: string) => {
    const filter = new talent_filter()
    let result = filter.find_talent(data, arg2)
    filterTalentPool(result)
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact</h1>
        <SearchForm
        header='Enter a city and press Search'
        placeholder='Enter a location' 
        onClickHandler={(arg01) => filter_data(TalentFilterByLocation, arg01)}
        />
        <ResultsDisplay data={talentPool}/>
      </header>
      
    </div>
  );
}

export default App;
