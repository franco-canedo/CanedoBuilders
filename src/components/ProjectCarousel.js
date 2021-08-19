import Carousel from 'react-bootstrap/Carousel';
import givens1 from '../givens/givens1.jpg';
import givens2 from '../givens/givens2.jpg';
import givens3 from '../givens/givens3.jpg';
import givens4 from '../givens/givens4.jpg';
import givens5 from '../givens/givens5.jpg';
import givens6 from '../givens/givens6.jpg';
import givens7 from '../givens/givens7.jpg';
import givens8 from '../givens/givens8.jpg';
import givens9 from '../givens/givens9.jpg';





function ProjectCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={givens1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={givens2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={givens3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={givens4}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={givens5}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={givens6}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={givens7}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={givens8}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={givens9}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>


    );
}

export default ProjectCarousel;