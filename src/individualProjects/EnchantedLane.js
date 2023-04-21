import { useEffect, useState } from 'react';



import { Progress } from 'semantic-ui-react';
import "react-image-gallery/styles/css/image-gallery.css";
import { Icon } from 'semantic-ui-react';
import Button from '@material-ui/core/Button';

import green from '../gifs/green.png';
import enchantedMap from '../enchanted/cannyonwood_map.png';
import enchantedRendering from '../enchanted/cannyonwood_render.png';

import { Link, Outlet } from "react-router-dom";

function EnchantedLane({ loading, load }) {

    const [progressIcon] = useState('calendar alternate outline');
    const [buttonIcon] = useState('mars');

    return (
        <>
            <div className="project-title-div">
                <h1>203 N CANYONWOOD DR</h1>
            </div>
            <div className="project-div">

                <div className="collage-div">
                    {
                        loading === true ?
                            <img className="project-images9" src={load}></img>

                            :
                            <div className="coming-soon">
                                {/* <p className="rendering-paragraph">RENDERING COMING SOON</p> */}
                                <img className="project-images" src={enchantedRendering}></img>
                            </div>

                    }
                </div>

                <a href="https://www.google.com/maps/place/203+Canyonwood+Dr,+Dripping+Springs,+TX+78620/@30.2401182,-98.1274129,10.55z/data=!4m6!3m5!1s0x865b46a4f1824e39:0xa0f24ff467461d32!8m2!3d30.1988099!4d-98.0318878!16s%2Fg%2F11ftkmlz67" target="_blank">
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
                        <Link to="/enchantedA" style={{ color: 'white' }}>
                            <Button variant="contained"
                                color="primary">
                                CLICK FOR DETAILS {<Icon name={buttonIcon} size='large' />}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="progress-div">
                <h5>{<Icon name={progressIcon} size='large' />} COMPLETION DATE: JUNE 2023</h5>
                <Progress percent="80" indicating />
            </div>

        </>
    )
}

export default EnchantedLane;