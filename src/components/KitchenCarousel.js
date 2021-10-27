import Carousel from 'react-bootstrap/Carousel';
import k1 from '../kitchen/k1.jpg';
import k2 from '../kitchen/k2.jpg';
import k3 from '../kitchen/k3.jpg';
import k4 from '../kitchen/k4.jpg';
import k5 from '../kitchen/k5.jpg';
import k6 from '../kitchen/k6.jpg';
import k7 from '../kitchen/k7.jpg';
import k8 from '../kitchen/k8.jpg';
import k10 from '../kitchen/k10.jpg';
import k9 from '../givens/givens6.jpg';





function KitchenCarousel() {
    return (
        <Carousel fade>
             <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={k10}
                    alt="First slide"
                />
                
            </Carousel.Item>
             <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={k9}
                    alt="First slide"
                />
                
            </Carousel.Item>
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
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={k5}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={k6}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={k7}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={k8}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>


    );
}

export default KitchenCarousel;