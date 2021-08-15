import { useEffect, useState } from 'react';
import './About.css';
import papa from '../photos/papaR.png';
import guido from '../photos/guidoR.png';
import franco from '../photos/francoR.png';


function About() {
    return (
        <div>
            <div>
                <div className="profile-pic-div">
                    <div className="p-pic-div">
                        <img className="profile-pic1" src={papa}></img>
                    </div>

                    <div className="p-div">
                        <p>Guido</p>
                        <p>President</p>
                    </div>
                </div>
                <div className="profile-pic-div">
                    <div className="p-pic-div">
                        <img className="profile-pic2" src={guido}></img>
                    </div>
                    <div className="p-div">
                    <p>Guido Jr.</p>
                        <p>Manager</p>
                    </div>

                </div>
                <div className="profile-pic-div">
                    <div className="p-pic-div">
                        <img className="profile-pic3" src={franco}></img>
                    </div>
                    <div className="p-div">
                    <p>Franco</p>
                        <p>Sales</p>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default About;