import React from 'react';
import {FiMinus, FiPlus} from "react-icons/fi";
import {setCartElemQuantityDecrement, setCartElemQuantityIncrement} from "../../features/allCartItems";
import {useDispatch, useSelector} from "react-redux";

const ProfitElem = ({elem}) => {
    const dispatch = useDispatch();
    return (
        <div className='profitTableElem profitTableElemBorder'>
            <span className="profitProductName profitSize"><img className='imgCardElemProfit' src={elem.img} alt="tomato"/>{elem.name}</span>
            <span className="profitProductMiddle profitSize">{elem.middlePrice}</span>
            <span className='profitOurPrice profitSize'>{elem.ourPrice}</span>
            <div className='cardElemChangeProfit'><FiMinus onClick={() => dispatch(setCartElemQuantityDecrement(elem))}/><div>{elem.quantity}</div><FiPlus onClick={() => dispatch(setCartElemQuantityIncrement(elem))}/></div>
            <span className='profitProfit profitSize'>{(elem.middlePrice - elem.ourPrice) * elem.quantity}</span>
        </div>
    );
};

export default ProfitElem;