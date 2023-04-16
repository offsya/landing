import React from 'react';
import '../styles/SearchBar.scss'
import { Col, Row } from 'antd';
import Search from "./Search";
import {useSelector, useDispatch} from "react-redux";
import { BsArrowLeft } from 'react-icons/bs';
import {setSeeOptions} from "../../features/seeOptions";
import Cart from "../Cart/Cart";
import CartOptions from "../Cart/CartOptions";


const OptionsSearchBar = () => {
    const dispatch = useDispatch();
    const seeOptions = useSelector((state) => state.seeOptions.seeOptions)

    return (
        <div className='bodyBarSearchOptions'>
            <div className="optionsBack" onClick={() => dispatch(setSeeOptions(false))}><BsArrowLeft className="optionsBackArrow"/>Back</div>
            <div className="logoOptions">
                <div className="logoText">Tu Producto Online</div>
            </div>
            <div className="cartOptions">
                <CartOptions/>
            </div>
        </div>
    );
};

export default OptionsSearchBar;