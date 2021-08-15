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