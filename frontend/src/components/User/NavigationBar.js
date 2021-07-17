
import { Navbar } from 'react-bootstrap';
import { Form, FormControl, Button, Col } from 'react-bootstrap';
import customLogo from '../../customLogo.png'
import { FaShoppingBasket } from 'react-icons/fa';

export default function NavigationBar(props) {
    return <Navbar className='mx-auto' style={{ width: '95%' }} >
        {/* DROPDOWN AND SEARCH BAR */}
        <Col xs={4} className='mt-auto'><Form className="d-flex">
            <select style={{ marginRight: '10px' }} 
            value={props.category}
            onChange={(e) => props.setCategory(e.target.value)}>
                <option value='All' >All Items</option>
                <option value='Drinks'>Drinks</option>
                <option value='Food'>Food</option>
                <option value='Fruits'>Fruits</option>
                <option value='Snacks'>Snacks</option>
                <option value='Others'>Others</option>
            </select>
            <FormControl
                type="search"
                placeholder="Search"
                className="w-50"
                aria-label="Search"
                value={props.search}
                onChange={(e) => props.setSearch(e.target.value)}
            />
        </Form></Col>
        {/* LOGO */}
        <Col xs={4} align="center" ><Navbar.Brand>
            <img
                alt=""
                src={customLogo}
                width="200"
                height="100"
            />{' '}
        </Navbar.Brand></Col>
        {/* CART*/}
        <Col xs={4} className='mt-auto' align='right' style={{ paddingRight: '20px' }}>
            <Button style={{ fontSize: '40px', color: 'white' }} className='pt-0 m-0' variant='Light'><FaShoppingBasket
                style={{ stroke: "black", strokeWidth: "30" }} /></Button>
        </Col>
    </Navbar >
};
