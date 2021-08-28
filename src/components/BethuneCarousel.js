import './BethuneCarousel.css';
import Carousel from 'react-bootstrap/Carousel';
import render1 from '../bethune/render1.jpg';
import render2 from '../bethune/render2.jpg';
import render3 from '../bethune/render3.jpg';
import render4 from '../bethune/render4.jpg';
import render5 from '../bethune/render5.jpg';
import latestKitchen from '../bethune/latestKitchen.jpg';
import latestKitchen2 from '../bethune/latestKitchen2.jpg';
import construction1 from '../bethune/construction1.jpg';
import plan1 from '../bethune/plan1.jpg';
import plan2 from '../bethune/plan2.png';
import construction2 from '../bethune/IMG-1454.jpg';
import construction3 from '../bethune/IMG-1456.jpg';
import construction4 from '../bethune/IMG-1457.jpg';


import grass from '../photos/grass.jpg';



function BethuneCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="project-images"
                    src={render1}
                    alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="project-images"
                    src={render5}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="project-images"
                    src={render4}
                    alt="Third slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="project-images"
                    src={construction1}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="project-images"
                    src={latestKitchen}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="project-images"
                    src={latestKitchen2}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="project-images"
                    src={construction3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="project-images"
                    src={construction4}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>


    );
}

export default BethuneCarousel;