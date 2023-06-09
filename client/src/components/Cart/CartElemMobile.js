import React from 'react';
import '../styles/CardElem.scss'
import { IoIosClose } from 'react-icons/io';
import { FiPlus, FiMinus } from 'react-icons/fi';
import {useDispatch} from "react-redux";
import {setCartElemQuantityIncrement, setCartElemQuantityDecrement, deleteCartElem} from "../../features/allCartItems";

const CartElemMobile = ({elem}) => {
    const dispatch = useDispatch()
    return (
        <div className='cardElem'>
            <IoIosClose className='cardElemDeleteImg-mobile' onClick={() => dispatch(deleteCartElem(elem))}/>
            <div><img className='imgCardElem-mobile' src={elem.img} alt="tomato"/></div>
            <div className="cardElemName">{elem.name}</div>
            <div className="cardElemMiddlePrice">middle price</div>
            <div className="cardElemPrice">{elem.middlePrice * elem.quantity}€</div>
            <div className='cardElemChange'><FiMinus onClick={() => dispatch(setCartElemQuantityDecrement(elem))}/><div>{elem.quantity}</div><FiPlus onClick={() => dispatch(setCartElemQuantityIncrement(elem))}/></div>
            <div className='cardElemBottomSpace'></div>
        </div>
    );
};

export default CartElemMobile;