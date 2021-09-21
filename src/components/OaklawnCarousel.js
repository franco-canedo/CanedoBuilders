import Carousel from 'react-bootstrap/Carousel';

import OaklawnLayout from '../oaklawn/oaklawnLayout.png';
import OaklawnLevel1 from '../oaklawn/oaklawnLevel1.png';
import OaklawnLevel2 from '../oaklawn/oaklawnLevel2.png';
import OaklawnLevel3 from '../oaklawn/oaklawnLevel3.png';

function OaklawnCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="project-images"
                    src={OaklawnLayout}
                    alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="project-images"
                    src={OaklawnLevel1}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="project-images"
                    src={OaklawnLevel2}
                    alt="Third slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="project-images"
                    src={OaklawnLevel3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default OaklawnCarousel;