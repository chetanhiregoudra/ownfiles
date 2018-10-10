import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import { NavLink } from 'react-router-dom';
const footer = () => (
  
    <Footer color="blue" className="font-small pt-4 mt-4 footer">
        <Container className="text-left">
            <Row>
            <Col sm="6">
                <h5 className="title">ATL</h5>
                <p>Library Application</p>
            </Col>
            <Col sm="6">
               
                <ul>
                    <li className="list-unstyled"><NavLink to="/">Home</NavLink></li>
                    <li className="list-unstyled"><NavLink to="/books">Books</NavLink></li>
                    
                    
                </ul>
            </Col>
            </Row>
        </Container>
        <div className="footer-copyright text-center">
            <Container fluid>
                &copy; {(new Date().getFullYear())} Copyright: <a href=""> react201.com </a>
            </Container>
        </div>
    </Footer>
  
);

export default footer;