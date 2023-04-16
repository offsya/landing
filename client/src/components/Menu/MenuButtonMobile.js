import React, {useState} from 'react';
import '../styles/BodyBar.scss'
import { BiCategoryAlt } from 'react-icons/bi';
import { TbFilters } from 'react-icons/tb';
import { TbHome } from 'react-icons/tb';
import { MdLanguage } from 'react-icons/md';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentMenuButton} from "../../features/menuSlice";

const MenuButton = ({title, icon}) => {
    const dispatch = useDispatch()
    const current = useSelector((state) => state.menu.currentMenuButton)
    const currentIcon = () => {
        if(icon == 1) return <TbHome className="currentMenuIcon-mobile"/>
        if(icon == 2) return <BiCategoryAlt className="currentMenuIcon-mobile"/>
        if(icon == 3) return <TbFilters className="currentMenuIcon-mobile"/>
        if(icon == 4) return <MdLanguage className="currentMenuIcon-mobile"/>
    }
    return (
        <div>
            <button onClick={() => dispatch(setCurrentMenuButton(icon))} className="menuButton-mobile">
                <div>
                    {
                        currentIcon()
                    }
                </div>
                {title}
            </button>
        </div>
    );
};

export default MenuButton;