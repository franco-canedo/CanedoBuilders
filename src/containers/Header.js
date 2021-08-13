import { useEffect, useState } from 'react';
import './Header.css';


function Header({ toggleTab }) {

    return (
        <div className="header">
            <div onClick={() => toggleTab("home")}>
                <h1>Canedo Builders</h1>
            </div>
            <div className="tabs-container">
                <div onClick={() => toggleTab("gallery")}>
                    <p>Gallery</p>
                </div>
                <div onClick={() => toggleTab("current projects")}>
                    <p>Current Projects</p>
                </div>
                <div onClick={() => toggleTab("about")}>
                    <p>About</p>
                </div>
                <div onClick={() => toggleTab("contact")}>
                    <p>Contact</p>
                </div>
            </div>
        </div>

    );
}

export default Header;