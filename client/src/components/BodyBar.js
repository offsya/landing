import React from 'react';
import './styles/BodyBar.scss'
import {Col, Row} from "antd";
import MenuBar from "./MenuBar";
import MainBar from "./MainBar";

const BodyBar = () => {
    return (
        <div className='bodyBar'>
            <div>
                <MenuBar/>
            </div>
            <div>
                <MainBar/>
            </div>
        </div>
    );
};

export default BodyBar;