import Carousel from 'react-bootstrap/Carousel';
import house from '../photos/house.jpg';
import house2 from '../photos/house2.jpg';
import house3 from '../photos/house3.jpg';
import house4 from '../photos/house4.jpg';



function BathroomCarousel() {
    return (
        <Carousel >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={house}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={house2}
                    alt="Second slide"
                />

               
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={house3}
                    alt="Third slide"
                />

                
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={house4}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Fourth slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


    );
}

export default BathroomCarousel;