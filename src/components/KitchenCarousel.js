import Carousel from 'react-bootstrap/Carousel';
import k1 from '../kitchen/k1.jpg';
import k2 from '../kitchen/k2.jpg';
import k3 from '../kitchen/k3.jpg';
import k4 from '../kitchen/k4.jpg';





function KitchenCarousel() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={k1}
                    alt="First slide"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={k2}
                    alt="Second slide"
                />

               
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={k3}
                    alt="Third slide"
                />

                
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={k4}
                    alt="Third slide"
                />

               
            </Carousel.Item>
        </Carousel>


    );
}

export default KitchenCarousel;