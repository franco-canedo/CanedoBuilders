import './2102A.css';
import { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';

import e21Layout from '../East21/site.png';
import floorPlans from '../East21/unitA.png';
import attic from '../East21/attic2.png';
import unitA from '../East21/renderingUnitA.jpg';
import casita from '../East21/casita.png';
import floorAlone1 from '../East21/floorAlone1.png';
import floorAlone2 from '../East21/floorAlone2.png';

import { Icon } from 'semantic-ui-react'


function E21UnitA({ handleUnitSelect }) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
           
                
                <h1>2102 E 21 ST UNIT A</h1>
                
               {/* <div className="back-button">


                <Button variant="contained" color="primary"
                onClick={() => handleUnitSelect("normal")}
                >BACK</Button>
                </div> */}
            

            <div>
                <div className="head-div">
                    <img className="head-imager-unit" src={unitA}></img>
                </div>
                <div className="unit-info-div-cont">
                    <div className="info-item">
                        <h2>2540 SQFT <Icon name='arrows alternate horizontal' size='large' /></h2>
                    </div>
                    <div className="info-item">
                        <h2>4 {<Icon name='bed' size='large' />}</h2>
                    </div>
                    <div className="info-item">
                        <h2>3.5 {'     '} {<Icon name='bath' size='large' />}</h2>
                    </div>
                </div>
                <div className="floorplans-div">
                    <div className="floorplan-item">
                        <h2 className="floorplan-titles">1ST & 2ND FLOOR</h2>
                        <img className="floorPlan-image" src={floorPlans}></img>
                    </div>
                    
                    <div className="floorplan-item">
                        <h2 className="floorplan-titles">3RD FLOOR</h2>
                        <img className="floorPlan-image" src={attic}></img>
                    </div>
                    <div className="floorplan-item">
                        <h2 className="floorplan-titles">ACCESSORY CASITA</h2>
                        <img className="floorPlan-image" src={casita}></img>
                    </div>

                    <div className="floorplan-item">
                        <h2 className="floorplan-titles">LAYOUT</h2>
                        <img className="floorPlan-image" src={e21Layout}></img>
                    </div>
                </div>
            </div>
        </>
    )



}

export default E21UnitA;