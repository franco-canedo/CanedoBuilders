import { useEffect, useState } from 'react';
import './Home.css';
import Button from '@material-ui/core/Button';
import house from '../photos/house.jpg';
import house2 from '../photos/house6.jpg';
import logo from '../photos/Logo.jpg';

import load from '../gifs/buffer.gif'

import LoaderExampleLoader from './LinearIndeterminate';
import { Progress } from 'semantic-ui-react';

import styled from 'styled-components';
import LazyImage from 'react-lazy-blur-image';

const Image = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  ilter: blur(5px); 
  max-height: 600px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
`;

function Home({ toPage }) {

    const [loading, setLoading] = useState(true);

    const timer = () => {
        setInterval(() => setLoading(false), 7000);
    }

    return (
        <div className="gallery-master-container">
            <div className="head-div">
                <div className="paragraph-div">

                    <Button onClick={() => toPage("gallery")}
                        variant="contained" color="dark">
                        <h3>GALLERY</h3>        
                    </Button>

                </div>
                {timer()}
                {/* {
                    loading === true ? <img className="head-imager-load" src={load}></img>
                     :
                        <img className="head-imager" src={house}></img>
                } */}

{/* <div className="loader-div">
                        <div className="loading-position">
                            <Progress percent="100" active />
                        </div>
                    </div> */}

                {/* <LazyImage
                    uri={house}
                    placeholder={load}
                    render={(house, style) => <Image src={house} style={style} />}
                /> */}
                <img className="head-imager" src={house}></img>

            </div>

            <div className='quote'>
                <p>
                    Creating beautiful and unique living spaces in the city of Austin since 2014.</p>
                <div className="home-apps-container">
                    
                    <div className="grid-item-home" onClick={() => toPage("current projects")}>
                    <h2>PROJECTS</h2>
                    </div>
                    <div className="grid-item-home" onClick={() => toPage("about")}>
                    <h2>ABOUT</h2>
                    </div>
                    <div className="grid-item-home" onClick={() => toPage("contact")}>
                    <h2>CONTACT</h2>
                    </div>
                </div>

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