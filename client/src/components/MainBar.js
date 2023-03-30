import React from 'react';
import './styles/MainBar.css'
import {Col, Row} from "antd";
import ItemsCard from "./ItemsCard";
import Card from "./Card";

const MainBar = () => {
    return (
        <div className='mainBar'>
            <div className='infoLine'>
                All Items
            </div>
            <div className='itemCardBar'>
                <div className='itemsCard'>
                    <ItemsCard/>
                    <ItemsCard/>
                    <ItemsCard/>
                    <ItemsCard/>
                    <ItemsCard/>
                    <ItemsCard/>
                    <ItemsCard/>
                </div>
                <div>
                    <Card/>
                </div>
         </div>
        </div>
    );
};

export default MainBar;