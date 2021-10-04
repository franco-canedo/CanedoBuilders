import Carousel from 'react-bootstrap/Carousel';
import l1 from '../living/l1.jpg';
import l2 from '../living/l2.jpg';
import l3 from '../living/l3.jpg';
import l4 from '../living/l4.jpg';
import l5 from '../living/l5.jpg';
import l6 from '../living/l6.jpg';
import l7 from '../living/l7.jpg';
import l8 from '../living/l8.jpg';
import l9 from '../givens/givens2.jpg';




function LivingCarousel() {
    return (
        <Carousel fade>
             <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={l9}
                    alt="First slide"
                />
             
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={l1}
                    alt="First slide"
                />
             
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={l2}
                    alt="Second slide"
                />

             
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={l3}
                    alt="Third slide"
                />

                
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={l4}
                    alt="Third slide"
                />       
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={l5}
                    alt="Third slide"
                />       
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={l6}
                    alt="Third slide"
                />       
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={l7}
                    alt="Third slide"
                />       
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={l8}
                    alt="Third slide"
                />       
            </Carousel.Item>
        </Carousel>


    );
}

export default LivingCarousel;