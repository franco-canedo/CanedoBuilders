import { useEffect, useState } from 'react';
import './Header.css';
import logo from '../photos/Logo.jpg';
import logoZoom from '../photos/LogoZoom2.png';
import Button from '@material-ui/core/Button';
import { Icon } from 'semantic-ui-react';

import { Outlet, Link } from "react-router-dom";

import green from '../gifs/green.png';

function debounce(fn, ms) {
    let timer
    return _ => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
        }, ms)
    };
}


function Header({ toggleTab }) {

    const [menu, setMenu] = useState("menu-hidden-start");



    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setWidth(window.innerWidth)
        }, 1000)

        window.addEventListener('resize', debouncedHandleResize)

        return _ => {
            window.removeEventListener('resize', debouncedHandleResize)
        }
    })

    const handleMenu = () => {
        if (menu === "mobile-menu-in") {
            setMenu("mobile-menu-hidden")
        } else if (menu === "mobile-menu-hidden" || menu === "menu-hidden-start") {
            setMenu("mobile-menu-in")
        }
    }

    return (
        <>
            <div className="header">
                {/* {timer()} */}
                <div className="inside-header">
                    <Link to="/" style={{ color: 'white' }}>
                        <div className="logo-div"
                            onClick={() => toggleTab("home")}>
                            <img className="logo-img"
                                src={logoZoom}></img>
                        </div>
                    </Link>


                    {
                        width < 550 ? <div className="header-email-div">
                            <p className="header-email">INFO@CANEDOBUILDERS.COM     .</p>
                            <img style={{ height: '30px', }} src={green} className="header-email-icon"></img>

                        </div> : null
                    }

                    {width < 550 ? <div className="button-div" onClick={handleMenu} style={{ overflowX: "hidden" }}>
                        <Icon name='bars' size='large' style={{ color: "black" }} />

                    </div> : null}

                    <div className="tabs-container">

                        {
                            width < 550 ? null
                                :
                                <>
                                    <Link to="/gallery" style={{ color: "white" }}>
                                        <div className="tab-div">
                                            <h5>GALLERY</h5>
                                            <Outlet />
                                        </div>
                                    </Link>
                                    <Link to="/listings" style={{ color: "white" }}>
                                        <div className="tab-div">
                                            <h5>LISTINGS</h5>
                                            <Outlet />
                                        </div>
                                    </Link>
                                    <Link to="/about" style={{ color: "white" }}>
                                        <div className="tab-div">
                                            <h5>OUR TEAM</h5>
                                            <Outlet />
                                        </div>
                                    </Link>
                                    <Link to="/contact" style={{ color: "white" }}>
                                        <div className="tab-div">
                                            <h5>CONTACT</h5>
                                            <Outlet />
                                        </div>
                                    </Link>
                                </>
                        }

                    </div>
                </div>
            </div>

            {
                width < 550 ?
                    <div className={menu} style={{ overflowX: "hidden" }}>

                        <div className="option"
                            onClick={() => {
                                toggleTab("gallery");
                                handleMenu();
                            }}>
                            <Link to="/" style={{ color: "black" }}>
                                <p> {<Icon name='home' size='large' />} HOME</p>
                            </Link>
                            <Outlet />
                        </div>
                        <div className="option"
                            onClick={() => {
                                toggleTab("gallery");
                                handleMenu();
                            }}>
                            <Link to="/gallery" style={{ color: "black" }}>
                                <p> {<Icon name='picture' size='large' />} GALLERY</p>
                            </Link>
                            <Outlet />
                        </div>

                        <div className="option"
                            onClick={() => {
                                toggleTab("current projects");
                                handleMenu();
                            }}>
                            <Link to="/listings" style={{ color: "black" }}>
                                <p> {<Icon name='building outline' size='large' />}LISTINGS</p>
                            </Link>
                            <Outlet />

                        </div>
                        <div className="option"
                            onClick={() => {
                                toggleTab("about");
                                handleMenu();
                            }}>
                            <Link to="/about" style={{ color: "black" }}>
                                <p> {<Icon name='info circle' size='large' />}OUR TEAM</p>
                            </Link>
                            <Outlet />

                        </div>
                        <div className="option"
                            onClick={() => {
                                toggleTab("contact");
                                handleMenu();
                            }}>
                            <Link to="/contact" style={{ color: "black" }}>
                                <p> {<Icon name='envelope' size='large' />}CONTACT</p>
                            </Link>
                            <Outlet />

                        </div>
                        <div className="button"
                            onClick={handleMenu}>
                            <Button variant="contained" onClick={handleMenu}
                            > <Icon name='chevron left' size='large' /></Button>
                        </div>
                    </div> : null
            }

        </>

    );
}

export default Header;