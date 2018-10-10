import React, { Component } from 'react';

import Menubar from './Menubar/Menubar';


class Toolbar extends Component{
    
    state = {
        collapse: false,
        isWideEnough: false,
        dropdownOpen: false
    }
    clicked = () => {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render () {
        
        return (
            <header style={{marginBottom:"2%"}}>
                <Menubar 
                    toggle={this.toggle} 
                    clicked={this.clicked} 
                    collapse={this.state.collapse}
                    dropdownOpen={this.state.dropdownOpen}
                    isWideEnough={this.state.isWideEnough} />
            </header>
        );
    }
}

export default Toolbar;