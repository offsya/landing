import React from 'react';
import './styles/SearchBar.scss'
import {useDispatch} from "react-redux";
import {setSearch} from "../features/searchItems";

const Search = () => {
    const dispatch = useDispatch()
    return (
        <div className='search'>
            <input type="text" onChange={(e) => dispatch(setSearch(e.target.value))} placeholder="Search" className='searchInput'/>
            <div className='searchIcon'></div>
        </div>
    );
};

export default Search;