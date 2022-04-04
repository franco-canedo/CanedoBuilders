import { useEffect, useState } from 'react';

import { Progress } from 'semantic-ui-react';
import "react-image-gallery/styles/css/image-gallery.css";
import { Icon } from 'semantic-ui-react';
import Button from '@material-ui/core/Button';

import green from '../gifs/green.png';
import enchantedMap from '../enchanted/enchantedMap.png';

function EnchantedLane({ loading, load }) {

    const [progressIcon] = useState('calendar alternate outline');
    const [buttonIcon] = useState('mars');

    return (
        <>
            <div className="project-title-div">
                <h1>4908 ENCHANTED LANE</h1>
            </div>
            <div className="project-div">

                <div className="collage-div">
                    {
                        loading === true ? 
                            <img className="project-images9" src={load}></img>
                       
                            : 
                            <div className="coming-soon">
                                <p className="rendering-paragraph">RENDERING COMING SOON</p>
                            <img className="project-images-p" src={green}></img>
                            </div>

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
                    <h5>{<Icon name='home' size='large' />} SINGLE FAMILY HOME</h5>
                    {/* <h5>{<Icon name='angle right' size='large' />}PLANS IN PROGRESS</h5> */}
                    <div className="info-buttons-div">
                        <Button disabled variant="contained"
                             color="primary">
                            PLANS IN PROGRESS {<Icon name={buttonIcon} size='large' />}
                        </Button>
                    </div>
                </div>
            </div>
            <div className="progress-div">
                <h5>{<Icon name={progressIcon} size='large' />} COMPLETION: SEPTEMBER 2022</h5>
                <Progress percent="10" indicating />
            </div>

        </>
    )
}

export default EnchantedLane;