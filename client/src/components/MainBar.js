import React from 'react';
import './styles/MainBar.scss'
import ItemsCard from "./Items/ItemsCard";
import tomato from './images/tomato.svg'
import corn from './images/corn.svg'
import chili from './images/chili.svg'
import avocado from './images/avocado.svg'
import Cart from "./Cart/Cart";

const MainBar = () => {
    return (
        <div className='mainBar'>
            <div className='infoLine'>
                Catalog
            </div>
            <div className='itemCardBar'>
                <ItemsCard/>
                <div className='itemsCart'>
                    <Cart/>
                </div>
         </div>
        </div>
    );
};

export default MainBar;