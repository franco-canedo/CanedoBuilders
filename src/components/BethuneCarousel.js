import Carousel from 'react-bootstrap/Carousel';
import render1 from '../bethune/render1.jpg';
import render2 from '../bethune/render2.jpg';
import render3 from '../bethune/render3.jpg';
import render4 from '../bethune/render4.jpg';
import render5 from '../bethune/render5.jpg';
import render6 from '../bethune/render6.jpg';
import render7 from '../bethune/render7.jpg';
import render8 from '../bethune/render8.jpg';

import grass from '../photos/grass.jpg';



function BethuneCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={render1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={render2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={render3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={render4}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={render5}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={render6}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={render7}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={render8}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>


    );
}

export default BethuneCarousel;