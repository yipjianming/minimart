
import { Navbar } from 'react-bootstrap';
import { Form, FormControl, InputGroup, Button, Col } from 'react-bootstrap';

import customLogo from '../../customLogo.png'
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
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
            <img
                alt=""
                src={customLogo}
                width="200"
                height="100"
            />{' '}
        </Navbar.Brand></Col>
        {/* CART*/}
        <Col xs={4} className='mt-auto' align='right' style={{ paddingRight: '20px' }}>
            <IconButton style={{ color: '#285E37' }}>
                <ShoppingCartOutlinedIcon fontSize="large" />
                <span style={{ position: "absolute", right: 3, top: 3, color: '#C70039', fontSize: '1.2rem' }}>
                    {Object.keys(props.cart).length > 0 ?
                        // get sum of all item quantity in cart event if they are different item types
                        Object.values(props.cart).reduce(function (acc, val) { return acc + val; }, 0)
                        : ''}
                </span>
            </IconButton>
        </Col>
    </Navbar >
};
