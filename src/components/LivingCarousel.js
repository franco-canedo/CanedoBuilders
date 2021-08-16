import Carousel from 'react-bootstrap/Carousel';
import l1 from '../living/l1.jpg';
import l2 from '../living/l2.jpg';
import l3 from '../living/l3.jpg';
import l4 from '../living/l4.jpg';
import l5 from '../living/l5.jpg';




function LivingCarousel() {
    return (
        <Carousel fade>
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
        </Carousel>


    );
}

export default LivingCarousel;