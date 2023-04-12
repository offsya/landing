import React from 'react';
import './styles/CardElem.scss'
import { IoIosClose } from 'react-icons/io';
import { FiPlus, FiMinus } from 'react-icons/fi';
import {useDispatch} from "react-redux";
import {setCartElemQuantityIncrement, setCartElemQuantityDecrement, deleteCartElem} from "../features/allCartItems";

const CardElem = ({elem}) => {
    const dispatch = useDispatch()
    return (
        <div className='cardElem'>
            <IoIosClose className='cardElemDeleteImg' onClick={() => dispatch(deleteCartElem(elem))}/>
            <div><img className='imgCardElem' src={elem.img} alt="tomato"/></div>
            <div className="cardElemName">{elem.name}</div>
            <div className="cardElemMiddlePrice">middle price</div>
            <div className="cardElemPrice">150€</div>
            <div className='cardElemChange'><FiMinus onClick={() => dispatch(setCartElemQuantityDecrement(elem))}/><div>{elem.quantity}</div><FiPlus onClick={() => dispatch(setCartElemQuantityIncrement(elem))}/></div>
            <div className='cardElemBottomSpace'></div>
        </div>
    );
};

export default CardElem;