import './BethuneCarousel.css';
import Carousel from 'react-bootstrap/Carousel';
import lot from '../bunche/lot.jpg';
import frontA from '../bunche/frontUnitA.png';
import frontB from '../bunche/frontUnitB.png';



function BuncheCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="project-images"
                    src={lot}
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