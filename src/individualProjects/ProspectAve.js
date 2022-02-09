import { useEffect, useState } from 'react';

import { Progress } from 'semantic-ui-react';
import "react-image-gallery/styles/css/image-gallery.css";
import { Icon } from 'semantic-ui-react'
import Button from '@material-ui/core/Button';

import prospect from '../prospect/demolition.jpg';
import prospectMap from '../prospect/prospectMap.png';

function ProspectAve({ setUnit, loading, load }) {

    const [progressIcon] = useState('calendar alternate outline');
    const [buttonIcon] = useState('mars');

    return (
        <>
            <div className="project-title-div">
                <h1>PROSPECT AVE</h1>
            </div>
            <div className="project-div">

                <div className="collage-div">
                    {
                        loading === true ? <div>
                            <img className="project-images" src={load}></img>
                        </div>
                            : <img className="project-images" src={prospect}></img>

                    }
                </div>

                <a href="https://www.google.com/maps/place/1117+Prospect+Ave,+Austin,+TX+78702/@30.2744928,-97.7535402,13z/data=!4m5!3m4!1s0x8644b5c7d508c813:0x4f40d1fe094e4a59!8m2!3d30.2660746!4d-97.7173787" target="_blank">
                    <div className="bounce-div">
                        {
                            loading === true ? <div className="bounce">
                                <img className="project-img3" src={load}></img>
                            </div>
                                : <img src={prospectMap} className="project-img3"></img>

                        }
                    </div>
                </a>


                <div className="p-info-div">
                    <h3>{<Icon name='home' size='large' />} UNIT A</h3>
                    <h3>{<Icon name='angle right' size='large' />}$ TBD</h3>

                    <div className="info-buttons-div">
                        <Button variant="contained"
                            onClick={() => setUnit("ProspectAve")} color="primary">
                            MORE INFO & FLOOR PLANS {<Icon name={buttonIcon} size='large' />}
                        </Button>

                    </div>

                </div>
            </div>
            <div className="progress-div">
                <h3>{<Icon name={progressIcon} size='large' />} COMPLETION: SEPTEMBER 2022</h3>
                <Progress percent="10" indicating />
            </div>

        </>
    )
}

export default ProspectAve;