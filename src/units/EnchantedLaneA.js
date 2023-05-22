import './2102A.css';
import { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';

import floor1 from '../enchanted/cannyonwood_backyard.png';
import floor2 from '../enchanted/secondFloor.png';
import layout from '../enchanted/cannyonwood_porch.png';
import enchantedRendering from '../enchanted/cannyonwood_render.png';

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
                    <img className="head-imager-unit-out" src={enchantedRendering}></img>
                </div>
                <div className="unit-info-div-cont">
                    <div className="info-item">
                        <h2>2160 SF<Icon name='arrows alternate horizontal' size='large' /></h2>
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
                        <h2 className="floorplan-titles"></h2>
                        <img className="floorPlan-image" src={floor1}></img>
                    </div>

                    <div className="floorplan-item">
                        <h2 className="floorplan-titles"></h2>
                        <img className="floorPlan-image" src={layout}></img>
                    </div>
                </div>
            </div>
        </>
    )



}

export default EnchantedLaneA;