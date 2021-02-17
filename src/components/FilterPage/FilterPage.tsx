import React, { useState } from 'react'
import SearchForm from '../SearchForm/SearchForm';
import ResultsDisplay from '../ResultsDisplay/ResultsDisplay';
import { findTalentByLocation } from '../../utils/filter';
import data from '../../data/example.json';
import type { Talent } from '../../utils/filter'

const Filter = () => {

  const [talentPool, filterTalentPool] = useState<Talent[]>(data);

  const displayFilteredResults = async (callback: (data: Talent[], searchValue:string)=>Talent[], searchValue: string) => {
    await filterTalentPool(callback(data, searchValue))
  }

  return(
    <div>
      <SearchForm
      header='Enter a city and press Search to filter talent'
      placeholder='Enter a location' 
      onClickHandler={(location) => displayFilteredResults(findTalentByLocation, location)}
      />
      <button className="Reset-button" onClick={() => filterTalentPool(data)}>Reset</button>
      <ResultsDisplay data={talentPool}/>
    </div>
  );
};

export default Filter;


