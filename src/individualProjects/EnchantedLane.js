import { useEffect, useState } from 'react';

import { Progress } from 'semantic-ui-react';
import "react-image-gallery/styles/css/image-gallery.css";
import { Icon } from 'semantic-ui-react'

import green from '../gifs/green.png';
import enchantedMap from '../enchanted/enchantedMap.png';

function EnchantedLane({ loading, load }) {

    const [progressIcon] = useState('calendar alternate outline');

    return (
        <>
            <div className="project-title-div">
                <h1>ENCHATNED LANE</h1>
            </div>
            <div className="project-div">

                <div className="collage-div">
                    {
                        loading === true ? 
                            <img className="project-images9" src={load}></img>
                       
                            : <img className="project-images" src={green}></img>

                    }
                </div>

                <a href="https://www.google.com/maps/place/4908+Enchanted+Ln,+Austin,+TX+78745/@30.2477067,-97.8079698,12.16z/data=!4m5!3m4!1s0x865b4b4953dc55c7:0x2c085f210c61418e!8m2!3d30.2217544!4d-97.7910217" target="_blank">
                    <div className="bounce-div">
                        {
                            loading === true ? 
                                <img className="project-img4" src={load}></img>
                            
                                : <img src={enchantedMap} className="project-img3"></img>

                        }
                    </div>
                </a>


                <div className="p-info-div">
                    <h5>{<Icon name='home' size='large' />} UNIT A</h5>
                    <h5>{<Icon name='angle right' size='large' />}Plans in Progress</h5>
                </div>
            </div>
            <div className="progress-div">
                <h5>{<Icon name={progressIcon} size='large' />} COMPLETION: AUGUST 2022</h5>
                <Progress percent="5" indicating />
            </div>

        </>
    )
}

export default EnchantedLane;