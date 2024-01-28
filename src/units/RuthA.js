import './2102A.css';
import { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';

import floor1 from '../W51/unitAone.png';
import floor2 from '../W51/unitAtwo.png';
import floor3 from '../W51/unitAthree.png';
import layout from '../W51/layout.png';
import RuthRendering from '../Ruth/RuthRendering.jpg';

import green from '../gifs/green.png';



import prospectRender from '../prospect/prospectRender.jpg';



import { Icon } from 'semantic-ui-react'


function RuthA({ handleUnitSelect }) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
           
                
                <h1>1001 RUTH UNIT A</h1>
                
               {/* <div className="back-button">


                <Button variant="contained" color="primary"
                onClick={() => handleUnitSelect("normal")}
                >BACK</Button>
                </div> */}
            

            <div>
                <div className="head-div">
                    <img className="head-imager-unit-out" src={RuthRendering}></img>
                </div>
                <div className="unit-info-div-cont">
                    <div className="info-item">
                        <h2>2458 SF<Icon name='arrows alternate horizontal' size='large' /></h2>
                    </div>
                    <div className="info-item">
                        <h2>3 {<Icon name='bed' size='large' />}</h2>
                    </div>
                    <div className="info-item">
                        <h2>3 {'     '} {<Icon name='bath' size='large' />}</h2>
                    </div>
                    
                </div>
                
            </div>
        </>
    )



}

export default RuthA;