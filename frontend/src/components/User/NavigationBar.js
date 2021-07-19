
import { Navbar } from 'react-bootstrap';
import { Form, FormControl, InputGroup, Col } from 'react-bootstrap';

import customLogo from '../../customLogo.png'
import Cart from './Cart';
export default function NavigationBar(props) {
    return <Navbar className='mx-auto p-0 pb-1' style={{ width: '95%' }} >
        {/* DROPDOWN AND SEARCH BAR */}
        <Col xs={4} className='mt-auto p-0'><Form className="d-flex">
            <InputGroup className="mb-1">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Category</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as='select' style={{ width: '100px' }} className='form-select' value={props.category}
                    onChange={(e) => props.setCategory(e.target.value)}>
                    <option value='All' >All Items</option>
                    <option value='Drinks'>Drinks</option>
                    <option value='Food'>Food</option>
                    <option value='Fruits'>Fruits</option>
                    <option value='Snacks'>Snacks</option>
                    <option value='Others'>Others</option>
                </FormControl>
                <FormControl
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    style={{ width: '100px' }}
                    value={props.search}
                    onChange={(e) => props.setSearch(e.target.value)} />
            </InputGroup>
        </Form></Col>
        {/* LOGO */}
        <Col xs={4} align="center" ><Navbar.Brand>
            {/* Hidden on smaller device */}
            <img className='d-none d-lg-block'
                alt=""
                src={customLogo}
                width="200"
                height="100"
            />{' '}
        </Navbar.Brand></Col>
        {/* CART*/}
        <Col xs={4} className='mt-auto' align='right' style={{ paddingRight: '20px' }}>
            <Cart data={props.data} cart={props.cart} addToCart={props.addToCart} removeFromCart={props.removeFromCart} />
        </Col>
    </Navbar >
};
