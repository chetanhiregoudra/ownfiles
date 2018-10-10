import React from 'react';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';

import Aux from '../../hoc/Aux';

const thumbnail = (props) => (
    <Aux>
        <Grid>
            <Row>
                <Col  sm={4}>
                <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                    <h3>{props.match.params.id}</h3>
                    <p>Description</p>
                    <p>
                    <Button bsStyle="primary">Button</Button>&nbsp;
                    <Button bsStyle="default">Button</Button>
                    </p>
                </Thumbnail>
                </Col>
                <Col  sm={4}>
                <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                    <Button bsStyle="primary">Button</Button>&nbsp;
                    <Button bsStyle="default">Button</Button>
                    </p>
                </Thumbnail>
                </Col>
                <Col  sm={4}>
                <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                    <Button bsStyle="primary">Button</Button>&nbsp;
                    <Button bsStyle="default">Button</Button>
                    </p>
                </Thumbnail>
                </Col>
            </Row>
        </Grid>
    </Aux>
);

export default thumbnail;