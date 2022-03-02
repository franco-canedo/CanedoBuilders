import { useEffect, useState } from 'react';

import { Progress } from 'semantic-ui-react';
import "react-image-gallery/styles/css/image-gallery.css";
import { Icon } from 'semantic-ui-react'
import Button from '@material-ui/core/Button';
import { Link, Outlet } from "react-router-dom";


import brentwoodMap from '../brentwood/brentwoodMap.png';

import green from '../gifs/green.png';

function BrentwoodSt({ setUnit, loading, load }) {

    const [progressIcon] = useState('calendar alternate outline');
    const [buttonIcon] = useState('mars');

    return (
        <>
            <div className="project-title-div">
                <h1>BRENTWOOD STREET</h1>
            </div>
            <div className="project-div">

                <div className="collage-div">
                    {
                        loading === true ?
                            <img className="project-images9" src={load}></img>

                            : <div className="coming-soon">
                                <p className="rendering-paragraph">RENDERING COMING SOON</p>
                                <img className="project-images-p" src={green}></img>
                            </div>
                    }
                </div>

                <a href="https://www.google.com/maps/place/605+Brentwood+St,+Austin,+TX+78752/@30.3083648,-97.7862583,12.61z/data=!4m5!3m4!1s0x8644ca38639a0af3:0x80517f5dae84e133!8m2!3d30.3320253!4d-97.7190332" target="_blank">
                    <div className="bounce-div">
                        {
                            loading === true ?
                                <img className="project-img4" src={load}></img>


                                : <img src={brentwoodMap} className="project-img3"></img>

                        }
                    </div>
                </a>


                <div className="p-info-div">
                    <h5>{<Icon name='home' size='large' />} UNIT A</h5>
                    {/* <h5>{<Icon name='angle right' size='large' />}$ TBD</h5> */}

                    <div className="info-buttons-div">
                        <Link to="/brentA" style={{ color: 'white' }}>
                            <Button variant="contained"
                                color="primary">
                                MORE INFO & FLOOR PLANS {<Icon name={buttonIcon} size='large' />}
                            </Button>
                        </Link>
                    </div>

                    <h5>{<Icon name='home' size='large' />} UNIT B</h5>
                    {/* <h5>{<Icon name='angle right' size='large' />}$ TBD</h5> */}

                    <div className="info-buttons-div">
                        <Link to="/brentB" style={{ color: 'white' }}>
                            <Button variant="contained"
                                color="primary">
                                MORE INFO & FLOOR PLANS {<Icon name={buttonIcon} size='large' />}
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
            <div className="progress-div">
                <h5>{<Icon name={progressIcon} size='large' />} COMPLETION: AUGUST 2022</h5>
                <Progress percent="5" indicating />
            </div>

        </>
    )
}

export default BrentwoodSt;