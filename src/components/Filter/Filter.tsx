import React, { useState } from 'react'
import SearchForm from '../SearchForm/SearchForm';
import ResultsDisplay from '../ResultsDisplay/ResultsDisplay';
import { TalentFilter, TalentFilterByLocation, Talent } from '../../utils/filter';
import data from '../../data/example.json';

const Filter = () => {

  const [talentPool, filterTalentPool] = useState<Talent[]>(data);

  const filter_data = async (talent_filter: typeof TalentFilter, arg2: string) => {
    const filter = new talent_filter();
    filterTalentPool(filter.find_talent(data, arg2));
  };

  return(
    <div>
      <SearchForm
      header='Enter a city and press Search to filter talent'
      placeholder='Enter a location' 
      onClickHandler={(location) => filter_data(TalentFilterByLocation, location)}
      />
      <button className="Reset-button" onClick={() => filterTalentPool(data)}>Reset</button>
      <ResultsDisplay data={talentPool}/>
    </div>
  );
};

export default Filter;


