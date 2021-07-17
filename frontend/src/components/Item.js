import { Card,Button } from 'react-bootstrap';

export default function Item(props) {
    return <Card className='w-100 h-100'>
            <Card.Img style={{ height: props.height,width:'auto'}} className='mx-auto' variant="top" src={props.itemImage} />
        <Card.Body>
            <Card.Title>{props.itemName}</Card.Title>
            <Card.Text>S${props.itemPrice}</Card.Text>
            <Button className='w-100' variant='success' disabled>Add To Cart</Button>
        </Card.Body>
    </Card>

};
