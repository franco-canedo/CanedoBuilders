import { useEffect, useState } from 'react';
import './About.css';
import house7 from '../photos/house7.jpg';
import house6 from '../photos/house6.jpg';
import house3 from '../photos/house3.jpg';


function About() {
    return (
        <div>
            <div>
                <div className="profile-pic-div">
                    <div>
                        <img className="profile-pic1" src={house7}></img>
                    </div>

                    <div className="p-div">
                        <p>Guido</p>
                        <p>President</p>
                    </div>
                </div>
                <div className="profile-pic-div">
                    <div>
                        <img className="profile-pic2" src={house6}></img>
                    </div>
                    <div className="p-div">
                    <p>Guido Jr.</p>
                        <p>Manager</p>
                    </div>

                </div>
                <div className="profile-pic-div">
                    <div>
                        <img className="profile-pic3" src={house3}></img>
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