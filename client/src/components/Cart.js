import React from 'react';
import './styles/Card.scss'
import CardElem from "./CardElem";
import { BsFillHandbagFill } from 'react-icons/bs';
import { MdExpandMore } from 'react-icons/md';
import {useSelector} from "react-redux";


const Cart = () => {

    const allItemsCart = useSelector((state) => state.allCartItems.allItemsCart)

    return (
        <div>
            <div>
                <div className="card">
                    Cart
                    <MdExpandMore className='openCardImg'/>
                    <div className="cardImgBackground"><BsFillHandbagFill className="cardImg"/></div>
                </div>
            </div>
            <div>
                <div className='openCard'>
                    {
                        allItemsCart.map((elem) => {
                            return <CardElem elem={elem}/>
                        })
                    }
                </div>
                <div className="seeOptionsCardBackground">
                    <div className="seeOptionsCard">See Options</div>
                </div>
            </div>
        </div>
    );
};

export default Cart;