import React from 'react';
import '../styles/ItemsCard.scss'
import {HiPlus} from 'react-icons/hi'
import {useDispatch} from "react-redux";
import {setAllItemsCart} from "../../features/allCartItems";

const Item = ({elem}) => {
    const dispatch = useDispatch()

    return (
        <div className="itemCard-mobile">
            <div className="imgCardBackground"><img className='imgCard' src={elem.img} alt="tomato"/></div>
            <div>
                <div className='nameCard'>{elem.name}</div>
                <div className='priceCard'>
                    <div>
                        <div className='middlePrice'>middle price</div>
                        <div className='middlePriceCurrent'>{elem.middlePrice}<span className='middlePriceCurrentKg'>€/{elem.unit}</span></div>
                    </div>
                    <div className='buttonMore' onClick={() => dispatch(setAllItemsCart({...elem, quantity: 1}))}><HiPlus className="buttonMoreIcon"/></div>
                </div>
            </div>
        </div>
    );
};

export default Item;