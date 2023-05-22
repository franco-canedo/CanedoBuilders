import Carousel from 'react-bootstrap/Carousel';
import e1 from '../exterior/e1.jpg';
import e2 from '../exterior/e2.jpg';
import e3 from '../exterior/e3.jpg';
import e4 from '../exterior/e4.jpg';
import e5 from '../exterior/e5.jpg';
import e6 from '../exterior/e6.jpg';
import e7 from '../exterior/e7.jpg';
import e8 from '../exterior/e8.jpg';
import e10 from '../exterior/e10.jpg';
import e11 from '../exterior/e11.jpg';
import e12 from '../exterior/e12.jpg';
import e13 from '../exterior/e13.jpg';
import e14 from '../exterior/e14.jpg';
import e15 from '../exterior/e15.jpg';
import e17 from '../exterior/e17.jpg';
import e18 from '../exterior/e18.jpg';




function ExteriorCarousel() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={e17}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={e18}
                    alt="First slide"
                />
            </Carousel.Item>
             <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={e10}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={e11}
                    alt="First slide"
                />
            </Carousel.Item>
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