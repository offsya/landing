import React from 'react';
import tomato from "./images/tomato.svg";
import './styles/CardElem.css'

const CardElem = () => {
    return (
        <div className='cardElem'>
            <div className='cardElemDeleteImg'></div>
            <div><img className='imgCardElem' src={tomato} alt="tomato"/></div>
            <div className="cardElemName">Tomato</div>
            <div className="cardElemMiddlePrice">middle price</div>
            <div className="cardElemPrice">150€</div>
            <div className='cardElemChange'><div>-</div><div>25</div><div>+</div></div>
        </div>
    );
};

export default CardElem;