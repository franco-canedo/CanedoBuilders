import './2102A.css';
import { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';


import RuthRendering from '../Ruth/RuthRendering.jpg';
import Arendering from '../2509E9/E9Arendering.jpeg';

import green from '../gifs/green.png';



import { Icon } from 'semantic-ui-react'


function E9A({ handleUnitSelect }) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
           
                
                <h1>2509 E 9TH ST Unit A</h1>
                
               {/* <div className="back-button">


                <Button variant="contained" color="primary"
                onClick={() => handleUnitSelect("normal")}
                >BACK</Button>
                </div> */}
            

            <div>
                <div className="head-div">
                    <img className="head-imager-unit-out" src={Arendering}></img>
                </div>
                <div className="unit-info-div-cont">
                    <div className="info-item">
                        <h2>1668 SF<Icon name='arrows alternate horizontal' size='large' /></h2>
                    </div>
                    <div className="info-item">
                        <h2>4 {<Icon name='bed' size='large' />}</h2>
                    </div>
                    <div className="info-item">
                        <h2>4 {'     '} {<Icon name='bath' size='large' />}</h2>
                    </div>
                    
                </div>
                
            </div>
        </>
    )



}

export default E9A;