import { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Icon } from 'semantic-ui-react'
import { Progress } from 'semantic-ui-react';
import "react-image-gallery/styles/css/image-gallery.css";

import BuncheCarousel from '../components/BuncheCarousel';
import buncheMap from '../bunche/buncheMap.png';

function Bunche({setUnit, loading, load }) {

    const [progressIcon] = useState('calendar alternate outline');
    const [buttonIcon] = useState('mars');

    return (
        <>
            <div className="project-title-div">
                <h1>1729 BUNCHE RD</h1>
            </div>
            <div className="project-div">

                <div className="collage-div">
                    {
                        loading === true ? 
                            <img className="project-images9" src={load}></img>
                        
                            : <BuncheCarousel />

                    }
                </div>

                <a href="https://www.google.com/maps/place/1729+Bunche+Rd,+Austin,+TX+78721/@30.2719212,-97.7625193,12z/data=!4m5!3m4!1s0x8644b63fe2ce4237:0x88ff16549124f698!8m2!3d30.2805335!4d-97.6764097" target="_blank">
                    <div className="bounce-div">
                        {
                            loading === true ? 
                                <img className="project-img3" src={load}></img>
                            
                                : <img src={buncheMap} className="project-img3"></img>

                        }
                    </div>
                </a>


                <div className="p-info-div">
                    <h5>{<Icon name='home' size='large' />} UNIT A</h5>
                    <h5>{<Icon name='angle right' size='large' />}UNDER CONTRACT</h5>


                    <div className="info-buttons-div">
                        <Button variant="contained"
                            onClick={() => setUnit("BuncheA")} color="primary">
                            MORE INFO & FLOOR PLANS {<Icon name={buttonIcon} size='large' />}
                        </Button>

                    </div>


                    <h5> {<Icon name='home' size='large' />} UNIT B</h5>
                    <h5>{<Icon name='angle right' size='large' />}UNDER CONTRACT</h5>


                    <div className="info-buttons-div">
                        <Button variant="contained"
                            onClick={() => setUnit("BuncheB")} color="primary">
                            MORE INFO & FLOOR PLANS {<Icon name={buttonIcon} size='large' />}
                        </Button>

                    </div>
                </div>
            </div>



            <div className="progress-div">
                <h5>{<Icon name={progressIcon} size='large' />} COMPLETION: MARCH 2022</h5>
                <Progress percent="90" indicating />
            </div>

        </>
    )
}

export default Bunche;