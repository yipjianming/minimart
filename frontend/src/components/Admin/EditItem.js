import { Button, Modal, Form, Card, InputGroup, FormControl } from 'react-bootstrap';
import React, { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { FaEdit } from 'react-icons/fa';

export default function EditItem(props) {

    const [show, setShow] = useState(false);
    const [itemImage, setItemImage] = useState();
    const [itemName, setItemName] = useState();
    const [itemPrice, setItemPrice] = useState();
    const [itemCategory, setItemCategory] = useState();

    // Set Modal State to the last item clicked
    const handleShow = () => {
        setShow(true)
        setItemImage(props.data.image)
        setItemName(props.data.name)
        setItemPrice(props.data.price)
        setItemCategory(props.data.category)
    };

    const handleClose = () => {
        setShow(false)
    };

    // On submit
    function handleSubmit(e) {
        e.preventDefault();
        setShow(false)
        let newEntry = {
            _id: props.data._id,
            name: itemName,
            category: itemCategory,
            image: itemImage,
            price: parseFloat(itemPrice)
        }
        props.editData(newEntry)
    }

    // Elements
    return (
        <>
            <Button onClick={handleShow} className='px-1 pt-0 pb-1 mx-1' style={{ borderColor: 'grey' }} variant="outline-dark"><FaEdit /></Button>

            <Modal size="md"
                show={show} onHide={handleClose} animation={false}>
                <Form onSubmit={(e) => handleSubmit(e)}>

                    <Modal.Header>
                        <Modal.Title>Edit Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Image View */}
                        <Card.Img style={{ height: '100px', width: 'auto' }} className='mx-auto' variant="top" src={itemImage} />
                        {/* Image Upload */}
                        <Form.File className="mt-2" custom>
                            <Form.File.Input accept="image/*" onChange={(e) => {
                                const [file] = e.target.files;
                                if (file) {
                                    const reader = new FileReader();
                                    reader.onload = (e) => {
                                        var img = document.createElement("img");
                                        img.onload = () => {
                                            // Resizing to save space in DB
                                            var canvas = document.createElement('canvas');
                                            var ctx = canvas.getContext("2d");
                                            var MAX_WIDTH = 125;

                                            let newHeight = 100
                                            var width = img.width;
                                            var height = img.height;
                                            let newWidth = Math.min((width / height) * newHeight, MAX_WIDTH)


                                            canvas.width = newWidth;
                                            canvas.height = newHeight;
                                            ctx.drawImage(img, 0, 0, newWidth, newHeight);
                                            var dataurl = canvas.toDataURL("image/png");
                                            setItemImage(dataurl)
                                        }
                                        img.src = e.target.result;
                                    }
                                    reader.readAsDataURL(file)
                                }
                            }
                            } />
                        </Form.File>
                        {/* Item Name */}
                        <InputGroup className="mt-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Item Name</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl value={itemName} onChange={(e) => setItemName(e.target.value)} required />
                        </InputGroup>
                        {/* Item Category */}
                        <InputGroup className="mt-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Item Category</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl as='select' className='form-select' onChange={(e) => setItemCategory(e.target.value)} value={itemCategory}>
                                <option value='Drinks'>Drinks</option>
                                <option value='Food'>Food</option>
                                <option value='Fruits'>Fruits</option>
                                <option value='Snacks'>Snacks</option>
                                <option value='Others'>Others</option>

                            </FormControl>
                        </InputGroup>
                        {/* Item Price */}
                        <InputGroup className="mt-2">
                            <CurrencyInput
                                className='w-100'
                                placeholder="S$"
                                decimalsLimit={2}
                                prefix='S$'
                                value={itemPrice}
                                onValueChange={(value) => {
                                    setItemPrice(value)
                                }} required />
                        </InputGroup>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="success" type='submit'>Update Item</Button>

                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

