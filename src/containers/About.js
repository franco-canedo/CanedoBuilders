import { useEffect, useState } from 'react';
import './About.css';
import papa from '../BFS/papa.Jpg';
import guido from '../BFS/guido.Jpg';
import franco from '../BFS/franco.Jpg';
import green from '../gifs/green.png';

import home from '../BFS/custom_homes.png';
import project from '../BFS/project_management.png';
import remodel from '../BFS/remodeling.png';


function About() {

    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div>
            <div>
                <div>
                    <div className="about-title-div">
                        <h1>ABOUT US</h1>
                    </div>
                    <div className="about-us-div">
                        <p>Welcome to Canedo Builders, an Austin based custom home builder committed to excellence and achieving the highest standards of craftmanship, design, efficiency and comfort.
                            As a small family business, we like to add a personal touch in our relationship with our clients, we want to be more than just another builder, we are your partners in creating the home you always imagined. Our unwavering commitment to excellence and integrity has been the driving force to our success, we guarantee an exceptional customer experience and the highest standard of quality and durability.
                            Whether you’re looking to remodel your current home, build the house of your dreams, or add value to your investment property, we can cater to all your construction needs. Explore our portfolio, meet the Canedo family, and let’s start building your dream project together.</p>
                    </div>
                </div>
                <div className="other-titles">
                    <h2>OUR TEAM</h2>
                </div>
                <div className="team-container">
                    <div className="profile-pic-div">
                        <div className="p-pic-div">
                            <img className="profile-pic1" src={papa}></img>
                        </div>

                        <div className="p-div">
                            <b>Guido Canedo Macouzet</b>
                            <p></p>
                            <p>Founder, Managing Director</p>
                        </div>
                    </div>
                    <div className="profile-pic-div">
                        <div className="p-pic-div">
                            <img className="profile-pic2" src={guido}></img>
                        </div>
                        <div className="p-div">
                            <b>Guido Canedo Flores</b>
                            <p></p>
                            <p>Project Management & Operations</p>
                        </div>

                    </div>
                    <div className="profile-pic-div">
                        <div className="p-pic-div">
                            <img className="profile-pic3" src={franco}></img>
                        </div>
                        <div className="p-div">
                            <b>Franco Canedo Flores</b>
                            <p></p>
                            <p>Sales & Administration</p>
                        </div>

                    </div>
                </div>
                <div className="other-titles">
                    <h2>WHAT WE OFFER</h2>
                </div>
                <div className="team-container">
                    <div>
                        <h2>Custom Homes</h2>
                        <div className="p-pic-div">
                            <img className="services-pic" src={home}></img>
                        </div>
                    </div>
                    <div>
                        <h2>Remodeling</h2>
                        <div className="p-pic-div">
                            <img className="services-pic" src={remodel}></img>
                        </div>
                    </div>
                    <div>
                        <h2>Project Management</h2>
                        <div className="p-pic-div">
                            <img className="services-pic" src={project}></img>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default About;