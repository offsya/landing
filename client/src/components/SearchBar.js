import React from 'react';
import './styles/SearchBar.css'
import { Col, Row } from 'antd';
import Search from "./Search";

const SearchBar = () => {
    return (
        <Row>
            <Col flex={1}>
                <div className="logo">
                </div>
            </Col>
            <Col flex={20}>
                <Search/>
            </Col>
        </Row>
    );
};

export default SearchBar;