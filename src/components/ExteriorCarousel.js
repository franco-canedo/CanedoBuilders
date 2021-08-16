import Carousel from 'react-bootstrap/Carousel';
import e1 from '../exterior/e1.jpg';
import e2 from '../exterior/e2.jpg';
import e3 from '../exterior/e3.jpg';
import e4 from '../exterior/e4.jpg';
import e5 from '../exterior/e5.jpg';
import e6 from '../exterior/e6.jpg';




function ExteriorCarousel() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={e1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={e2}
                    alt="Second slide"
                />

                
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={e3}
                    alt="Third slide"
                />

                
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={e4}
                    alt="Third slide"
                />

                
            </Carousel.Item>
        </Carousel>


    );
}

export default ExteriorCarousel;