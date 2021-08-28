import './BethuneCarousel.css';
import Carousel from 'react-bootstrap/Carousel';
import BuncheLot from '../bunche/BuncheLot.png';
import bunche1 from '../bunche/FirstFloorPlansBunche.png';
import bunche2 from '../bunche/SecondFloorPlansBunche.png';


function BuncheCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="project-images"
                    src={BuncheLot}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="project-images"
                    src={bunche1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="project-images"
                    src={bunche2}
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default BuncheCarousel;