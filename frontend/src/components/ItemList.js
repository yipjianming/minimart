import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import Item from './Item'
import axios from 'axios'

export default function ItemList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await axios(`${process.env.REACT_APP_API_URL}/admin/getall`);
            console.log(result)
            setData(result.data);
        }
        fetchData();
    }, []);
    return <>
        <NavigationBar />
        <Container style={{ maxWidth: '90%', backgroundColor: 'whitesmoke' }} >
            <Row>
                {data.map(item => {
                    return <Col xs={2} className="border p-1" style={{ height: '250px' }}>
                        <Item height={'100px'} itemImage={item.image} itemName={item.name} itemPrice={item.price} />
                    </Col>
                })}
            </Row>
        </Container>
    </>

};
