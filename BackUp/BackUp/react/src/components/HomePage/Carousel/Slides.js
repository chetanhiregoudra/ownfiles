import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import slide1 from '../../../assets/images/c1.jpg'; 
import slide2 from '../../../assets/images/c2.jpg'; 
import slide3 from '../../../assets/images/c3.jpg'; 
import slide4 from '../../../assets/images/c4.jpg'; 
import 'react-responsive-carousel/lib/styles/carousel.min.css'

class Slides extends Component {
	render(){
		return (
			<Carousel showArrows={true} autoPlay dynamicHeight showStatus={false} showThumbs={false} infiniteLoop={true}>
                <div>
                    <img src={slide1} alt="slide1" />
                </div>
                <div>
                    <img src={slide2} alt="slide2" />
                </div>
                <div>
                    <img src={slide3} alt="slide3" />
                </div>
				<div>
                    <img src={slide4} alt="slide4" />
                </div>
       		</Carousel>
		);
	};
}


export default Slides; 