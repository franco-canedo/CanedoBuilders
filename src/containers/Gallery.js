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
import FloatingActionButtons from '../components/FloatingButton';

import load from '../gifs/buffer.gif';
import green from '../gifs/green.png';
import infinity from '../gifs/infinity.gif';
import text from '../gifs/text.gif';


function Gallery({ toCurrent }) {
    const [buttonStatus, setButtonStatus] = useState(true);

    const closeButton = () => {
        setButtonStatus(false)
    }

    const [loading, setLoading] = useState(true);

    const timer = () => {
        setInterval(() => setLoading(false), 4000);
    }



    useEffect(() => {
        window.scrollTo(0, 400);
    }, [])

    return (
        <div className="gallery-master-container">
            <div className="head-picture-container">
                {/* <img className="head-image" src={house} alt="house" /> */}

                <HeadCarousel />
            </div>
            <div className="gallery-container">
                <div className="grid-item">
                    <div>
                        <h2 className="floorplan-titles">EXTERIOR</h2>
                    </div>
                    <div>
                    {timer()}
                {
                    loading === true ? <div className="bounce">
                        <img className="loader-gif" src={load}></img>
        </div>
                     :
                     <ExteriorCarousel />
                }
                        {/* <ExteriorCarousel /> */}
                    </div>


                </div>
                <div className="grid-item">
                    <div>
                        <h2 className="floorplan-titles">KITCHEN</h2>
                    </div>
                    <div>
                    {
                    loading === true ? <div className="bounce">
                    <img className="loader-gif" src={load}></img></div>
                     :
                     <KitchenCarousel />
                }
                        
                    </div>


                </div>
                <div className="grid-item">
                    <div>
                        <h2 className="floorplan-titles">LIVING</h2>
                    </div>
                    <div>

                    {
                    loading === true ? <div className="bounce">
                    <img className="loader-gif" src={load}></img></div>
                     :
                     <LivingCarousel />
                }
                       
                    </div>


                </div>
                <div className="grid-item">
                    <div>
                        <h2 className="floorplan-titles">OUTDOOR</h2>
                    </div>
                    <div>
                    {
                    loading === true ? <div className="bounce">
                    <img className="loader-gif" src={load}></img></div>
                     :
                     <OutdoorCarousel />
                }
                        
                    </div>


                </div>
                <div className="grid-item">
                    <div>
                        <h2 className="floorplan-titles">BEDROOM</h2>

                    </div>
                    <div>
                    {
                    loading === true ? <div className="bounce">
                    <img className="loader-gif" src={load}></img></div>
                     :
                     <BedroomCarousel />
                }
                       
                    </div>


                </div>
                <div className="grid-item">
                    <div>
                        <h2 className="floorplan-titles">BATHROOM</h2>
                    </div>
                    <div>
                    {
                    loading === true ? <div className="bounce">
                    <img className="loader-gif" src={load}></img></div>
                     :
                     <BathroomCarousel />
                }
                       
                    </div>


                </div>
               

                {/* <div 
                        className={buttonStatus ? "action-button" : "action-button-x"}>
                            <p>Check out our Current Projects!</p>
                            
                        <FloatingActionButtons closeButton={closeButton}
                        toCurrent={toCurrent}/>
                    </div> */}




            </div>
        </div>

    );
}

export default Gallery;