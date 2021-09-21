import './BethuneCarousel.css';
import Carousel from 'react-bootstrap/Carousel';
import unitA from '../East21/unitA.png';
import unitB from '../East21/unitB.png';
import site from '../East21/site.png';
import OaklawnLot from '../oaklawn/oaklawnLot.jpeg';


function E21Carousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="project-images"
                    src={OaklawnLot}
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default E21Carousel;