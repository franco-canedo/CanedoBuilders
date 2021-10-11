import './2102A.css';
import { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';

import BuncheLot from '../bunche/BuncheLot.png';
import Blevel1 from '../bunche/Blevel1.png';
import Blevel2 from '../bunche/Blevel2.png';
import frontB from '../bunche/7.jpg';


function BuncheB({ handleUnitSelect }) {

    useEffect(() => {
        window.scrollTo(0, 100);
    }, [])

    return (
        <>
            <h1>1729 BUNCHE RD UNIT B</h1>
            {/* <Button variant="contained" color="primary"
                onClick={() => handleUnitSelect("normal")}
            >BACK</Button> */}
            <div>
                <div className="head-div">
                    <img className="head-imager" src={frontB}></img>
                </div>
                <div className="unit-info-div-cont">
                    <div className="info-item">
                        <h3>916 SQFT</h3>
                    </div>
                    <div className="info-item">
                        <h3>2 BEDS</h3>
                    </div>
                    <div className="info-item">
                        <h3>2.5 BATHS</h3>
                    </div>
                </div>
                <div className="floorplans-div">
                    <div className="floorplan-item">
                        <h2 className="floorplan-titles">1ST FLOOR</h2>
                        <img className="floorPlan-image" src={Blevel1}></img>
                    </div>
                    <div className="floorplan-item">
                        <h2 className="floorplan-titles">2ND FLOOR</h2>
                        <img className="floorPlan-image" src={Blevel2}></img>
                    </div>

                    <div className="floorplan-item">
                        <h2 className="floorplan-titles">LAYOUT</h2>
                        <img className="floorPlan-image" src={BuncheLot}></img>
                    </div>
                </div>
            </div>
        </>
    )



}

export default BuncheB;