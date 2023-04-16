import React from 'react';
import { CgClose } from 'react-icons/cg';
import MenuButton from "./MenuButton";
import MenuButtonMobile from "./MenuButtonMobile";

const MenuMobile = ({setIsOpen}) => {
    return (
        <div className="menu-mobile">
            <div className="menuContent-mobile">
                <CgClose onClick={() => setIsOpen(false)} className="close-button"/>
                <div className="menuButtons-mobile">
                    <MenuButtonMobile title="Home" icon={1}/>
                    <MenuButtonMobile title="Category" icon={3}/>
                    <MenuButtonMobile title="Language" icon={4}/>
                </div>
            </div>
        </div>
    );
};

export default MenuMobile;