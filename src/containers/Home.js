import { useEffect, useState } from 'react';
import './Home.css';
import Button from '@material-ui/core/Button';
import house from '../photos/house.jpg';

import logo from '../photos/Logo.jpg';

import load from '../gifs/buffer.gif'

import LoaderExampleLoader from './LinearIndeterminate';
import { Progress } from 'semantic-ui-react';

import styled from 'styled-components';
import LazyImage from 'react-lazy-blur-image';
import { Icon } from 'semantic-ui-react'

import house1 from '../landingPage/e7.jpg';
import house2 from '../landingPage/e7.jpg';

// import video from './public/Videos/bethuneVid.mp4';

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

    const [loading, setLoading] = useState(house1);

    const timer1 = () => {
        setInterval(() => setLoading(house2), 2000);
    }

    const timer2 = () => {
        setInterval(() => setLoading(house), 4000);
    }

   

    return (
        <div className="gallery-master-container">
            <div className="head-div">
                <>
                    <div className="paragraph-div2">

                        <Button onClick={() => window.scrollTo(0, 900)}
                            variant="contained" color="dark">
                            <h3>MORE {<Icon name='chevron down' size='small' />}</h3>
                        </Button>

                    </div>
                    <img className="head-imager" src={house}></img>
                </>
            </div>

            <div className='quote'>
                <p>
                    Creating beautiful and unique living spaces in the city of Austin since 2014.</p>
                    <div>
                    <video width="750" height="500" controls >
                    <source src="/Videos/bethuneVid.mp4" type="video/mp4"/></video>
                    </div>
                <div className="home-apps-container">
                   
                    <div className="grid-item-home" onClick={() => toPage("gallery")}>
                        <h2>{<Icon name='picture' size='large' />} GALLERY </h2>
                    </div>
                    <div className="grid-item-home" onClick={() => toPage("current projects")}>
                        <h2>{<Icon name='building outline' size='large' />} PROJECTS </h2>
                    </div>
                    {/* <div className="grid-item-home" onClick={() => toPage("about")}>
                        <h2>{<Icon name='info circle' size='large' />} ABOUT</h2>
                    </div> */}
                    <div className="grid-item-home" onClick={() => toPage("contact")}>
                        <h2>{<Icon name='envelope' size='large' />} CONTACT</h2>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Home;