import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchForm from './SearchForm';

it('renders the search field and text', () => {
  render(<SearchForm 
    placeholder='Enter a location to search' 
    onClickHandler={() => {}}
    header='Location'/>);
  const header = screen.getByText('Location');
  expect(header).toBeInTheDocument();
  const searchField = screen.getByPlaceholderText('Enter a location to search');
  expect(searchField).toBeInTheDocument();
  const searchButton = screen.getByText('Search');
  expect(searchButton).toBeInTheDocument();
});
