import { useEffect, useState } from 'react';
import './CurrentProjects.css';
import house5 from '../photos/house5.jpg';
import house6 from '../photos/house6.jpg';
import givens from '../photos/givensMap.png';
import bethune from '../photos/bethuneMap.png';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ProjectCarousel from '../components/ProjectCarousel';
import BethuneCarousel from '../components/BethuneCarousel';
import E21Carousel from '../components/East21Carousel';
import e21map from '../East21/e21map.png';
import Modal1 from './Modal1';
import ProjectPlans from '../components/ProjectPlans';
import { Progress } from 'semantic-ui-react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


import bethunePlan1 from '../bethune/plan1.jpg';
import bethunePlan2 from '../bethune/plan2.png';

import e21Layout from '../East21/site.png';
import unitA from '../East21/unitA.png';
import unitB from '../East21/unitB.png';
import attic from '../East21/atticFloor.png';

import BuncheCarousel from '../components/BuncheCarousel';
import BuncheLot from '../bunche/BuncheLot.png';
import bunche1 from '../bunche/FirstFloorPlansBunche.png';
import bunche2 from '../bunche/SecondFloorPlansBunche.png';
import bunche3 from '../bunche/ThirdFloorPlanBunche.png';
import buncheMap from '../bunche/buncheMap.png';

import OaklawnMap from '../oaklawn/oaklawnMap.png';
import OaklawnLayout from '../oaklawn/oaklawnLayout.png';
import OaklawnLevel1 from '../oaklawn/oaklawnLevel1.png';
import OaklawnLevel2 from '../oaklawn/oaklawnLevel2.png';
import OaklawnLevel3 from '../oaklawn/oaklawnLevel3.png';
import OaklawnCarousel from '../components/OaklawnCarousel';

import E21UnitA from '../units/2102A';

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

function CurrentProjects({normal}) {
    const [width, setWidth] = useState(window.innerWidth);
    const [unit, setUnit] = useState("");

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

    

    const handleUnitSelect = (unit) => {
        setUnit(unit);
    }



    const [showPlansBethune, setPlansBethune] = useState(false);
    const [floorPlansBethune] = useState([
        {
            original: bethunePlan1,

            originalHeight: 600,
            originalWidth: 600,
        },
        {
            original: bethunePlan2,

            originalHeight: 600,
            originalWidth: 600,
        },
    ]);

    const [showPlansEast21, setPlansEast21] = useState(false);
    const [floorPlansEast21] = useState([
        {
            original: e21Layout,

            originalHeight: 600,
            originalWidth: 600,
        },
        {
            original: unitA,

            originalHeight: 600,
            originalWidth: 600,
        },
        {
            original: unitB,

            originalHeight: 600,
            originalWidth: 600,
        },
        {
            original: attic,

            originalHeight: 600,
            originalWidth: 600,
        },
    ]);

    const [showPlansBunche, setPlansBunche] = useState(false);
    const [floorPlansBunche] = useState([
        {
            original: BuncheLot,

            originalHeight: 600,
            originalWidth: 600,
        },
        {
            original: bunche1,

            originalHeight: 600,
            originalWidth: 600,
        },
        {
            original: bunche2,

            originalHeight: 600,
            originalWidth: 600,
        },
        {
            original: bunche3,

            originalHeight: 600,
            originalWidth: 600,
        },
    ]);

    const [showPlansOaklawn, setPlansOaklawn] = useState(false);
    const [floorPlansOaklawn] = useState([
        {
            original: OaklawnLayout,

            originalHeight: 600,
            originalWidth: 600,
        },
        {
            original: OaklawnLevel1,

            originalHeight: 600,
            originalWidth: 600,
        },
        {
            original: OaklawnLevel2,

            originalHeight: 600,
            originalWidth: 600,
        },
        {
            original: OaklawnLevel3,

            originalHeight: 600,
            originalWidth: 600,
        },
    ]);

    const togglePlansBethune = () => {
        setPlansBethune(true);
    }

    const togglePlansEast21 = () => {
        setPlansEast21(true);
    }

    const togglePlansBunche = () => {
        setPlansBunche(true);
    }

    const togglePlansOaklawn = () => {
        setPlansOaklawn(true);
    }

    const hideAllPlans = () => {
        if (showPlansBethune === true ||
            showPlansEast21 === true ||
            showPlansBunche === true ||
            showPlansOaklawn) {
            setPlansBethune(false);
            setPlansEast21(false);
            setPlansBunche(false);
            setPlansOaklawn(false);
        }
    }

    const classes = useStyles();
    return (
        <>
            {
                unit === "E21UnitA" ? <E21UnitA handleUnitSelect={handleUnitSelect}/> : 
        
            
            <div
                className="gallery-master-container">
                <div className="projects-container">
                    <div className="project-title-div">
                        <h1>7511, 7509, 7507 BETHUNE AVE</h1>
                    </div>
                    <div className="project-div">
                        <div className={showPlansBethune ? "slideshow-shown" : "slideshow-hidden"}>
                            <ImageGallery items={floorPlansBethune} />
                            <Button onClick={hideAllPlans}
                                variant="contained" color="primary" className="button-c">
                                Exit
                            </Button>
                        </div>
                        <div className="collage-div">
                            <BethuneCarousel />
                        </div>

                        <a href="https://www.google.com/maps/place/7511+Bethune+Ave,+Austin,+TX+78752/@30.3339437,-97.6978076,17z/data=!3m1!4b1!4m5!3m4!1s0x8644c988585db87d:0xd080a186795eefab!8m2!3d30.3339437!4d-97.6956189" target="_blank">
                            <div className="bounce-div">
                                <img src={bethune} className="project-img"></img>
                            </div>
                        </a>


                        <div className="p-info-div">
                            <h3>3 DUPLEXES (6 units total)</h3>
                            <h3> 3 BEDS 2.5 BATHS</h3>
                            <h3>1614 SQFT</h3>


                            <div className="info-buttons-div">
                                <a href="https://www.realtor.com/realestateandhomes-detail/M9550589495" target="_blank">
                                    <Button variant="contained" color="primary">
                                        Realtor.com
                                    </Button>
                                </a>

                                <a href="mailto:info@canedobuilders.com?subject=Subject&body=Body">
                                    <Button variant="contained" className="button-c">Contact Us

                                    </Button>
                                </a>
                                {/* {
                                    width > 550 ?
                                        <Button onClick={togglePlansBethune}
                                            variant="contained" className="button-c">
                                            Floor Plans
                                        </Button> : null
                                } */}
                            </div>
                        </div>
                    </div>
                    <div className="progress-div">
                        <h3>PROGRESS | COMPLETED</h3>
                        <Progress percent="100" indicating />
                    </div>
                    <div className="project-title-div">
                        <h1>2102 EAST 21 ST</h1>
                    </div>
                    <div className="project-div">
                        <div className={showPlansEast21 ? "slideshow-shown" : "slideshow-hidden"}>
                            <ImageGallery items={floorPlansEast21} />
                            <Button onClick={hideAllPlans}
                                variant="contained" color="primary" className="button-c">
                                Exit
                            </Button>
                        </div>
                        <div className="collage-div">
                            {/* <img src={house6} className="project-img"></img> */}
                            <E21Carousel />
                        </div>

                        <a href="https://www.google.com/maps/place/2102+E+21st+St,+Austin,+TX+78722/@30.2894096,-97.7606718,12.39z/data=!4m5!3m4!1s0x8644b5eb504feb99:0xcac99d27fe753df9!8m2!3d30.2823913!4d-97.7194151" target="_blank">
                            <div className="bounce-div">
                                <img src={e21map} className="project-img"></img>
                            </div>
                        </a>


                        <div className="p-info-div">
                            {/* //////////////////////  */}
                            <h3>UNIT A</h3>
                            <Button variant="contained"
                                onClick={() => handleUnitSelect("E21UnitA")}>
                                MORE INFO
                            </Button>

                            <h3>UNIT B ADU</h3>
                            <h3>2 BEDS, 2.5 BATHS | 1047 SQFT</h3>


                            <div className="info-buttons-div">
                                <Button variant="contained" disabled>
                                    Realtor.com
                                </Button>

                                <a href="mailto:info@canedobuilders.com?subject=Subject&body=Body">
                                    <Button variant="contained" className="button-c">Contact Us

                                    </Button>
                                </a>
                                {/* {
                                    width > 550 ?
                                        <Button onClick={togglePlansEast21}
                                            variant="contained" className="button-c">
                                            Floor Plans
                                        </Button> : null
                                } */}
                            </div>
                        </div>
                    </div>
                    <div className="progress-div">
                        <h3>PROGRESS | COMPLETION: JANUARY 2022</h3>
                        <Progress percent="30" indicating />
                    </div>

                    <div className="project-title-div">
                        <h1>1729 BUNCHE RD</h1>
                    </div>
                    <div className="project-div">
                        <div className={showPlansBunche ? "slideshow-shown" : "slideshow-hidden"}>
                            <ImageGallery items={floorPlansBunche} />
                            <Button onClick={hideAllPlans}
                                variant="contained" color="primary" className="button-c">
                                Exit
                            </Button>
                        </div>
                        <div className="collage-div">
                            {/* <img src={house6} className="project-img"></img> */}
                            <BuncheCarousel />
                        </div>

                        <a href="https://www.google.com/maps/place/1729+Bunche+Rd,+Austin,+TX+78721/@30.2719212,-97.7625193,12z/data=!4m5!3m4!1s0x8644b63fe2ce4237:0x88ff16549124f698!8m2!3d30.2805335!4d-97.6764097" target="_blank">
                            <div className="bounce-div">
                                <img src={buncheMap} className="project-img"></img>
                            </div>
                        </a>


                        <div className="p-info-div">

                            <h3>UNIT A</h3>
                            <h3>3 BEDS 3 BATHS | 2152 SQFT</h3>
                            <h3>UNIT B ADU</h3>
                            <h3>2 BEDS 2.5 BATHS | 916 SQFT</h3>


                            <div className="info-buttons-div">
                                <Button variant="contained" disabled>
                                    Realtor.com
                                </Button>

                                <a href="mailto:info@canedobuilders.com?subject=Subject&body=Body">
                                    <Button variant="contained" className="button-c">Contact Us

                                    </Button>
                                </a>
                                {/* {
                                    width > 550 ?
                                        <Button onClick={togglePlansBunche}
                                            variant="contained" className="button-c">
                                            Floor Plans
                                        </Button> : null
                                } */}
                            </div>
                        </div>
                    </div>
                    <div className="progress-div">
                        <h3>PROGRESS | COMPLETION: DECEMBER 2021</h3>
                        <Progress percent="40" indicating />
                    </div>
                    {/* <div className="project-title-div">
                        <h1>2604 OAKLAWN AVE</h1>
                    </div>
                    <div className="project-div">
                        <div className={showPlansOaklawn ? "slideshow-shown" : "slideshow-hidden"}>
                            <ImageGallery items={floorPlansOaklawn} />
                            <Button onClick={hideAllPlans}
                                variant="contained" color="primary" className="button-c">
                                Exit
                            </Button>
                        </div>
                        <div className="collage-div">
                            <OaklawnCarousel />
                        </div>

                        <a href="https://www.google.com/maps/place/2604+Oaklawn+Ave,+Austin,+TX+78722/@30.2809014,-97.748243,13z/data=!4m5!3m4!1s0x8644b5ec1c83f37d:0xbb28aa0184db56d5!8m2!3d30.2841395!4d-97.7148334" target="_blank">
                            <div className="bounce-div">
                                <img src={OaklawnMap} className="project-img"></img>
                            </div>
                        </a>


                        <div className="p-info-div">
                            <h3>UNIT A</h3>
                            <h3>4 BEDS, 4 BATHS | 2303 SQFT</h3>
                            <h3>UNIT B</h3>
                            <h3>2 BEDS, 2 BATHS | 1112 SQFT</h3>
                            

                            <div className="info-buttons-div">
                               
                                    <Button variant="contained" disabled>
                                        Realtor.com
                                    </Button>
                                

                                <a href="mailto:info@canedobuilders.com?subject=Subject&body=Body">
                                    <Button variant="contained" className="button-c">Contact Us

                                    </Button>
                                </a>
                                {
                                    width > 550 ?
                                        <Button onClick={togglePlansOaklawn}
                                            variant="contained" className="button-c">
                                            Floor Plans
                                        </Button> : null
                                }
                            </div>
                        </div>
                    </div>
                    <div className="progress-div">
                        <h3>PROGRESS | COMPLETION: FEBRUARY 2021</h3>
                        <Progress percent="20" indicating />
                    </div> */}
                </div>


            </div>
        }
        </>
    );
}

export default CurrentProjects;