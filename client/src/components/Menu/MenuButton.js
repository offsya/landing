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
        if(icon == 1) return <TbHome className="currentMenuIcon"/>
        if(icon == 2) return <BiCategoryAlt className="currentMenuIcon"/>
        if(icon == 3) return <TbFilters className="currentMenuIcon"/>
        if(icon == 4) return <MdLanguage className="currentMenuIcon"/>
    }
    return (
        <div>
            <button onClick={() => dispatch(setCurrentMenuButton(icon))} className="menuButton" style={{background: current == icon ? '#FFFFFF' : '#FFFFFF', color: current == icon ? '#5FC56E' : '#4C4C4C'}}>
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