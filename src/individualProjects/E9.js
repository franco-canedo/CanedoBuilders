import { useEffect, useState } from 'react';



import { Progress } from 'semantic-ui-react';
import "react-image-gallery/styles/css/image-gallery.css";
import { Icon } from 'semantic-ui-react';
import Button from '@material-ui/core/Button';

import green from '../gifs/green.png';
import E9Map from '../Ruth/E9Map.png';
import RuthRendering from '../Ruth/RuthRendering.jpg';
import Arendering from '../2509E9/E9Arendering.jpeg';

import { Link, Outlet } from "react-router-dom";

function E9({ loading, load }) {

    const [progressIcon] = useState('calendar alternate outline');
    const [buttonIcon] = useState('mars');

    return (
        <>
            <div className="project-title-div">
                <h1>2509 E 9TH ST</h1>
            </div>
            <div className="project-div">

                <div className="collage-div">
                    {
                        loading === true ?
                            <img className="project-images9" src={load}></img>

                            :
                            <div className="coming-soon">
                                {/* <p className="rendering-paragraph">RENDERING COMING SOON</p> */}
                                <img className="project-images" src={Arendering}></img>
                            </div>

                    }
                </div>

                <a href="https://www.google.com/maps/place/2509+E+9th+St,+Austin,+TX+78702/@30.2649336,-97.7165174,17z/data=!3m1!4b1!4m6!3m5!1s0x8644b5cf48ec1717:0x812d443f4f9a41c8!8m2!3d30.2649336!4d-97.7139425!16s%2Fg%2F11cpg8fmzz?entry=ttu" target="_blank">
                    <div className="bounce-div">
                        {
                            loading === true ?
                                <img className="project-img4" src={load}></img>

                                : <img src={E9Map} className="project-img3"></img>

                        }
                    </div>
                </a>


                <div className="p-info-div">
                    <h5>{<Icon name='home' size='large' />} UNIT A</h5>
                    {/* <h5>{<Icon name='angle right' size='large' />}PLANS IN PROGRESS</h5> */}
                    <div className="info-buttons-div">
                        <Link to="/E9A" style={{ color: 'white' }}>
                            <Button variant="contained"
                                color="primary">
                                CLICK FOR DETAILS {<Icon name={buttonIcon} size='large' />}
                            </Button>
                        </Link>
                    </div>
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
                <h5>{<Icon name={progressIcon} size='large' />} COMPLETION: FEBRUARY 2024</h5>
                <Progress percent="90" indicating />
            </div>

        </>
    )
}

export default E9;