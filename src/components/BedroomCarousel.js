import Carousel from 'react-bootstrap/Carousel';
import b1 from '../bedroom/b1.jpg';
import b2 from '../bedroom/b2.jpg';
import b3 from '../bedroom/b3.jpg';
import b4 from '../bedroom/b4.jpg';
import b5 from '../bedroom/b5.jpg';




function BedroomCarousel() {
    return (
        <Carousel >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={b1}
                    alt="First slide"
                />
              
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={b2}
                    alt="Second slide"
                />

               
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={b3}
                    alt="Third slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={b4}
                    alt="Third slide"
                />

               
            </Carousel.Item>
        </Carousel>


    );
}

export default BedroomCarousel;