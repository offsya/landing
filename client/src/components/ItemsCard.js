import React from 'react';
import './styles/ItemsCard.css'
import tomato from './images/tomato.svg'

const ItemsCard = () => {
    return (
        <div className="itemCard">
            <div><img className='imgCard' src={tomato} alt="tomato"/></div>
            <div>
                <div className='nameCard'>Tomato</div>
                <div className='priceCard'>
                    <div>
                        <div className='middlePrice'>middle price</div>
                        <div className='middlePriceCurrent'>3.65<span className='middlePriceCurrentKg'>€/kg</span></div>
                    </div>
                <div className='buttonMore'>more...</div></div>
            </div>
        </div>
    );
};

export default ItemsCard;