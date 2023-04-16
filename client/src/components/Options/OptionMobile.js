import React from 'react';
import '../styles/OptionsBar.scss'
import {useDispatch, useSelector} from "react-redux";
import {setCartElemQuantityDecrement} from "../../features/allCartItems";

const Option = ({name, setSeeModal, setSeeDeliveryForm}) => {
    const dispatch = useDispatch();
    return (
        <div className="options-mobile">
            <div className="optionName1-mobile">{name}</div>
            { name == "Smart delivery" ?
                <div>
                    <div className="optionMiddleSmart-mobile">Products middle price 550€</div>
                    <div className="optionHowItWork-mobile">How it work?</div>
                    <div className="optionMiddleChoose-mobile">choose delivery days and get better price</div>
                    <div className="optionGetAnswer-mobile">Get Answer</div>
                </div>
                :
                <div>
                    <div className="optionTotal-mobile">Total</div>
                    <div className="optionMiddle-mobile">Products middle price 550€</div>
                    <div className="optionProfit-mobile" onClick={() => setSeeModal(true)}>See your profit</div>
                    <div className="optionPayButtons-mobile">
                        <div className="optionPayNowButton" onClick={() => setSeeDeliveryForm(true)}>Pay Now <span>345$</span></div>
                        <div className="optionPayDeliveryButton" onClick={() => setSeeDeliveryForm(true)}>At delivery <span>345$</span></div>
                    </div>
                </div>
            }

        </div>
    );
};

export default Option;