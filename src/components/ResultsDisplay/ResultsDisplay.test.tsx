import React from 'react';
import { render, screen } from '@testing-library/react';
import ResultsDisplay from './ResultsDisplay';

it('renders the names in the data', () => {
  render(<ResultsDisplay 
    data={[{
      "name": "Randall Flagg", 
      "location": "Las Vegas", 
      "date_of_birth": "1944-11-17"
    },
    {
      "name": "Mother Abigail", 
      "location": "Nebraska", 
      "date_of_birth": "1913-07-19"
    }]}
    />);
    
  const randall = screen.getByText('Randall Flagg');
  const abigail = screen.getByText('Mother Abigail');

  expect(randall).toBeInTheDocument();
  expect(abigail).toBeInTheDocument();
});

it('renders a message for no matches', () => {
  render(<ResultsDisplay data={[]}/>);

  const message = screen.getByText('No matches found');

  expect(message).toBeInTheDocument();
});