import React from 'react';
import { Talent } from '../../utils/filter';

const ResultsDisplay = (props: { data: Talent[] }) => {
  return(
    <div>
    {props.data.map((item, index) => (
      <p key={index} >{item.name}</p>))}
    {props.data.length < 1 && 
    <p>No matches found</p>}
    </div>
  );
};

export default ResultsDisplay;