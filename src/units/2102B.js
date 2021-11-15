import './2102A.css';
import { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';

import e21Layout from '../East21/site.png';
import floorPlansB from '../East21/unitB.png';
import unitB from '../East21/renderingUnitB.jpg';

import { Icon } from 'semantic-ui-react'


function E21UnitB({ handleUnitSelect }) {

    useEffect(() => {
        window.scrollTo(0, 100);
    }, [])

    return (
        <>
            <h1>2102 E 21 ST UNIT B</h1>
            {/* <Button variant="contained" color="primary"
                onClick={() => handleUnitSelect("normal")}
            >BACK</Button> */}
            <div>
                <div className="head-div">
                    <img className="head-imager-unit" src={unitB}></img>
                </div>
                <div className="unit-info-div-cont">

                    <div className="info-item">
                        <h2>1100 SQFT <Icon name='arrows alternate horizontal' size='large' /></h2>
                    </div>
                    <div className="info-item">
                        <h2>2 {<Icon name='bed' size='large' />}</h2>
                    </div>
                    <div className="info-item">
                        <h2>2.5 {'     '} {<Icon name='bath' size='large' />}</h2>
                    </div>


                </div>
                <div className="floorplans-div">
                    <div className="floorplan-item">
                        <h2 className="floorplan-titles">1ST & 2ND FLOOR</h2>
                        <img className="floorPlan-image" src={floorPlansB}></img>
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

export default E21UnitB;