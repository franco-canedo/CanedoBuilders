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



function Gallery({ toCurrent }) {
    const [buttonStatus, setButtonStatus] = useState(true);

    const closeButton = () => {
        setButtonStatus(false)
    }

    

    useEffect(() => {
        window.scrollTo(0, 400);
       
    },[])

    return (
        <div className="gallery-master-container">
            <div className="head-picture-container">
                {/* <img className="head-image" src={house} alt="house" /> */}
                <HeadCarousel />
            </div>
            <div className="gallery-container">
                <div className="grid-item">
                    <div>
                        <h2>EXTERIOR</h2>
                    </div>
                    <div>
                        <ExteriorCarousel />
                    </div>


                </div>
                <div className="grid-item">
                    <div>
                        <h2>KITCHEN</h2>
                    </div>
                    <div>
                        <KitchenCarousel />
                    </div>


                </div>
                <div className="grid-item">
                <div>
                        <h2>BEDROOM</h2>

                    </div>
                    <div>
                        <BedroomCarousel />
                    </div>
                    

                </div>
                <div className="grid-item">
                <div>
                        <h2>BATHROOM</h2>
                    </div>
                    <div>
                        <BathroomCarousel />
                    </div>
                   

                </div>
                <div className="grid-item">
                <div>
                        <h2>LIVING</h2>
                    </div>
                    <div>
                        <LivingCarousel />
                    </div>
                   

                </div>
                <div className="grid-item">
                <div>
                        <h2>OUTDOOR</h2>
                    </div>
                    <div>
                        <OutdoorCarousel />
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