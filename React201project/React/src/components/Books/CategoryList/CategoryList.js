import React from 'react'
import { ListGroup, ListGroupItem } from 'mdbreact';

const categoryList = (props) => (
    <ListGroup>
        <ListGroupItem>
            <div className="custom-control custom-checkbox" style={{float:"left"}} >
                <input type="checkbox" className="custom-control-input" 
                    id="defaultUnchecked" value="Health and fitness" onClick={props.onclick} />
                <label className="custom-control-label" htmlFor="defaultUnchecked">Health and fitness</label>
            </div>
        </ListGroupItem>
        <ListGroupItem>
            <div className="custom-control custom-checkbox" style={{float:"left"}}>
                <input type="checkbox" className="custom-control-input" 
                    id="defaultUnchecked1" value="Science" onClick={props.onclick} />
                <label className="custom-control-label" htmlFor="defaultUnchecked1">Science</label>
            </div>
        </ListGroupItem>
        <ListGroupItem>
            <div className="custom-control custom-checkbox" style={{float:"left"}}>
                <input type="checkbox" className="custom-control-input" 
                    id="defaultUnchecked2" value="History" onClick={props.onclick}  />
                <label className="custom-control-label" htmlFor="defaultUnchecked2">History</label>
            </div>
        </ListGroupItem>
        <ListGroupItem>
            <div className="custom-control custom-checkbox" style={{float:"left"}}>
                <input type="checkbox" className="custom-control-input" 
                    id="defaultUnchecked3" value="Text Book" onClick={props.onclick}  />
                <label className="custom-control-label" htmlFor="defaultUnchecked3">Text Book</label>
            </div>
        </ListGroupItem>
    </ListGroup>
)

export default categoryList;