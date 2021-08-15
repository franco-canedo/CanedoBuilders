import { useEffect, useState } from 'react';
import './About.css';
import house7 from '../photos/house7.jpg';
import house6 from '../photos/house6.jpg';
import house3 from '../photos/house3.jpg';


function About() {
    return (
        <div>
            <div>
                <div className="profile-piv-div">
                    <img className="profile-pic" src={house7}></img>
                </div>
                <div className="profile-piv-div">
                    <img className="profile-pic" src={house6}></img>
                </div>
                <div className="profile-piv-div">
                    <img className="profile-pic" src={house3}></img>
                </div>
            </div>
        </div>

    );
}

export default About;