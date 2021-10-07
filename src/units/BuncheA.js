import './2102A.css';
import { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';

import frontA from '../bunche/frontUnitA.png';
import BuncheLot from '../bunche/BuncheLot.png';
import bunche1 from '../bunche/FirstFloorPlansBunche.png';
import bunche2 from '../bunche/SecondFloorPlansBunche.png';
import bunche3 from '../bunche/ThirdFloorPlanBunche.png';

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
                    <img className="head-imager" src={frontA}></img>
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
                        <img className="floorPlan-image" src={bunche1}></img>
                    </div>
                    <div className="floorplan-item">
                        <h2 className="floorplan-titles">2ND FLOOR</h2>
                        <img className="floorPlan-image" src={bunche2}></img>
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