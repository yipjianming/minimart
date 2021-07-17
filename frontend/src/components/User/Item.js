import { Card, Button } from 'react-bootstrap';

export default function Item(props) {
    return <Card className='w-100 h-100'>
        <Card.Img style={{ height: '100px', width: 'auto' }} className='mx-auto' variant="top" src={props.itemImage} />
       
        <Card.Body className="d-flex align-items-start flex-column">
            <h6 className="mb-auto">{props.itemName}</h6>
            <div>S${props.itemPrice}</div>
        </Card.Body>
        <Button className='w-100 mt-auto' style={{ bottom: '0px' }} variant='success' disabled>Add To Cart</Button>
    </Card>

};
