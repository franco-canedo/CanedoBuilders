import { useEffect, useState } from 'react';
import './Header.css';


function Header() {
    return (
        <div className="header">
            <div>
                <h1>Canedo Builders</h1>
            </div>
            <div className="tabs-container">
                <div>
                    <p>Gallery</p>
                </div>
                <div>
                    <p>Current Projects</p>
                </div>
                <div>
                    <p>About</p>
                </div>
                <div>
                    <p>Contact</p>
                </div>
            </div>


        </div>

    );
}

export default Header;