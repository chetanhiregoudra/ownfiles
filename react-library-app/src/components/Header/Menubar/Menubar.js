import React from 'react';
import {Navbar, FormGroup, Button, FormControl, Col} from 'react-bootstrap';

import Aux from '../../../hoc/Aux';
import Logo from '../Logo/Logo';

const menuBar = (props) => {
    return (
        <Aux>
            <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                <Logo  />
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Navbar.Text >Welcome To Library!</Navbar.Text>
            
            <Navbar.Text pullRight >
                Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>
            </Navbar.Text>
                
            </Navbar.Collapse>
            </Navbar>
        </Aux>
    );
}
export default menuBar;