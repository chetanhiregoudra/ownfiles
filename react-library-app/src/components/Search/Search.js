import React, { Component } from 'react';
import {InputGroup, FormGroup, FormControl, Glyphicon, Row, Col, Button} from 'react-bootstrap';

import Aux from '../../hoc/Aux';

class Search extends Component{
    state = {
        textVal: ''
    }
    textChangeHandle = (e) => {
        this.setState({textVal:e.target.value})
        console.log(this.state.textVal);
    }

    getTextHandler = () => {
        console.log(this.props.history);
        this.props.history.push({pathname:'/thumbnail/' + this.state.textVal});
    }
    render () {
        return (
            <Aux>
                <Row className="show-grid">
                    <Col xs={6} xsOffset={3}>
                    <FormGroup>
                        <InputGroup>
                        <FormControl type="text" onChange={this.textChangeHandle} value={this.state.textVal} />
                        <InputGroup.Addon onClick={this.getTextHandler}>
                            <Glyphicon glyph="search" />
                        </InputGroup.Addon>
                        </InputGroup>
                    </FormGroup>
                    </Col> 
                </Row>
            </Aux>
        );
    }
} 

export default Search;