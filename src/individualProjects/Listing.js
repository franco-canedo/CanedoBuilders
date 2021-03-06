import { useState } from 'react';

import { Progress } from 'semantic-ui-react';
import "react-image-gallery/styles/css/image-gallery.css";
import { Icon } from 'semantic-ui-react'
import Button from '@material-ui/core/Button';

const obj = {
    address,

}



import { Link, Outlet } from "react-router-dom";
import { withStyles } from '@material-ui/core';

function ProspectAve({  }) {

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
                        loading === true ?
                            <img className="project-images9" src={load}></img>

                            : <div>
                                <p className="rendering-paragraph">RENDERING COMING SOON</p>
                                <img className="project-images-p" src={green}></img>
                            </div>
                    }
                </div>

                <a href="https://www.google.com/maps/place/1117+Prospect+Ave,+Austin,+TX+78702/@30.2744928,-97.7535402,13z/data=!4m5!3m4!1s0x8644b5c7d508c813:0x4f40d1fe094e4a59!8m2!3d30.2660746!4d-97.7173787" target="_blank">
                    <div className="bounce-div">
                        {
                            loading === true ?
                                <img className="project-img4" src={load}></img>


                                : <img src={prospectMap} className="project-img3"></img>

                        }
                    </div>
                </a>


                <div className="p-info-div">
                    <h5>{<Icon name='home' size='large' />} SINGLE FAMILY HOME</h5>
                    {/* <h5>{<Icon name='angle right' size='large' />}$ TBD</h5> */}

                    <div className="info-buttons-div">
                        <Link to="/prospect" style={{ color: 'white' }}>
                            <Button variant="contained"
                                onClick={() => setUnit("ProspectAve")} color="primary">
                                MORE INFO & FLOOR PLANS {<Icon name={buttonIcon} size='large' />}
                            </Button>
                        </Link>
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

export default ProspectAve;