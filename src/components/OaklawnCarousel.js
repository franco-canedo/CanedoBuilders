import Carousel from 'react-bootstrap/Carousel';

import OaklawnLot from '../oaklawn/oaklawnLot.jpeg';

function OaklawnCarousel() {
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

export default OaklawnCarousel;