import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import Item from './Item'
import axios from 'axios'
import ItemList from './ItemList';
import customLogo from '../../customLogo.png'
export default function Main() {
    const [category, setCategory] = useState('All');
    const [search, setSearch] = useState('');

    return <div style={{ height: '100vh', width: '100vw' }} className="d-flex align-items-start flex-column" >

        <NavigationBar setCategory={setCategory} category={category} setSearch={setSearch} search={search} />
        <ItemList category={category} search={search} />
    </div>

};
