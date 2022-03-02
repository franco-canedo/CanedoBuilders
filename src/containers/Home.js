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

import { Link } from 'react-router-dom';

import HomeCarousel from '../components/HeadCarousel';

// import bath1 from '../bathrooms/ba5.jpg';
import clean1 from '../givens/clean1.jpg';
import clean2 from '../kitchen/k10.jpg';
import logoZoom from '../photos/LogoZoom2.png';
import green from '../gifs/green.png';

import AOS from 'aos';
import 'aos/dist/aos.css';



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

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ duration: 1000 });
    }, [])

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

                        <Button onClick={() => window.scrollTo(0, 600)}
                            variant="contained" color="dark">
                            <h3>MORE {<Icon name='chevron down' size='small' />}</h3>
                        </Button>

                    </div>
                    <img className="head-imager" src={house}></img>
                    {/* <HomeCarousel /> */}
                </>
            </div>

            <div className='quote'>
                <div className="motto-div">
                    <p className="motto">Creating beautiful and unique living spaces in the city of Austin since 2014.
                    </p>
                </div>


                <div>
                    <div className="see-work">
                        <h5>SEE OUR WORK </h5>
                    </div>
                    <video width="750" height="500" controls >
                        <source src="/Videos/bethuneVid.mp4" type="video/mp4" /></video>
                </div>
                <div className="motto-div" data-aos="zoom-out" data-aos-once="true">
                    <div className="image-points">
                        <h4>Clean & Aesthetic Design</h4>
                    </div>

                    <img className="promise-img" src={clean1}></img>
                </div>
                <div className="motto-div" data-aos="fade-right" data-aos-once="true">
                    <div className="warranty">
                        <h1>Warranty</h1>

                        <p className="motto">
                            {"We stand by the quality of our homes with a 1-2-10 Warranty."}
                        </p>
                        <a href="https://www.strucsure.com/builder-home/our-builder-warranties/1-2-10-warranty-overview/" target="_blank">
                            <Button variant="contained"
                                color="primary">
                                Learn more
                            </Button>
                        </a>
                        <img className="promise-img2" src={logoZoom}></img>
                    </div>
                </div>
                <div data-aos="flip-down" data-aos-once="true">
                    <div className="find-home" >
                        <h1>Find Your Home.</h1>
                    </div>
                    <div className="arrow" >
                        {<Icon name='caret square down' size='large' />}
                    </div>
                </div>
                <div className="home-apps-container" data-aos="flip-down" data-aos-once="true">
                    <Link to="/gallery" style={{ color: 'white' }}>
                        <div className="grid-item-home" >
                            <h2>{<Icon name='picture' size='large' />} GALLERY </h2>
                        </div>
                    </Link>
                    <Link to="/listings" style={{ color: 'white' }}>
                        <div className="grid-item-home"  >
                            <h2>{<Icon name='building outline' size='large' />}LISTINGS</h2>
                        </div>
                    </Link>
                    <Link to="/contact" style={{ color: 'white' }}>
                        <div className="grid-item-home"  >
                            <h2>{<Icon name='envelope' size='large' />} CONTACT</h2>
                        </div>
                    </Link>
                </div>

            </div>
        </div>

    );
}

export default Home;