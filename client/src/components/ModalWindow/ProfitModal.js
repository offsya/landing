import React from 'react';
import '../styles/ModalWindow.scss'
import { CgClose } from 'react-icons/cg';
import {useDispatch, useSelector} from "react-redux";
import CartElem from "../Cart/CartElem";
import ProfitElem from "./ProfitElem";

const ProfitModal = ({setSeeModal}) => {
    const allItemsCart = useSelector((state) => state.allCartItems.allItemsCart)
    return (
        <div className='modal' onClick={() => setSeeModal(false)}>
            <div className='profitModal' onClick={(e) => e.stopPropagation()}>
                <div className='seeProfitText'>See your profit <CgClose className="closeButton" onClick={() => setSeeModal(false)}/></div>
                <div className='profitTableElem'>
                    <span className='profitProductName'>Product name</span>
                    <span className='profitProductMiddle'>middle price</span>
                    <span className='profitOurPrice'>our price</span>
                    <span className='profitQuantity'>quantity</span>
                    <span className='profitProfit'>profit</span>
                </div>
                <div className="profitTable">
                    {
                        allItemsCart.map((elem, index) => {
                            return <ProfitElem key={index} elem={elem}/>
                        })
                    }
                </div>
                <div className='totalProfit'><div className='totalProfitText'>Total profit</div><div className='totalProfitPrice'>{(allItemsCart.map(elem => (elem.middlePrice - elem.ourPrice) * elem.quantity)).reduce((acc, num) => acc + num, 0) || 0}€</div></div>

            </div>

        </div>
    );
};

export default ProfitModal;