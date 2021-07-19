import { Container, Row, Col, Spinner, Card } from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

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

export default function ItemList(props) {
    const classes = useStyles();    

    // Elements
    return <Container style={{ maxWidth: '95%', height: '100%', overflowY: 'auto' }} >
        {props.loaded ?
            /*Page Loaded*/
            <Row>
                {/* Filter first by the selected category */}
                {props.data.filter(function (item) { return (item.category === props.category || 'All' === props.category) })
                    .filter(function (item) { return (item.name.toLowerCase().includes(props.search.toLowerCase())) })
                    .map(item => {
                        return <Col xs={6} md={4} lg={2} className="border p-1" style={{ height: '260px' }}>
                            <Card className='w-100 h-100'>
                                {/* Image for each item */}
                                <Card.Img style={{ height: '100px', width: 'auto' }} className='mx-auto mt-2' variant="top" src={item.image} />
                                {/* Name and Price of each item */}
                                <Card.Body className="d-flex align-items-start flex-column pb-1">
                                    <h6 className="mb-auto text-limit-2">{item.name}</h6>
                                    <div>S${item.price.toFixed(2)}</div>
                                </Card.Body>
                                {/* Buttons for Quantity Management*/}
                                <div className='mx-auto mb-2 d-flex justify-content-between' style={{ width: '70%' }}>
                                    {props.cart.hasOwnProperty(item._id) ?
                                        <>
                                            <IconButton className={classes.customHoverFocus}
                                                onClick={() => props.removeFromCart(item._id)} >
                                                <RemoveIcon style={{fontSize:'10px'}} />
                                            </IconButton>
                                            <span className='my-auto' style={{ textAlign: 'center', width: '100%' }}>
                                                <strong>{props.cart[item._id]}</strong></span>
                                            <IconButton className={classes.customHoverFocus}
                                                onClick={() => props.addToCart(item._id)} >
                                                <AddIcon style={{fontSize:'10px'}} />
                                            </IconButton>
                                        </>
                                        : <Button style={{ width: '100%', textTransform: 'none' }}
                                            className={`button-responsive ${classes.customHoverFocus}`}
                                            endIcon={<AddShoppingCartIcon />}
                                            onClick={() => props.addToCart(item._id)}>
                                                {/* Hide words for smaller screens */}
                                            <span className='d-none d-xl-block'>Add To Cart</span></Button>
                                    }
                                </div>
                            </Card>
                        </Col>
                    })}
            </Row>
            /*Show Page Loading*/
            : <div className='h-100 w-100 d-flex'>
                <Spinner className='mx-auto my-auto' animation='border' variant='success' />
            </div>
        }

    </Container >

};
