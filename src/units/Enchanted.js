import './2102A.css';
import { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';


import floor1 from '../brentwood/unitAone.png';
import floor2 from '../brentwood/unitA2.png';
import floor3 from '../brentwood/unitA3.png';
import layout from '../brentwood/BrentLayout.png';
import im1 from '../canyon/IMG_8636.JPG';
import im2 from '../canyon/IMG_8637.JPG';
import im3 from '../canyon/IMG_8638.JPG';
import im4 from '../canyon/IMG_8639.JPG';
import im5 from '../canyon/IMG_8640.JPG';
import im6 from '../canyon/IMG_8641.JPG';
import im7 from '../canyon/IMG_8642.JPG';
import im8 from '../canyon/IMG_8643.JPG';


import prospectRender from '../prospect/prospectRender.jpg';



import { Icon } from 'semantic-ui-react'


function EnchantedA({ handleUnitSelect }) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
           
                
                <h1>203 N CANNYONWOOD</h1>
                
               {/* <div className="back-button">


                <Button variant="contained" color="primary"
                onClick={() => handleUnitSelect("normal")}
                >BACK</Button>
                </div> */}
            

            <div>
                <div className="head-div">
                    <img className="head-imager-unit-out" src={layout}></img>
                </div>
                <div className="unit-info-div-cont">
                    <div className="info-item">
                        <h2>2480<Icon name='arrows alternate horizontal' size='large' /></h2>
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
                        <h2 className="floorplan-titles">1ST FLOOR</h2>
                        <img className="floorPlan-image" src={floor1}></img>
                    </div>
                    
                    <div className="floorplan-item">
                        <h2 className="floorplan-titles">2ND FLOOR</h2>
                        <img className="floorPlan-image" src={floor2}></img>
                    </div>
                    <div className="floorplan-item">
                        <h2 className="floorplan-titles">3RD FLOOR</h2>
                        <img className="floorPlan-image" src={floor3}></img>
                    </div>

                    <div className="floorplan-item">
                        <h2 className="floorplan-titles">LAYOUT</h2>
                        <img className="floorPlan-image" src={layout}></img>
                    </div>
                </div>
            </div>
        </>
    )



}

export default EnchantedA;