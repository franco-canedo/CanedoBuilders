import { useEffect, useState } from 'react';



import { Progress } from 'semantic-ui-react';
import "react-image-gallery/styles/css/image-gallery.css";
import { Icon } from 'semantic-ui-react';
import Button from '@material-ui/core/Button';

import green from '../gifs/green.png';
import E9Map from '../Ruth/E9Map.png';
import RuthRendering from '../Ruth/RuthRendering.jpg';

import { Link, Outlet } from "react-router-dom";

function E9({ loading, load }) {

    const [progressIcon] = useState('calendar alternate outline');
    const [buttonIcon] = useState('mars');

    return (
        <>
            <div className="project-title-div">
                <h1>2508 E 9TH ST</h1>
            </div>
            <div className="project-div">

                <div className="collage-div">
                    {
                        loading === true ?
                            <img className="project-images9" src={load}></img>

                            :
                            <div className="coming-soon">
                                {/* <p className="rendering-paragraph">RENDERING COMING SOON</p> */}
                                <img className="project-images" src={green}></img>
                            </div>

                    }
                </div>

                <a href="https://www.google.com/maps/place/2508+E+9th+St,+Austin,+TX+78702/@30.2742407,-97.8365218,12.27z/data=!4m6!3m5!1s0x8644b5cf4ef57d1d:0x5f3e58a041583a54!8m2!3d30.2652371!4d-97.7141122!16s%2Fg%2F11c14fdgcr?entry=ttu`" target="_blank">
                    <div className="bounce-div">
                        {
                            loading === true ?
                                <img className="project-img4" src={load}></img>

                                : <img src={E9Map} className="project-img3"></img>

                        }
                    </div>
                </a>


                <div className="p-info-div">
                    <h5>{<Icon name='home' size='large' />} UNIT B</h5>
                    {/* <h5>{<Icon name='angle right' size='large' />}PLANS IN PROGRESS</h5> */}
                    <div className="info-buttons-div">
                        <Link to="/E9B" style={{ color: 'white' }}>
                            <Button variant="contained"
                                color="primary">
                                CLICK FOR DETAILS {<Icon name={buttonIcon} size='large' />}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="progress-div">
                <h5>{<Icon name={progressIcon} size='large' />} COMPLETION: AUGUST 2023</h5>
                <Progress percent="50" indicating />
            </div>

        </>
    )
}

export default E9;