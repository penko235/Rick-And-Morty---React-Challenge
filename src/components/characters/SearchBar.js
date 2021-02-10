import React from 'react';

const input = {
  width: '22%',
  display: 'flex',
  margin: '0 auto',
  padding: '5px 5px',
  boxSizing: 'border-box',
  border: '2px solid #ccc',
  borderRadius: '4px',
  fontSize: '16px',
  backgroundColor: '#fff',
  backgroundPosition: '10px 10px', 
  backgroundRepeat: 'no-repeat',

};

const SearchBar = (props) => {
  return (
    <input  style={input} placeholder='Search your favourite characters' value={props.searchInput} onChange={props.search} />
  );
};

export default SearchBar;
