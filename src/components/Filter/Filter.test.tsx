import React from 'react';
import { render, screen } from '@testing-library/react';
import Filter from './Filter';

test('renders', () => {
  render(<Filter />);
  const resetButton = screen.getByText('Reset');
  expect(resetButton).toBeInTheDocument();
});