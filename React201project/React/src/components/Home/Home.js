import React, {Component} from 'react';
import  { Carousel, CarouselInner, CarouselItem, View, Container } from 'mdbreact';

import Aux from '../../hoc/_Aux';


class Home extends Component {
    render () {
        return (
            <Aux>
                
                <Container >
                    <Carousel
                    activeItem={1}
                    length={4}
                    showControls={true}
                    showIndicators={false}
                    className="z-depth-1">
                    <CarouselInner>
                        <CarouselItem itemId="1">
                        <View>
                            <img className="d-block w-100" src="https://42796r1ctbz645bo223zkcdl-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/battistella-october-post-image-feature.jpg" alt="First slide" />
                        </View>
                        </CarouselItem>
                        <CarouselItem itemId="2">
                        <View>
                            <img className="d-block w-100" src="http://www.rrlib.net/wp-content/uploads/2016/06/books-closeup.jpg" alt="Second slide" />
                        </View>
                        </CarouselItem>
                        <CarouselItem itemId="3">
                        <View>
                            <img className="d-block w-100" src="https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/UXVLUGXOCRD27IWH2TYMVRC6I4.jpg" alt="Third slide" />
                        </View>
                        </CarouselItem>
                        <CarouselItem itemId="4">
                        <View>
                            <img className="d-block w-100" src="http://www.uproc.lib.mi.us/ftpl/wp-content/themes/forsyth/assets/img/books.jpg" alt="Mattonit's item" />
                        </View>
                        </CarouselItem>
                    </CarouselInner>
                    </Carousel>
                </Container>
                
            </Aux>
        );
    }
}
export default Home;