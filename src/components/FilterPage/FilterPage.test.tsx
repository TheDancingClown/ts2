import React from 'react';
import { render, screen } from '@testing-library/react';
import Filter from './FilterPage';

test('renders', () => {
  render(<Filter />);

  const resetButton = screen.getByText('Reset');
  
  expect(resetButton).toBeInTheDocument();
});