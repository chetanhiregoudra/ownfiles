import React from 'react';
import { Container, Row, Col, Fa} from 'mdbreact';



const details = (props) => {
  //console.log(props.book.picUrl)
    return (
      <Container>
        <Row>
            <Col lg="5">
                <Row>
                    <Col lg="8">
                        <div className="rounded z-depth-1-half mb-lg-0 mb-4 zoom">
                            <img src={props.details.picUrl} className="card-img-top" alt="wider" />
                        </div>
                    </Col>
                </Row>   
            </Col>
            <Col lg="7">
                <a className="green-text"><h6 className="font-weight-bold mb-3"><Fa icon="user-circle" className="pr-2"></Fa>{props.details.author}</h6></a>
                <h3 className="font-weight-bold mb-3 p-0"><strong>
                <Fa icon="book" className="pr-2"></Fa>{props.details.title}</strong></h3>
                <p></p>
                <p><strong>Published</strong> by <a><strong>{props.details.publisher}</strong></a>, {props.details.publishDate}</p>
                <button type="button" class="btn btn-danger btn-rounded" onClick={props.clicked}>Back</button>
                <button type="button" class="btn btn-info btn-rounded" onClick={props.borrow}>Borrow</button>
            </Col>
        </Row>
    </Container>
    );
}

export default details;