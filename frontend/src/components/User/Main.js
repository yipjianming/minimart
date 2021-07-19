import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import ItemList from './ItemList';
import { Link } from "react-router-dom";
import axios from 'axios'

export default function Main() {

    const [category, setCategory] = useState('All');
    const [search, setSearch] = useState('');
    const [cart, setCart] = useState({});
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);

    // Fetch API on component mount to display to the user
    useEffect(() => {
        async function fetchData() {
            const result = await axios(`/api/getall`);
            setData(result.data);
            setLoaded(true)
        }
        fetchData();
    }, []);

    // Data Management for Cart
    // Add a new item to cart
    function addToCart(itemId) {
        let newCart = JSON.parse(JSON.stringify(cart))
        if (newCart[itemId] === undefined) {
            newCart[itemId] = 1
        } else {
            newCart[itemId] += 1
        }
        setCart(newCart)
    }
    // Remove an item from cart
    function removeFromCart(itemId) {
        let newCart = JSON.parse(JSON.stringify(cart))
        if (newCart.hasOwnProperty(itemId)) {
            newCart[itemId] -= 1
            if (newCart[itemId] <= 0) {
                delete newCart[itemId];
            }
        }
        setCart(newCart)
    }


    // Elements
    return <div style={{ height: '100vh', width: '100vw' }} className="d-flex align-items-start flex-column" >

        <NavigationBar setCategory={setCategory} category={category} setSearch={setSearch} search={search} data={data} cart={cart}
            addToCart={addToCart} removeFromCart={removeFromCart} />
        <ItemList loaded={loaded} data={data} category={category} search={search} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
        <Link to="/admin">
            <Button style={{ position: 'absolute', top: '10px', right: '10px' }}
                variant='outline-success'> Go To Admin View</Button>
        </Link>
    </div>

};
