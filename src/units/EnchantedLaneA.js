import './2102A.css';
import { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';

import floor1 from '../enchanted/cannyonwood_backyard.png';
import floor2 from '../enchanted/secondFloor.png';
import layout from '../enchanted/cannyonwood_porch.png';
import enchantedRendering from '../enchanted/cannyonwood_render.png';
import im1 from '../canyon/IMG_8636.JPG';
import im2 from '../canyon/IMG_8637.JPG';
import im3 from '../canyon/IMG_8638.JPG';
import im4 from '../canyon/IMG_8639.JPG';
import im5 from '../canyon/IMG_8640.JPG';
import im6 from '../canyon/IMG_8641.JPG';
import im7 from '../canyon/IMG_8642.JPG';
import im8 from '../canyon/IMG_8643.JPG';
import im10 from '../canyon/IMG_8644.JPG';
import im11 from '../canyon/IMG_8645.JPG';
import im12 from '../canyon/IMG_8646.JPG';
import im13 from '../canyon/IMG_8647.JPG';
import im14 from '../canyon/IMG_8648.JPG';
import im15 from '../canyon/IMG_8649.JPG';
import im16 from '../canyon/IMG_8650.JPG';
import im17 from '../canyon/IMG_8653.JPG';

import green from '../gifs/green.png';



import prospectRender from '../prospect/prospectRender.jpg';



import { Icon } from 'semantic-ui-react'


function EnchantedLaneA({ handleUnitSelect }) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
           
                
                <h1>203 N CANYONWOOD DR</h1>
                
               {/* <div className="back-button">


                <Button variant="contained" color="primary"
                onClick={() => handleUnitSelect("normal")}
                >BACK</Button>
                </div> */}
            

            <div>
                <div className="head-div">
                    <img className="head-imager-unit-out" src={im1}></img>
                </div>
                <div className="unit-info-div-cont">
                    <div className="info-item">
                        <h2>2480 SF<Icon name='arrows alternate horizontal' size='large' /></h2>
                    </div>
                    <div className="info-item">
                        <h2>3 {<Icon name='bed' size='large' />}</h2>
                    </div>
                    <div className="info-item">
                        <h2>3.5 {'     '} {<Icon name='bath' size='large' />}</h2>
                    </div>
                    
                </div>
                <div className="floorplans-div">
                    <div className="floorplan-item">
                        <h2 className="floorplan-titles"></h2>
                        <img className="floorPlan-image" src={im5}></img>
                    </div>

                    <div className="floorplan-item">
                        <h2 className="floorplan-titles"></h2>
                        <img className="floorPlan-image" src={im2}></img>
                    </div>
                    <div className="floorplan-item">
                        <h2 className="floorplan-titles"></h2>
                        <img className="floorPlan-image" src={im3}></img>
                    </div>
                    <div className="floorplan-item">
                        <h2 className="floorplan-titles"></h2>
                        <img className="floorPlan-image" src={im8}></img>
                    </div>
                   
                  
                    <div className="floorplan-item">
                        <h2 className="floorplan-titles"></h2>
                        <img className="floorPlan-image" src={im6}></img>
                    </div>
                    <div className="floorplan-item">
                        <h2 className="floorplan-titles"></h2>
                        <img className="floorPlan-image" src={im7}></img>
                    </div>
                    <div className="floorplan-item">
                        <h2 className="floorplan-titles"></h2>
                        <img className="floorPlan-image" src={im10}></img>
                    </div>
                    <div className="floorplan-item">
                        <h2 className="floorplan-titles"></h2>
                        <img className="floorPlan-image" src={im11}></img>
                    </div>
                    <div className="floorplan-item">
                        <h2 className="floorplan-titles"></h2>
                        <img className="floorPlan-image" src={im12}></img>
                    </div>
                    <div className="floorplan-item">
                        <h2 className="floorplan-titles"></h2>
                        <img className="floorPlan-image" src={im13}></img>
                    </div>
                    <div className="floorplan-item">
                        <h2 className="floorplan-titles"></h2>
                        <img className="floorPlan-image" src={im14}></img>
                    </div>
                    <div className="floorplan-item">
                        <h2 className="floorplan-titles"></h2>
                        <img className="floorPlan-image" src={im15}></img>
                    </div>
                    <div className="floorplan-item">
                        <h2 className="floorplan-titles"></h2>
                        <img className="floorPlan-image" src={im16}></img>
                    </div>
                    <div className="floorplan-item">
                        <h2 className="floorplan-titles"></h2>
                        <img className="floorPlan-image" src={im17}></img>
                    </div>
                </div>
            </div>
        </>
    )



}

export default EnchantedLaneA;