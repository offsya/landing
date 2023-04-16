import React from 'react';
import '../styles/SearchBar.scss'
import { Col, Row } from 'antd';
import Search from "./Search";
import {useDispatch, useSelector} from "react-redux";
import SearchMobile from "./SearchMobile";
import {BsArrowLeft, BsFillHandbagFill} from 'react-icons/bs';
import { HiMenu } from 'react-icons/hi';
import MenuMobile from "../Menu/MenuMobile";
import CartMobile from "../Cart/CartMobile";
import {setSeeOptions} from "../../features/seeOptions";



const SearchBarMobile = ({setIsOpenCart, isOpenCart, setIsMobile}) => {
    const dispatch = useDispatch();
    const seeOptions = useSelector((state) => state.seeOptions.seeOptions);
    const [isOpen, setIsOpen] = React.useState(false);

    console.log(isOpen)

    return (
        <div className='bodyBarSearch-mobile'>
            {
                isOpenCart ?
                    <div>
                        <div className="iconsAndSearch-mobile">
                            <div className="optionsBack-mobile" onClick={() => {setIsMobile(true); setIsOpenCart(false); dispatch(setSeeOptions(false))}}><BsArrowLeft className="optionsBackArrow-mobile"/>Back</div>
                            <div className="logoAndText-mobile logoAndTextCartIsOpen-mobile">
                                <div className="logo-mobile"></div>
                                <div className="logoText-mobile">Tu Producto Online</div>
                            </div>
                            <div className="iconCartBackground-mobile">
                                <BsFillHandbagFill className="iconCart-mobile iconCartIsOpen-mobile" onClick={() => {dispatch(setSeeOptions(false)); setIsOpenCart(true)}}/>
                            </div>
                        </div>
                        {
                            isOpen && <MenuMobile setIsOpen={setIsOpen}/>
                        }
                    </div>
                    :
                    <div>
                        <div className="logoAndText-mobile">
                            <div className="logo-mobile">
                            </div>
                            <div className="logoText-mobile">Tu Producto Online</div>
                        </div>
                        <div className="iconsAndSearch-mobile">
                            <HiMenu href="#" className="menu-btn" onClick={() => setIsOpen((prev) => !prev)} className='iconMenu-mobile'/>
                            <SearchMobile/>
                            <BsFillHandbagFill className="iconCart-mobile" onClick={() => setIsOpenCart((prev) => !prev)}/>
                        </div>
                        {
                            isOpen && <MenuMobile setIsOpen={setIsOpen}/>
                        }
                    </div>
            }

        </div>
    );
};

export default SearchBarMobile;