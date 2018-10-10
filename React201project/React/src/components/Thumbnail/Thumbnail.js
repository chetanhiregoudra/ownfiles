import React from 'react';

import Aux from '../../hoc/_Aux';

import './Thumbnail.css'

const thumbnail = (props) => {
    
    return(
        <Aux>
            
           
           
                <div className="col-sm-3 mb-3 zoom" onClick={() => props.clicked(props.id)} >
                    <img src={props.book.picUrl} className="img-thumbnail img-fluid z-depth-1" alt="Responsive" style={{width: '150px', height: '200px'}}  />
                    {/* <div className="card-up deep-purple lighten-2"></div>
                    <div className="avatar mx-auto white zoom">
                        <img src={props.thumbnail} alt="Responsive mx-auto white zoom"  className="img-thumbnail img-fluid" height="200" width="150" />
                    </div> */}
                    <div className="content">
                        <div className="header">{props.book.title}</div>
                    </div>
                </div>
                
        </Aux>
    );
}

    
    


export default thumbnail;