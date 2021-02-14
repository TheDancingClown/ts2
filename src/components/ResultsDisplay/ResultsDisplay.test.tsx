import React from 'react';
import { render, screen } from '@testing-library/react';
import ResultsDisplay from './ResultsDisplay';

it('renders the search field', () => {
  render(<ResultsDisplay 
    data={[{"name": "Randall Flagg", "location": "Las Vegas", "date_of_birth": "1944-11-17"}]}
    />);
  const name = screen.getByText('Randall Flagg')
  expect(name).toBeInTheDocument();
});