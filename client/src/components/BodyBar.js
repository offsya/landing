import React from 'react';
import './styles/BodyBar.css'
import {Col, Row} from "antd";
import MenuBar from "./MenuBar";
import MainBar from "./MainBar";

const BodyBar = () => {
    return (
        <div className='bodyBar'>
            <div flex={1}>
                <MenuBar/>
            </div>
            <div flex={1}>
                <MainBar/>
            </div>
        </div>
    );
};

export default BodyBar;