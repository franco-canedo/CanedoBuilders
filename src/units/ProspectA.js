import './2102A.css';
import { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';

import unitA from '../prospect/demolition.jpg';
import floor1 from '../prospect/floor1.png';
import floor2 from '../prospect/floor2.png';
import floor3 from '../prospect/floor3.png';
import layout from '../prospect/sitePlan.png';

import prospectRender from '../prospect/prospectRender.jpg';



import { Icon } from 'semantic-ui-react'


function ProspectA({ handleUnitSelect }) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
           
                
                <h1>PROSPECT AVE</h1>
                
               {/* <div className="back-button">


                <Button variant="contained" color="primary"
                onClick={() => handleUnitSelect("normal")}
                >BACK</Button>
                </div> */}
            

            <div>
                <div className="head-div">
                    <img className="head-imager-unit-out" src={prospectRender}></img>
                </div>
                <div className="unit-info-div-cont">
                    <div className="info-item">
                        <h2>2248<Icon name='arrows alternate horizontal' size='large' /></h2>
                    </div>
                    <div className="info-item">
                        <h2>3 {<Icon name='bed' size='large' />}</h2>
                    </div>
                    <div className="info-item">
                        <h2>3 {'     '} {<Icon name='bath' size='large' />}</h2>
                    </div>
                    <div className="info-item">
                        <h2>POOL {'     '} {<Icon name='thumbtack' size='large' />}</h2>
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

export default ProspectA;