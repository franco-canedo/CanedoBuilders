import { useEffect, useState } from 'react';
import './Gallery.css';
import house from '../photos/house.jpg';
import ExteriorCarousel from '../components/ExteriorCarousel';
import HeadCarousel from '../components/HeadCarousel';
import KitchenCarousel from '../components/KitchenCarousel';
import BathroomCarousel from '../components/BathroomCarousel';
import BedroomCarousel from '../components/BedroomCarousel';
import ConstructionCarousel from '../components/ConstructionCarousel';
import LivingCarousel from '../components/LivingCarousel';
import OutdoorCarousel from '../components/OutdoorCarousel';
import DiningCarousel from '../components/DiningCarousel';



function Gallery() {
    return (
        <div>
            <div>
                <h1>Gallery</h1>
            </div>
            <div className="head-picture-container">
                {/* <img className="head-image" src={house} alt="house" /> */}
                <HeadCarousel />
            </div>
            <div className="gallery-container">
                <div className="grid-item">
                    <div>
                        <ExteriorCarousel />
                    </div>
                    <div>
                        <h2>EXTERIOR</h2>
                    </div>

                </div>
                <div className="grid-item">
                    <div>
                        <KitchenCarousel />
                    </div>
                    <div>
                        <h2>KITCHEN</h2>
                    </div>

                </div>
                <div className="grid-item">
                    <div>
                        <BedroomCarousel />
                    </div>
                    <div>
                        <h2>BEDROOM</h2>
                    </div>

                </div>
                <div className="grid-item">
                    <div>
                        <BathroomCarousel />
                    </div>
                    <div>
                        <h2>BATHROOM</h2>
                    </div>

                </div>
                <div className="grid-item">
                    <div>
                        <LivingCarousel />
                    </div>
                    <div>
                        <h2>LIVING</h2>
                    </div>

                </div>
                <div className="grid-item">
                    <div>
                        <LivingCarousel />
                    </div>
                    <div>
                        <h2>EXTERIOR</h2>
                    </div>

                </div>

                
            </div>
        </div>

    );
}

export default Gallery;