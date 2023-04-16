import React from 'react';
import '../styles/Card.scss'
import CartElem from "./CartElem";
import { BsFillHandbagFill } from 'react-icons/bs';
import { MdExpandMore } from 'react-icons/md';
import {useSelector, useDispatch} from "react-redux";
import {setSeeOptions} from "../../features/seeOptions";


const CartOptions = () => {
    const dispatch = useDispatch()
    const allItemsCart = useSelector((state) => state.allCartItems.allItemsCart)

    return (
        <div>
            <div>
                <div className="cardOptions">
                    Cart
                    <MdExpandMore className='openCardImg'/>
                    <div className="cardImgBackground"><BsFillHandbagFill className="cardImg"/></div>
                </div>
            </div>
            {/*<div>*/}
            {/*    <div className='openCard'>*/}
            {/*        {*/}
            {/*            allItemsCart.map((elem) => {*/}
            {/*                return <CartElem elem={elem}/>*/}
            {/*            })*/}
            {/*        }*/}
            {/*    </div>*/}
            {/*    <div className="seeOptionsCardBackground" onClick={() => dispatch(setSeeOptions(true))}>*/}
            {/*        <div className="seeOptionsCard">See Options</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default CartOptions;