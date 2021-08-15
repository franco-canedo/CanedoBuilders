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
    const [images, setImages] = useState([house5, house6, house5, house6, house5, house6])
    const classes = useStyles();
    return (
        <div className="gallery-master-container">
            <div className="projects-container">
                <div className="project-div">
                    <div className="collage-div">
                        <img src={house5} className="project-img"></img>
                    </div>
                    <div className="bounce-div">
                        <img src={givens} className="project-img"></img>
                    </div>
                    <div className="p-info-div">
                        <h3>2511 Givens Ave</h3>
                        <p>3 Beds 2 Baths</p>
                        <p>1100 SF</p>
                        <p>Completion: August 2021</p>
                        <Button variant="contained" color="primary">
                            Google Maps
                        </Button>
                        <Button variant="contained" color="secondary" className="button-c">Contact Us
                            <a href="mailto:canedoguido65@gmail.com?subject=Subject&body=Body"></a>
                        </Button>
                    </div>
                </div>
                <div className="project-div">
                    <div className="collage-div">
                        <img src={house6} className="project-img"></img>
                    </div>
                    <div className="bounce-div">
                        <img src={bethune} className="project-img"></img>
                    </div>
                    <div className="p-info-div">
                        <h3>7511 Behtune Ave</h3>
                        <p> 3 Beds 2 Baths</p>
                        <p>1600 SF</p>
                        <p>Completion: September 2021</p>

                        <Button variant="contained" color="primary">
                            Google Maps
                        </Button>
                        <Button variant="contained" color="secondary" className="button-c">Contact Us
                            <a href="mailto:canedoguido65@gmail.com?subject=Subject&body=Body"></a>
                        </Button>

                    </div>
                </div>
            </div>

        </div>

    );
}

export default CurrentProjects;