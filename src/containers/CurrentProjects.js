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

function CurrentProjects() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const [images, setImages] = useState([house5, house6, house5, house6, house5, house6])
    const classes = useStyles();
    return (
        <div className="gallery-master-container">
            <div className="projects-container">
                <div className="project-div">
                    <div className="collage-div">
                        {/* <img src={house5} className="project-img"></img> */}
                        <ProjectCarousel />
                    </div>
                    <div className="bounce-div">
                        <a href="https://www.google.com/maps/place/2511+Givens+Ave,+Austin,+TX+78722/@30.2814499,-97.7170645,17z/data=!3m1!4b1!4m5!3m4!1s0x8644b5ebdbf0e0fb:0x5c83881d1141d5c5!8m2!3d30.2814499!4d-97.7148758" target="_blank">
                            <img src={givens} className="project-img"></img>
                        </a>
                    </div>
                    <div className="p-info-div">
                        <h3>2511 GIVENS AVE #2</h3>
                        <p>3 BEDS 2 BATHS</p>
                        <p>1100 SF</p>
                        <p>COMPLETED: ACTIVE UNDER CONTRACT</p>

                        <a href="https://www.realtor.com/realestateandhomes-detail/M9108565249" target="_blank">
                            <Button variant="contained" color="primary">
                                Realtor.com
                            </Button>
                        </a>

                        <a href="mailto:info@canedobuilders.com?subject=Subject&body=Body">
                            <Button variant="contained" className="button-c">Contact Us

                            </Button>
                        </a>

                    </div>
                </div>
                <div className="project-div">
                    <div className="collage-div">
                        {/* <img src={house6} className="project-img"></img> */}
                        <BethuneCarousel />
                    </div>

                    <a href="https://www.google.com/maps/place/7511+Bethune+Ave,+Austin,+TX+78752/@30.3339437,-97.6978076,17z/data=!3m1!4b1!4m5!3m4!1s0x8644c988585db87d:0xd080a186795eefab!8m2!3d30.3339437!4d-97.6956189" target="_blank">
                        <div className="bounce-div">
                            <img src={bethune} className="project-img"></img>
                        </div>
                    </a>


                    <div className="p-info-div">
                        <h3>7511, 7512 & 7513 BETHUNE AVE</h3>
                        <p>3 DUPLEXES (6 units total)</p>
                        <p> 3 BEDS 2.5 BATHS</p>
                        <p>1600 SF</p>
                        <p>COMPLETION: SEPTEMBER 2021</p>



                        <a href="https://www.realtor.com/realestateandhomes-detail/M9550589495" target="_blank">
                            <Button variant="contained" color="primary">
                                Realtor.com
                            </Button>
                        </a>

                        <a href="mailto:info@canedobuilders.com?subject=Subject&body=Body">
                            <Button variant="contained" className="button-c">Contact Us

                            </Button>
                        </a>



                    </div>
                </div>

                <div className="project-div">
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
                        <h3>EAST 21 ST</h3>
                        <p>UNIT A & UNIT B ADU</p>
                        <p>COMPLETION: JANUARY 2022</p>


                        <Button variant="contained" disabled>
                            Realtor.com
                        </Button>


                        <a href="mailto:info@canedobuilders.com?subject=Subject&body=Body">
                            <Button variant="contained" className="button-c">Contact Us

                            </Button>
                        </a>



                    </div>
                </div>
            </div>

        </div>

    );
}

export default CurrentProjects;