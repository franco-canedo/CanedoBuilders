import Carousel from 'react-bootstrap/Carousel';
import house from '../photos/house.jpg';
import grass from '../photos/grass.jpg';
import house5 from '../photos/house5.jpg';
import house6 from '../photos/house6.jpg';
import './HeadCarousel.css';


function HeadCarousel() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="head-image"
                    src={house}
                    alt="First slide"
                />
              
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="head-image"
                    src={grass}
                    alt="Second slide"
                />     
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="head-image"
                    src={house5}
                    alt="Third slide"
                />      
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="head-image"
                    src={house6}
                    alt="Third slide"
                />      
            </Carousel.Item>
        </Carousel>


    );
}

export default HeadCarousel;