import Carousel from 'react-bootstrap/Carousel';
import b1 from '../bedroom/b1.jpg';
import b2 from '../bedroom/b2.jpg';
import b3 from '../bedroom/b3.jpg';
import b4 from '../bedroom/b4.jpg';
import b5 from '../bedroom/b5.jpg';
import b6 from '../bedroom/b6.jpg';
import b7 from '../bedroom/b7.jpg';
import b8 from '../bedroom/b8.jpg';
import b10 from '../bedroom/b10.jpg';
import b11 from '../bedroom/b11.jpg';
import b12 from '../bedroom/b12.jpg';
import b13 from '../bedroom/b13.jpg';





function BedroomCarousel() {
    return (
        <Carousel fade>
            {/* <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={b10}
                    alt="First slide"
                />
              
            </Carousel.Item> */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={b13}
                    alt="First slide"
                />
              
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={b10}
                    alt="First slide"
                />
              
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={b11}
                    alt="First slide"
                />
              
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={b12}
                    alt="First slide"
                />
              
            </Carousel.Item>
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
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={b5}
                    alt="Third slide"
                />       
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={b6}
                    alt="Third slide"
                />       
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={b7}
                    alt="Third slide"
                />       
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={b8}
                    alt="Third slide"
                />       
            </Carousel.Item>
        </Carousel>


    );
}

export default BedroomCarousel;