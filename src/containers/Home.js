import { useEffect, useState } from 'react';
import './Home.css';
import Button from '@material-ui/core/Button';
import Carousel from 'react-bootstrap/Carousel';
import house from '../photos/house.jpg';
import house5 from '../photos/house5.jpg';
import house6 from '../photos/house6.jpg';


function Home({ toGallery }) {
    return (
        <div className="gallery-master-container">
            <div className="head-div">
                {/* <div className='quote-absolute'>
                    <p>
                        Creating beautiful and unique living spaces that
                        blend seamlessly with the character and culture of the city of Austin.  </p>
                    <Button onClick={() => toGallery("gallery")}
                        variant="contained" color="primary">
                        View Gallery
                    </Button>

                </div> */}
                <div className="paragraph-div">

                    <Button onClick={() => toGallery("gallery")}
                        variant="contained" color="dark">
                        Find Out More
                    </Button>

                </div>
                <img className="head-imager" src={house}></img>

            </div>

            <div className='quote'>
                <p>
                    Creating beautiful and unique living spaces in the city of Austin since 2014</p>
                <Button onClick={() => toGallery("gallery")}
                    variant="contained">
                    View Gallery
                </Button>

            </div>

            {/* <div className="sliders=container">
                <div>
                    <img className="slide-img" src={house5}></img>
                </div>
                <div>
                    <img className="slide-img" src={house6}></img>
                </div>

            </div> */}
        </div>

    );
}

export default Home;