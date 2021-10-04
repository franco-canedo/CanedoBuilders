import './BethuneCarousel.css';
import Carousel from 'react-bootstrap/Carousel';
import unitA from '../East21/renderingUnitA.jpg';
import unitB from '../East21/renderingUnitB.jpg';
import e21Lot from '../East21/e21Lot.jpeg';


function E21Carousel() {
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
            <Carousel.Item>
                <img
                    className="project-images"
                    src={e21Lot}
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default E21Carousel;