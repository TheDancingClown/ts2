import React from 'react';
import { isPropertySignature } from 'typescript';

const SearchForm = (props: { placeholder: string | undefined; }) => {
  return (
    <div>
      <input className='SearchInput' type='text' placeholder={props.placeholder}/>
      <button className='SearchButton'>Search</button>
    </div>
  )
}

export default SearchForm