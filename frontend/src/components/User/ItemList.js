import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import Item from './Item'
import axios from 'axios'

export default function ItemList(props) {
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const result = await axios(`${process.env.REACT_APP_API_URL}/admin/getall`);
            setData(result.data);
            setLoaded(true)
        }
        fetchData();
    }, []);
    return <Container style={{ maxWidth: '95%', height: '100%', overflowY: 'auto' }} >
        {loaded ?
            /*Page Loaded*/
            <Row>
                {/* Filter first by the selected category */}
                {data.filter(function (item) { return (item.category === props.category || 'All' === props.category) })
                    .filter(function (item) { return (item.name.toLowerCase().includes(props.search.toLowerCase())) })
                    .map(item => {
                        return <Col xs={2} className="border p-1" style={{ height: '245px' }}>
                            <Item itemImage={item.image} itemName={item.name} itemPrice={item.price} />
                        </Col>
                    })}
            </Row>
            /*Show Page Loading*/
            : <div className='h-100 w-100 d-flex'>
                <Spinner className='mx-auto my-auto' animation='border' variant='dark' />
            </div>}

    </Container>

};
