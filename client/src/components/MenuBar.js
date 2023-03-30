import React from 'react';
import './styles/BodyBar.css'
import MenuButton from "./MenuButton";

const MenuBar = () => {
    return (
        <div className='menuBar'>
            <MenuButton title="Home"/>
            <MenuButton title="Catalog"/>
            <MenuButton title="Category"/>
            <MenuButton title="Language"/>
        </div>
    );
};

export default MenuBar;