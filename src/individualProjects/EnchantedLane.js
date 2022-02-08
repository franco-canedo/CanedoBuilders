import { useEffect, useState } from 'react';

import { Progress } from 'semantic-ui-react';
import "react-image-gallery/styles/css/image-gallery.css";
import { Icon } from 'semantic-ui-react'

import prospect from '../prospect/demolition.jpg';
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
                        loading === true ? <div>
                            <img className="project-img2" src={load}></img>
                        </div>
                            : <img className="project-images" src={prospect}></img>

                    }
                </div>

                <a href="https://www.google.com/maps/place/4908+Enchanted+Ln,+Austin,+TX+78745/@30.2477067,-97.8079698,12.16z/data=!4m5!3m4!1s0x865b4b4953dc55c7:0x2c085f210c61418e!8m2!3d30.2217544!4d-97.7910217" target="_blank">
                    <div className="bounce-div">
                        {
                            loading === true ? <div className="bounce">
                                <img className="project-img3" src={load}></img>
                            </div>
                                : <img src={enchantedMap} className="project-img3"></img>

                        }
                    </div>
                </a>


                <div className="p-info-div">
                    <h3>{<Icon name='home' size='large' />} UNIT A</h3>
                    <h3>{<Icon name='angle right' size='large' />}</h3>
                </div>
            </div>
            <div className="progress-div">
                <h3>{<Icon name={progressIcon} size='large' />} COMPLETION: SEPTEMBER 2022</h3>
                <Progress percent="10" indicating />
            </div>

        </>
    )
}

export default EnchantedLane;