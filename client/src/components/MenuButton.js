import React, {useState} from 'react';
import './styles/BodyBar.css'

const MenuButton = ({title}) => {
    const [check, setCheck] = useState('');
    return (
        <div>
            <button className="menuButton" style={{background: 'linear-gradient(274.75deg, #F7F7F7 -8.28%, #B2C15C 37.88%)'}}>{title}</button>
        </div>
    );
};

export default MenuButton;