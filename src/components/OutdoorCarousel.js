import Carousel from 'react-bootstrap/Carousel';
import o1 from '../outdoor/o1.jpg';
import o2 from '../outdoor/o2.jpg';
import o3 from '../outdoor/o3.jpg';
import o4 from '../outdoor/o4.jpg';
import o5 from '../outdoor/o5.jpg';
import o6 from '../outdoor/o6.jpg';
import o7 from '../outdoor/o7.jpg';
import o8 from '../outdoor/o8.jpg';




function OutdoorCarousel() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={o1}
                    alt="First slide"
                />
             
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={o2}
                    alt="Second slide"
                />

             
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={o3}
                    alt="Third slide"
                />

                
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={o4}
                    alt="Third slide"
                />     
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={o5}
                    alt="Third slide"
                />     
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={o8}
                    alt="Third slide"
                />     
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={o7}
                    alt="Third slide"
                />     
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={o6}
                    alt="Third slide"
                />     
            </Carousel.Item>
        </Carousel>


    );
}

export default OutdoorCarousel;