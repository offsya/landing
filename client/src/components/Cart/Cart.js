import React from 'react';
import '../styles/Card.scss'
import CartElem from "./CartElem";
import { BsFillHandbagFill } from 'react-icons/bs';
import { MdExpandMore } from 'react-icons/md';
import {useSelector, useDispatch} from "react-redux";
import {setSeeOptions} from "../../features/seeOptions";


const Cart = () => {
    const dispatch = useDispatch()
    const allItemsCart = useSelector((state) => state.allCartItems.allItemsCart)
    console.log(allItemsCart)
    return (
        <div>
            <div>
                <div className="card">
                    Cart
                    <MdExpandMore className='openCardImg' style={{opacity: '0'}}/>
                    <div className="cardImgBackground"><BsFillHandbagFill className="cardImg"/></div>
                </div>
            </div>
            <div>
                <div className='openCard'>
                    {
                        allItemsCart.map((elem) => {
                            return <CartElem elem={elem}/>
                        })
                    }
                </div>
                <div className="seeOptionsCardBackground" onClick={() => dispatch(setSeeOptions(true))}>
                    <div className="seeOptionsCard">See Options</div>
                </div>
            </div>
        </div>
    );
};

export default Cart;