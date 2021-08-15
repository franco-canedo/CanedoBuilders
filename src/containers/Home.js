import { useEffect, useState } from 'react';
import './Home.css';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import house from '../photos/house.jpg';
import house5 from '../photos/house5.jpg';
import house6 from '../photos/house6.jpg';


function Home() {
    return (
        <div className="gallery-master-container">
            <div className="head-div">
                <img className="head-imager" src={house}></img>
                <p>
                    Creating beautiful and unique living spaces that
                    blend seamlessly with the character and culture of the city of Austin.  </p>
            </div>
            <div className="paragraph-div">
                <p>
                    Creating beautiful and unique living spaces that
                    blend seamlessly with the character and culture of the city of Austin.  </p>
            </div>
            <div className='hero-btns'>
                <Button
                    variant="light"
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    onClick="document.getElementById('middle').scrollIntoView();"
                >

                    <a href="#down">MORE</a>
                </Button>

            </div>
            <div className="sliders=container">
                <div>
                    <img className="slide-img" src={house5}></img>
                </div>
                <div>
                    <img className="slide-img" src={house6}></img>
                </div>

            </div>
        </div>

    );
}

export default Home;