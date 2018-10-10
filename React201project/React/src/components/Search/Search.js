import React from 'react';
import {Button, Fa} from 'mdbreact';

import Aux from '../../hoc/_Aux';

const search = (props) => {
    return (
        <Aux>
            <div className="container" style={{marginBottom:"2%"}}>
                <div className="row justify-content-md-center ">
                    <div className="col-12 col-md-auto ">
                        <input className="form-control mr-sm-2 mb-0 text-black" type="text" placeholder="Search" aria-label="Search" onChange={props.onchange} />
                        <Button outline color="secondary" onClick={props.onclick}>Search <Fa icon="search" className="ml-1"/></Button>
                    </div>
                </div>
            </div>
        </Aux>
    );
}
    // state = {
    //     textVal: ''
    // }
    // textChangeHandle = (e) => {
    //     this.setState({textVal:e.target.value})
    //     console.log(this.state.textVal);
    // }

    // getTextHandler = () => {
    //     console.log(this.props.history);
    //     this.props.history.push({pathname:'/thumbnail/' + this.state.textVal});
    // }
    

export default search;