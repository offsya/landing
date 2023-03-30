import React from 'react';
import './styles/SearchBar.css'

const Search = () => {
    return (
        <div className='search'>
            <input type="text" className='searchInput'/>
            <div className='searchIcon'></div>
        </div>
    );
};

export default Search;