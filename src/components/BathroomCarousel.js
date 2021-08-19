import Carousel from 'react-bootstrap/Carousel';
import ba1 from '../bathroom/ba1.jpg';
import ba2 from '../bathroom/ba2.jpg';
import ba3 from '../bathroom/ba3.jpg';
import ba4 from '../bathroom/ba4.jpg';
import ba5 from '../bathroom/ba5.jpg';
import ba6 from '../bathroom/ba6.jpg';
import ba7 from '../bathroom/ba7.jpg';
import ba8 from '../bathroom/ba8.jpg';




function BathroomCarousel() {
    return (
        <Carousel >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ba1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ba2}
                    alt="Second slide"
                />

               
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ba4}
                    alt="Third slide"
                />             
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ba5}
                    alt="Third slide"
                />             
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ba6}
                    alt="Third slide"
                />             
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ba7}
                    alt="Third slide"
                />             
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ba8}
                    alt="Third slide"
                />             
            </Carousel.Item>
        </Carousel>


    );
}

export default BathroomCarousel;