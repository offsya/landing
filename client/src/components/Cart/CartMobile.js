import React from 'react';
import '../styles/Card.scss'
import CartElem from "./CartElem";
import { BsFillHandbagFill } from 'react-icons/bs';
import { MdExpandMore } from 'react-icons/md';
import {useSelector, useDispatch} from "react-redux";
import {setSeeOptions} from "../../features/seeOptions";
import CartElemMobile from "./CartElemMobile";


const Cart = () => {
    const dispatch = useDispatch()
    const allItemsCart = useSelector((state) => state.allCartItems.allItemsCart)

    return (
        <div>
            <div>
                <div className='openCard-mobile'>
                    {
                        allItemsCart.map((elem) => {
                            return <CartElemMobile elem={elem}/>
                        })
                    }
                </div>
            </div>
            <div className="seeOptionsCardBackground-mobile" onClick={() => dispatch(setSeeOptions(true))}>
                <div>
                    <div className='seeOptionsCardTotalMoney-mobile'>{(allItemsCart.map(elem => elem.quantity * elem.middlePrice)).reduce((acc, num) => acc + num, 0) || 0}€</div>
                    <div className='seeOptionsCardTotalMoneyText-mobile'>Total market price</div>
                </div>
                <div className="seeOptionsCard-mobile">See Options</div>
            </div>
        </div>
    );
};

export default Cart;