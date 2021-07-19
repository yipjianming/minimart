
import { OverlayTrigger, Popover, Button, Container, Row, Col } from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

// Item Quantity Button Styles
const useStyles = makeStyles(theme => ({
    customHoverFocus: {
        "&:hover, &.Mui-focusVisible": {
            backgroundColor: '#65b32E',
            color: 'white'
        },
        backgroundColor: 'whitesmoke',
        borderColor: '#89B765',
        border: '1px solid',
        color: 'black'
    }
}));


export default function Cart(props) {
    const classes = useStyles();

    /* POPUP SHOPPING CART */
    let numItems = Object.values(props.cart).reduce(function (acc, val) { return acc + val; }, 0)
    let total = 0
    return <OverlayTrigger
        trigger="click"
        placement='bottom'
        rootClose={true}
        overlay={
            <Popover style={{ maxWidth: '100%', width: '400px', height: '70vh' }} className='d-flex align-items-start flex-column'>
                <Popover.Title as="h3">{numItems} ITEMS IN CART</Popover.Title>
                <Popover.Content style={{ height: '90%', width: '100%', overflowY: 'auto' }}>
                    <Container style={{ width: '95%' }}>
                        {Object.entries(props.cart).map(([itemId, quantity]) => {
                            let item = props.data.find(obj => {
                                return obj._id === itemId
                            })
                            total += (item.price * quantity)
                            return <Row className='py-2 border'>
                                <Col xs={2}><img alt='item' style={{ maxHeight: '40px', maxWidth:'40px' }} src={item.image}
                                    className="mx-auto" /></Col>
                                <Col>{item.name}</Col>
                                <Col>
                                    {/* Buttons for Quantity Management*/}
                                    <div className='mx-auto mb-2 d-flex justify-content-between' style={{ width: '70%' }}>
                                        <IconButton className={classes.customHoverFocus}
                                            onClick={() => props.removeFromCart(item._id)} >
                                            <RemoveIcon style={{ fontSize: '9px' }} />
                                        </IconButton>
                                        <span className='my-auto' style={{ textAlign: 'center', width: '100%' }}>
                                            <strong className='px-1'>{props.cart[item._id]}</strong></span>
                                        <IconButton className={classes.customHoverFocus}
                                            onClick={() => props.addToCart(item._id)} >
                                            <AddIcon style={{ fontSize: '9px' }} />
                                        </IconButton>

                                    </div>
                                </Col>
                                <Col>S${(quantity * item.price).toFixed(2)}</Col>
                            </Row>
                        })}
                        <span style={{ float: 'right' }}>Total:{total.toFixed(2)}</span>
                    </Container>
                </Popover.Content>

                <Button className='mt-auto ml-auto m-2' variant='success' disabled>Checkout</Button>
            </Popover>
        }
    >
        {/* Cart button */}
        <IconButton style={{ color: '#285E37' }}>
            <ShoppingCartOutlinedIcon fontSize="large" />
            <span style={{ position: "absolute", right: 3, top: 3, color: '#C70039', fontSize: '1.2rem' }}>
                {Object.keys(props.cart).length > 0 ?
                    // get sum of all item quantity in cart event if they are different item types
                    numItems
                    : ''}
            </span>
        </IconButton>
    </OverlayTrigger>





};
