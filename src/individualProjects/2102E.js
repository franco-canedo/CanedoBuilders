import { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Icon } from 'semantic-ui-react'
import { Progress } from 'semantic-ui-react';
import "react-image-gallery/styles/css/image-gallery.css";

import E21Carousel from '../components/East21Carousel';
import e21map from '../East21/e21map.png';

function East({setUnit, loading, load }) {

    const [progressIcon] = useState('calendar alternate outline');
    const [buttonIcon] = useState('mars');

    return (
        <>
            <div className="project-title-div">
                <h1>2102 EAST 21 ST</h1>
            </div>
            <div className="project-div">

                <div className="collage-div">
                    {
                        loading === true ? 
                            <img className="project-images9" src={load}></img>
                        
                            : <E21Carousel />

                    }
                </div>

                <a href="https://www.google.com/maps/place/2102+E+21st+St,+Austin,+TX+78722/@30.2894096,-97.7606718,12.39z/data=!4m5!3m4!1s0x8644b5eb504feb99:0xcac99d27fe753df9!8m2!3d30.2823913!4d-97.7194151" target="_blank">
                    <div className="bounce-div">
                        {
                            loading === true ? 
                                <img className="project-img3" src={load}></img>
                            
                                : <img src={e21map} className="project-img3"></img>

                        }
                    </div>
                </a>


                <div className="p-info-div">
                    <h5>{<Icon name='home' size='large' />} UNIT A</h5>
                    <h5>{<Icon name='angle right' size='large' />}UNDER CONTRACT</h5>


                    <div className="info-buttons-div">
                        <Button variant="contained"
                            onClick={() => setUnit("E21UnitA")} color="primary">
                            MORE INFO & FLOOR PLANS {<Icon name={buttonIcon} size='large' />}
                        </Button>

                    </div>


                    <h5> {<Icon name='home' size='large' />} UNIT B</h5>
                    <h5>{<Icon name='angle right' size='large' />}UNDER CONTRACT</h5>


                    <div className="info-buttons-div">
                        <Button variant="contained"
                            onClick={() => setUnit("E21UnitB")} color="primary">
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

export default East;