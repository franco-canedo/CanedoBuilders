import { useEffect, useState } from 'react';
import './Header.css';
import logo from '../photos/Logo.jpg';
import Button from '@material-ui/core/Button';

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
                <div className="logo-div"
                onClick={() => toggleTab("home")}>
                    <img className="logo-img"
                    src={logo}></img>
                </div>
                <div className="tabs-container">

                    {
                        width < 550 ?
                            <div className="button-div" onClick={handleMenu}>
                                <p>MENU</p>
                            </div> :
                            <>
                                <div className="tab-div"
                                onClick={() => {
                                    
                                    toggleTab("gallery");
                                    
                                    }}>
                                    <p>GALLERY</p>
                                </div>
                                <div className="tab-div"
                                onClick={() => toggleTab("current projects")}>
                                    <p>CURRENT PROJECTS</p>
                                </div>
                                <div className="tab-div"
                                onClick={() => toggleTab("about")}>
                                    <p>OUR TEAM</p>
                                </div>
                                <div className="tab-div"
                                onClick={() => toggleTab("contact")}>
                                    <p>CONTACT</p>
                                </div>
                            </>
                    }

                </div>
            </div>

            {
                width < 550 ?
                <div className={menu}>
                <div className="option"
                onClick={() => {
                    toggleTab("gallery");
                    handleMenu();
                    }}>
                    <p>GALLERY</p>
                </div>
                <div className="option"
                onClick={() => {
                    toggleTab("current projects");
                    handleMenu();
                }}>
                    <p>CURRENT PROJECTS</p>
                </div>
                <div className="option"
                onClick={() => {
                    toggleTab("about");
                    handleMenu();
                    }}>
                    <p>OUR TEAM</p>
                </div>
                <div className="option"
                onClick={() => {
                    toggleTab("contact");
                    handleMenu();
                }}>
                    <p>CONTACT</p>
                </div>
                <div className="button"
                onClick={handleMenu}>
                    <Button variant="contained" onClick={handleMenu}
                    >Exit</Button>
                </div>
            </div> : null
            }
            
        </>

    );
}

export default Header;