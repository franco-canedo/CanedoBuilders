import Carousel from 'react-bootstrap/Carousel';
import house from '../photos/house.jpg';
import house2 from '../photos/house2.jpg';
import house7 from '../photos/house7.jpg';
import house6 from '../photos/house6.jpg';



function ProjectCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={house6}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={house7}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={house2}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={house}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>


    );
}

export default ProjectCarousel;