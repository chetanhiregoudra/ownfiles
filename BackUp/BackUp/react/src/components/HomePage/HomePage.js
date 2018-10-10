import React, { Component } from 'react';
import Carousel from './Carousel/Slides';

class HomePage extends Component {
    render() {
        return(
            <div className="container">
                <br/>
                <Carousel />
                <div align="center"><h1> This is HomePage</h1></div>
            </div>
        )
    };
}

export default HomePage;