import React from 'react';
import '../styles/OptionsBar.scss'
import {useDispatch, useSelector} from "react-redux";
import {setCartElemQuantityDecrement} from "../../features/allCartItems";

const Option = ({name, setSeeModal, setSeeDeliveryForm}) => {
    const allItemsCart = useSelector((state) => state.allCartItems.allItemsCart)
    const dispatch = useDispatch();
    return (
        <div className="options">
            { name == "Pick-up from Mercabarna" ?
                    <div className="optionName1">{name}</div>
                :
                    <div className="optionName2">{name}</div>
            }
            { name == "Smart delivery" ?
                <div>
                    <div className="optionMiddleSmart">Products middle price {(allItemsCart.map(elem => elem.quantity * elem.middlePrice)).reduce((acc, num) => acc + num, 0) || 0}€</div>
                    <div className="optionHowItWork">How it work?</div>
                    <div className="optionMiddleChoose">choose delivery days and get better price</div>
                    <div className="optionGetAnswer">Get Answer</div>
                </div>
                :
                <div>
                    <div className="optionTotal">Total</div>
                    <div className="optionMiddle">Products middle price {(allItemsCart.map(elem => elem.quantity * elem.middlePrice)).reduce((acc, num) => acc + num, 0) || 0}€</div>
                    <div className="optionProfit" onClick={() => setSeeModal(true)}>See your profit</div>
                    {
                        name == "Pick-up from Mercabarna" ?
                            <div className="optionPayButtons">
                                <div className="optionPayNowButton" onClick={() => setSeeDeliveryForm(true)}>Pay Now <span>{(allItemsCart.map(elem => elem.quantity * elem.ourPrice)).reduce((acc, num) => acc + num, 0) || 0}€</span></div>
                                <div className="optionPayDeliveryButton" onClick={() => setSeeDeliveryForm(true)}>At delivery <span>{(allItemsCart.map(elem => elem.quantity * elem.ourPrice)).reduce((acc, num) => acc + num, 0) || 0}€</span></div>
                            </div>
                            :
                            <div className="optionPayButtons">
                                <div className="optionPayNowButton" onClick={() => setSeeDeliveryForm(true)}>Pay Now <span>{(allItemsCart.map(elem => elem.quantity * elem.ourPrice)).reduce((acc, num) => acc + num, 0) + 10|| 0}€</span></div>
                                <div className="optionPayDeliveryButton" onClick={() => setSeeDeliveryForm(true)}>At delivery <span>{(allItemsCart.map(elem => elem.quantity * elem.ourPrice)).reduce((acc, num) => acc + num, 0) + 20 || 0}€</span></div>
                            </div>
                    }
                </div>
            }

        </div>
    );
};

export default Option;