import './BethuneCarousel.css';
import Carousel from 'react-bootstrap/Carousel';
import lot from '../bunche/lot.jpg';
import bothHomes from '../bunche/3-1.jpg';
import frontA from '../bunche/1-1.jpg';
import frontB from '../bunche/7.jpg';



function BuncheCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="project-images"
                    src={bothHomes}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="project-images"
                    src={frontA}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="project-images"
                    src={frontB}
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default BuncheCarousel;