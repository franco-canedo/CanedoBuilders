import './BethuneCarousel.css';
import Carousel from 'react-bootstrap/Carousel';
import unitA from '../brentwood/brentRenderings/BrentA.jpg';
import unitB from '../brentwood/brentRenderings/BrentB.jpg';



function BrentCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="project-images"
                    src={unitA}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="project-images"
                    src={unitB}
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default BrentCarousel;