import { InputGroup, Form, FormControl } from 'react-bootstrap';
import CurrencyInput from 'react-currency-input-field';

// This Component consists of the inputs to create a new item
export default function AddItem(props) {
    return <>
        {/* Item Image */}
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
                            let newWidth = Math.min((width/height)*newHeight,MAX_WIDTH)


                            canvas.width = newWidth;
                            canvas.height = newHeight;
                            ctx.drawImage(img, 0, 0, newWidth, newHeight);
                            var dataurl = canvas.toDataURL("image/png");
                            props.setItemImage(dataurl)
                        }
                        img.src = e.target.result;
                    }
                    reader.readAsDataURL(file)
                }
            }
            } required />
        </Form.File>
        {/* Item Name */}
        <InputGroup className="mt-2">
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Item Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl onChange={(e) => props.setItemName(e.target.value)} required />
        </InputGroup>
        {/* Item Category */}
        <InputGroup className="mt-2">
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Item Category</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl as='select' onChange={(e) => props.setItemCategory(e.target.value)} value={props.itemCategory}>
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
                value={props.itemPrice}
                decimalsLimit={2}
                prefix='S$'
                onValueChange={(value) => {
                    props.setItemPrice(value)
                }} required />
        </InputGroup>
    </>

};
