import React, { useState } from 'react';
import Item from '../Item'
import { Row, Col, Form, Button } from 'react-bootstrap';
import placeholderImage from '../../placeholder.jpg'
import AddItem from './AddItem';
import axios from 'axios'

export default function Dashboard() {
    const [itemImage, setItemImage] = useState(placeholderImage);
    const [itemName, setItemName] = useState('Item Name');
    const [itemPrice, setItemPrice] = useState('');
    const [itemCategory, setItemCategory] = useState('Others');

    function handleSubmit(e) {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/admin/insert`, {
            name: itemName,
            category:itemCategory,
            image: itemImage,
            price: parseFloat(itemPrice).toFixed(2)
        })
            .then(res => console.log(res))
            .catch(error => {
                console.log(error)
            })

    }

    return <Form onSubmit={(e) => handleSubmit(e)}>
        <Row style={{ height: '100vh', fontFamily: 'sans-serif', backgroundColor: '#F9F9F9' }} className='p-0 m-0' >
            <Col xs={3} style={{ height: '100%', overflowY: 'auto' }} >
                <Row className='mx-auto' style={{ width: '95%', height: '55%' }}>
                    {/* ITEM PREVIEW */}
                    <div className='text-center text-white bg-dark'>Item Preview</div>
                    <div className="border m-1" style={{ height: '370px' }}>
                        <Item height={'200px'} itemImage={itemImage} itemName={itemName} itemPrice={itemPrice} />
                    </div>
                    {/* ADD ITEM */}
                    <AddItem setItemImage={setItemImage} setItemCategory={setItemCategory}
                        setItemName={setItemName} setItemPrice={setItemPrice} itemPrice={itemPrice} itemCategory={itemCategory} />
                    <Button type="submit" className='mt-2'>Add Item</Button>
                </Row>
            </Col>
            <Col xs={9} style={{ backgroundColor: 'whitesmoke' }}></Col>
        </Row>
    </Form >

};
