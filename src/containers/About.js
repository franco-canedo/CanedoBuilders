import { useEffect, useState } from 'react';
import './About.css';
import papa from '../photos/papaR.png';
import guido from '../photos/guidoR.png';
import franco from '../photos/francoR.png';
import green from '../gifs/green.png';


function About() {

    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div>
            <div>
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
                        <img className="profile-pic3" src={green}></img>
                    </div>
                    <div className="p-div">
                        <b>Franco Canedo Flores</b>
                        <p></p>
                        <p>Sales & Administration</p>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default About;