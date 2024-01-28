import { useEffect, useState } from 'react';



import { Progress } from 'semantic-ui-react';
import "react-image-gallery/styles/css/image-gallery.css";
import { Icon } from 'semantic-ui-react';
import Button from '@material-ui/core/Button';

import green from '../gifs/green.png';
import RuthMap from '../Ruth/RuthMap.png';
import RuthRendering from '../Ruth/RuthRendering.jpg';

import { Link, Outlet } from "react-router-dom";

function Ruth({ loading, load }) {

    const [progressIcon] = useState('calendar alternate outline');
    const [buttonIcon] = useState('mars');

    return (
        <>
            <div className="project-title-div">
                <h1>1001 RUTH AVE</h1>
            </div>
            <div className="project-div">

                <div className="collage-div">
                    {
                        loading === true ?
                            <img className="project-images9" src={load}></img>

                            :
                            <div className="coming-soon">
                                {/* <p className="rendering-paragraph">RENDERING COMING SOON</p> */}
                                <img className="project-images" src={RuthRendering}></img>
                            </div>

                    }
                </div>

                <a href="https://www.google.com/maps/place/1001+Ruth+Ave,+Austin,+TX+78757/@30.3057252,-97.8006983,12.3z/data=!4m6!3m5!1s0x8644ca488d316f37:0x1182f1ff2b971732!8m2!3d30.3357613!4d-97.7232334!16s%2Fg%2F11c2hwjp4l?entry=ttu" target="_blank">
                    <div className="bounce-div">
                        {
                            loading === true ?
                                <img className="project-img4" src={load}></img>

                                : <img src={RuthMap} className="project-img3"></img>

                        }
                    </div>
                </a>


                <div className="p-info-div">
                    <h5>{<Icon name='home' size='large' />} UNIT A</h5>
                    {/* <h5>{<Icon name='angle right' size='large' />}PLANS IN PROGRESS</h5> */}
                    <div className="info-buttons-div">
                        <Link to="/RuthA" style={{ color: 'white' }}>
                            <Button variant="contained"
                                color="primary">
                                CLICK FOR DETAILS {<Icon name={buttonIcon} size='large' />}
                            </Button>
                        </Link>
                    </div>
                    <h5>{<Icon name='home' size='large' />} UNIT B</h5>
                    {/* <h5>{<Icon name='angle right' size='large' />}PLANS IN PROGRESS</h5> */}
                    <div className="info-buttons-div">
                        <Link to="/RuthB" style={{ color: 'white' }}>
                            <Button variant="contained"
                                color="primary">
                                CLICK FOR DETAILS {<Icon name={buttonIcon} size='large' />}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="progress-div">
                <h5>{<Icon name={progressIcon} size='large' />} COMPLETION: JANUARY 2024</h5>
                <Progress percent="100" indicating />
            </div>

        </>
    )
}

export default Ruth;