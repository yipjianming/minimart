
import { Navbar } from 'react-bootstrap';

export default function NavigationBar() {
    return <Navbar className='px-3' style={{backgroundColor:'#B6DD92'}}>
        <Navbar.Brand href="#home">Jack's Minimart</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Signed in as: <a href="#login">Jack</a>
            </Navbar.Text>
        </Navbar.Collapse>
    </Navbar >
};
