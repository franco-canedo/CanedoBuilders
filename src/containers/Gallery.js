import { useEffect, useState } from 'react';
import './Gallery.css';
import house from '../photos/house.jpg';



function Gallery() {
    return (
        <div>
            <div>
                <h1>Gallery</h1>
            </div>
            <div className="head-picture-container">
                <img className="head-image" src={house} alt="house" />
            </div>
            <div className="gallery-container">
                <div className="grid-item">
                    <div>
                        <img className="head-image" src={house} alt="house" />
                    </div>
                    <div>
                        <h2>EXTERIOR</h2>
                    </div>

                </div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>

            </div>
        </div>

    );
}

export default Gallery;