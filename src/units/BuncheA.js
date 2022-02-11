import './2102A.css';
import { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';

import frontA from '../bunche/1-1.jpg';
import BuncheLot from '../bunche/BuncheLot.png';
import Alevel1 from '../bunche/Alevel1.png';
import Alevel2 from '../bunche/Alevel2.png';
import Alevel3 from '../bunche/Alevel3.png';

import { Icon } from 'semantic-ui-react'

function BuncheA({ handleUnitSelect }) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <h1>1729 BUNCHE RD UNIT A</h1>
            {/* <Button variant="contained" color="primary"
                onClick={() => handleUnitSelect("normal")}
            >BACK</Button> */}
            <div>
                <div className="head-div">
                    <img className="head-imager-unit" src={frontA}></img>
                </div>
                <div className="unit-info-div-cont">

                <div className="info-item">
                        <h2>2152 SQFT <Icon name='arrows alternate horizontal' size='large' /></h2>
                    </div>
                    <div className="info-item">
                        <h2>3 {<Icon name='bed' size='large' />}</h2>
                    </div>
                    <div className="info-item">
                        <h2>3 {'     '} {<Icon name='bath' size='large' />}</h2>
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