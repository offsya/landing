import React from 'react';
import './styles/Card.css'
import CardElem from "./CardElem";


const Card = () => {
    return (
        <div>
            <div>
                <div className="card">
                    Cart
                    <div className='openCardImg'></div>
                </div>
                <div className="cardImgBackground"><div className='cardImg'></div></div>
            </div>
            <div>
                <div className='openCard'>
                    <CardElem/>
                    <CardElem/>
                    <CardElem/>

                </div>
            </div>
        </div>
    );
};

export default Card;