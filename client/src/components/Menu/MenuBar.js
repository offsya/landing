import React, {useState} from 'react';
import '../styles/BodyBar.scss'
import MenuButton from "./MenuButton";

const MenuBar = () => {
    return (
        <div className='menuBar'>
            <MenuButton title="Home" icon={1}/>
            <MenuButton title="Category" icon={3}/>
            <MenuButton title="Language" icon={4}/>
            <div className='calend'></div>
        </div>
    );
};

export default MenuBar;