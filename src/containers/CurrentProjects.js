import { useEffect, useState } from 'react';
import './CurrentProjects.css';

import EnchantedLane from '../individualProjects/EnchantedLane';
import ProspectAve from '../individualProjects/ProspectAve';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import E21Carousel from '../components/East21Carousel';
import e21map from '../East21/e21map.png';

import { Progress } from 'semantic-ui-react';
import "react-image-gallery/styles/css/image-gallery.css";

import BuncheCarousel from '../components/BuncheCarousel';
import buncheMap from '../bunche/buncheMap.png';

import E21UnitA from '../units/2102A';
import E21UnitB from '../units/2102B';
import BuncheA from '../units/BuncheA';
import BuncheB from '../units/BuncheB';

import prospect from '../prospect/demolition.jpg';
import prospectMap from '../prospect/prospectMap.png';

import load from '../gifs/buffer.gif';



import { Icon } from 'semantic-ui-react'



function debounce(fn, ms) {
    let timer
    return _ => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
        }, ms)
    };
}



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    imageList: {
        width: 500,
        height: 450,
    },
}));

function CurrentProjects({ normal }) {
    const [width, setWidth] = useState(window.innerWidth);
    const [unit, setUnit] = useState("");

    const [buttonIcon] = useState('mars');
    const [progressIcon] = useState('calendar alternate outline');

    useEffect(() => {
        setUnit("normal");
        window.scrollTo(0, 0);
        const debouncedHandleResize = debounce(function handleResize() {
            setWidth(window.innerWidth)
        }, 1000)

        window.addEventListener('resize', debouncedHandleResize)

        return _ => {
            window.removeEventListener('resize', debouncedHandleResize)
        }
    }, []);

    const [loading, setLoading] = useState(true);

    const timer = () => {
        setInterval(() => setLoading(false), 8000);
    }

    const handleUnitSelect = (unit) => {
        setUnit(unit);
    }

    return (
        <>
            {
                unit === "E21UnitA" ? <E21UnitA handleUnitSelect={handleUnitSelect} /> :
                    unit === "E21UnitB" ? <E21UnitB handleUnitSelect={handleUnitSelect} /> :
                        unit === "BuncheA" ? <BuncheA handleUnitSelect={handleUnitSelect} /> :
                            unit === "BuncheB" ? <BuncheB handleUnitSelect={handleUnitSelect} /> :


                                <div
                                    className="gallery-master-container">
                                    <div className="projects-container">

                                        {timer()}




                                        <div className="project-title-div">
                                            <h1>2102 EAST 21 ST</h1>
                                        </div>
                                        <div className="project-div">

                                            <div className="collage-div">
                                                {
                                                    loading === true ? <div>
                                                        <img className="project-img2" src={load}></img>
                                                    </div>
                                                        : <E21Carousel />

                                                }
                                            </div>

                                            <a href="https://www.google.com/maps/place/2102+E+21st+St,+Austin,+TX+78722/@30.2894096,-97.7606718,12.39z/data=!4m5!3m4!1s0x8644b5eb504feb99:0xcac99d27fe753df9!8m2!3d30.2823913!4d-97.7194151" target="_blank">
                                                <div className="bounce-div">
                                                    {
                                                        loading === true ? <div className="bounce">
                                                            <img className="project-img3" src={load}></img>
                                                        </div>
                                                            : <img src={e21map} className="project-img3"></img>

                                                    }
                                                </div>
                                            </a>


                                            <div className="p-info-div">
                                                <h3>{<Icon name='home' size='large' />} UNIT A & ACCESSORY CASITA</h3>
                                                <h3>{<Icon name='angle right' size='large' />}UNDER CONTRACT</h3>


                                                <div className="info-buttons-div">
                                                    <Button variant="contained"
                                                        onClick={() => handleUnitSelect("E21UnitA")} color="primary">
                                                        MORE INFO & FLOOR PLANS {<Icon name={buttonIcon} size='large' />}
                                                    </Button>

                                                </div>


                                                <h3> {<Icon name='home' size='large' />} UNIT B</h3>
                                                <h3>{<Icon name='angle right' size='large' />}UNDER CONTRACT</h3>


                                                <div className="info-buttons-div">
                                                    <Button variant="contained"
                                                        onClick={() => handleUnitSelect("E21UnitB")} color="primary">
                                                        MORE INFO & FLOOR PLANS {<Icon name={buttonIcon} size='large' />}
                                                    </Button>

                                                </div>



                                            </div>
                                        </div>
                                        <div className="progress-div">
                                            <h3>{<Icon name={progressIcon} size='large' />} COMPLETION: MARCH 2022</h3>
                                            <Progress percent="80" indicating />
                                        </div>





                                        <div className="project-title-div">
                                            <h1>1729 BUNCHE RD</h1>
                                        </div>
                                        <div className="project-div">

                                            <div className="collage-div">
                                                {
                                                    loading === true ? <div>
                                                        <img className="project-img2" src={load}></img>
                                                    </div>
                                                        : <BuncheCarousel />

                                                }
                                            </div>

                                            <a href="https://www.google.com/maps/place/1729+Bunche+Rd,+Austin,+TX+78721/@30.2719212,-97.7625193,12z/data=!4m5!3m4!1s0x8644b63fe2ce4237:0x88ff16549124f698!8m2!3d30.2805335!4d-97.6764097" target="_blank">
                                                <div className="bounce-div">
                                                    {
                                                        loading === true ? <div className="bounce">
                                                            <img className="project-img3" src={load}></img>
                                                        </div>
                                                            : <img src={buncheMap} className="project-img3"></img>

                                                    }
                                                </div>
                                            </a>


                                            <div className="p-info-div">
                                                <h3>{<Icon name='home' size='large' />} UNIT A</h3>
                                                <h3>{<Icon name='angle right' size='large' />}UNDER CONTRACT</h3>


                                                <div className="info-buttons-div">
                                                    <Button variant="contained"
                                                        onClick={() => handleUnitSelect("BuncheA")} color="primary">
                                                        MORE INFO & FLOOR PLANS {<Icon name={buttonIcon} size='large' />}
                                                    </Button>

                                                </div>




                                                <h3>{<Icon name='home' size='large' />} UNIT B</h3>
                                                <h3>{<Icon name='angle right' size='large' />}UNDER CONTRACT</h3>


                                                <div className="info-buttons-div">
                                                    <Button variant="contained"
                                                        onClick={() => handleUnitSelect("BuncheB")} color="primary">
                                                        MORE INFO & FLOOR PLANS {<Icon name={buttonIcon} size='large' />}
                                                    </Button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress-div">
                                        <h3>{<Icon name={progressIcon} size='large' />} COMPLETION: MARCH 2022</h3>
                                        <Progress percent="80" indicating />
                                    </div>


                                    <ProspectAve loading={loading} load={load} />
                                    <EnchantedLane loading={loading} load={load} />

                                </div>



            }
        </>
    );
}

export default CurrentProjects;