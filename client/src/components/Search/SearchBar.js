import React from 'react';
import '../styles/SearchBar.scss'
import { Col, Row } from 'antd';
import Search from "./Search";
import {useSelector} from "react-redux";

const SearchBar = () => {
    const seeOptions = useSelector((state) => state.seeOptions.seeOptions)

    return (
        <div className='bodyBarSearch'>
            <div className="logo">
                <div className="logoText">Tu Producto Online</div>
            </div>
            <Search/>
        </div>
    );
};

export default SearchBar;