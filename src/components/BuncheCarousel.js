import './BethuneCarousel.css';
import Carousel from 'react-bootstrap/Carousel';
import BuncheLot from '../bunche/BuncheLot.png';
import bunche1 from '../bunche/FirstFloorPlansBunche.png';
import bunche2 from '../bunche/SecondFloorPlansBunche.png';
import OaklawnLot from '../oaklawn/oaklawnLot.jpeg';


function BuncheCarousel() {
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

export default BuncheCarousel;