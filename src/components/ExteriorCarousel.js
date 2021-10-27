import Carousel from 'react-bootstrap/Carousel';
import e1 from '../exterior/e1.jpg';
import e2 from '../exterior/e2.jpg';
import e3 from '../exterior/e3.jpg';
import e4 from '../exterior/e4.jpg';
import e5 from '../exterior/e5.jpg';
import e6 from '../exterior/e6.jpg';
import e7 from '../exterior/e7.jpg';
import e8 from '../exterior/e8.jpg';
import e9 from '../givens/givens1.jpg';
import be1 from '../bethune/be1.jpg';




function ExteriorCarousel() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={e7}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={e9}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={be1}
                    alt="Third slide"
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
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={e6}
                    alt="Third slide"
                />        
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={e8}
                    alt="Third slide"
                />        
            </Carousel.Item>
            
        </Carousel>


    );
}

export default ExteriorCarousel;