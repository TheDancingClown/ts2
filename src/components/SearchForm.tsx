import React, { useState } from 'react';

const SearchForm = (props: { placeholder: string; onClickHandler: (arg0: string) => void}) => {

  const [textEntered, setTextEntered] = useState('')

  return (
    <div>
      <input 
      className='SearchInput' 
      type='text' 
      placeholder={props.placeholder}
      onChange={event => setTextEntered(event.target.value)}
      />
      <button 
      className='SearchButton' 
      onClick={() => props.onClickHandler(textEntered)}>Search</button>
    </div>
  )
}

export default SearchForm