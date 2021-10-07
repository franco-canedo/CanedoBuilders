import './2102A.css';
import { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';

import frontA from '../bunche/frontUnitA.png';
import BuncheLot from '../bunche/BuncheLot.png';
import Alevel1 from '../bunche/Alevel1.png';
import Alevel2 from '../bunche/Alevel2.png';
import Alevel3 from '../bunche/Alevel3.png';


function BuncheA({ handleUnitSelect }) {

    useEffect(() => {
        window.scrollTo(0, 100);
    }, [])

    return (
        <>
            <h1>1729 BUNCHE RD UNIT A</h1>
            {/* <Button variant="contained" color="primary"
                onClick={() => handleUnitSelect("normal")}
            >BACK</Button> */}
            <div>
                <div className="head-div">
                    <img className="non-render" src={frontA}></img>
                </div>
                <div className="unit-info-div-cont">
                    <div className="info-item">
                        <h3>2152 SQFT</h3>
                    </div>
                    <div className="info-item">
                        <h3>3 BEDS</h3>
                    </div>
                    <div className="info-item">
                        <h3>3 BATHS</h3>
                    </div>
                </div>
                <div className="floorplans-div">
                    <div className="floorplan-item">
                        <h2 className="floorplan-titles">1ST FLOOR</h2>
                        <img className="floorPlan-image" src={Alevel1}></img>
                    </div>
                    <div className="floorplan-item">
                        <h2 className="floorplan-titles">2ND FLOOR</h2>
                        <img className="floorPlan-image" src={Alevel2}></img>
                    </div>

                    <div className="floorplan-item">
                        <h2 className="floorplan-titles">3RD FLOOR</h2>
                        <img className="floorPlan-image" src={Alevel3}></img>
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

export default BuncheA;