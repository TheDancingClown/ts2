import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchForm from './SearchForm';

it('renders the search field', () => {
  render(<SearchForm placeholder='Enter a location to search'/>);
  const searchField = screen.getByPlaceholderText('Enter a location to search');
  expect(searchField).toBeInTheDocument();
  const searchButton = screen.getByText('Search');
  expect(searchButton).toBeInTheDocument();
});
