import React, { Component } from 'react';

import Menubar from './Menubar/Menubar';


class Toolbar extends Component{
    
    state ={
        collapse: false,
        isWideEnough: false
    }
    toggleHandler = () =>{
        console.log(this.state.collapse)
        this.setState({colapse : !this.state.collapse})
    }
    render () {
        console.log(this.props);
        return (
            <header>
                <Menubar />
            </header>
        );
    }
}

export default Toolbar;