import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchForm from './SearchForm';

it('renders the search field and text', () => {
  render(<SearchForm 
    placeholder='Enter a location' 
    onClickHandler={() => {}}
    header='Location'/>);
    
  const header = screen.getByText('Location');
  const searchField = screen.getByPlaceholderText('Enter a location');
  const searchButton = screen.getByText('Search');

  expect(header).toBeInTheDocument();
  expect(searchField).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
});
