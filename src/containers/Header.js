import { useEffect, useState } from 'react';
import './Header.css';
import logo from '../photos/Logo.jpg';
import logoZoom from '../photos/LogoZoom2.png';
import Button from '@material-ui/core/Button';
import { Icon } from 'semantic-ui-react';

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
                <div className="inside-header">
                    <div className="logo-div"
                        onClick={() => toggleTab("home")}>
                        <img className="logo-img"
                            src={logoZoom}></img>
                    </div>
                    <div className="tabs-container">

                        {
                            width < 550 ?
                                <div className="button-div" onClick={handleMenu} style={{ overflowX: "hidden" }}>
                                    <Icon name='list' size='large' />

                                </div> :
                                <>
                                    <div className="tab-div"
                                        onClick={() => {

                                            toggleTab("gallery");

                                        }}>
                                        <h5>GALLERY</h5>
                                    </div>
                                    <div className="tab-div"
                                        onClick={() => toggleTab("current projects")}>
                                        <h5>CURRENT PROJECTS</h5>
                                    </div>
                                    <div className="tab-div"
                                        onClick={() => toggleTab("about")}>
                                        <h5>OUR TEAM</h5>
                                    </div>
                                    <div className="tab-div"
                                        onClick={() => toggleTab("contact")}>
                                        <h5>CONTACT</h5>
                                    </div>
                                </>
                        }

                    </div>
                </div>
            </div>

            {
                width < 550 ?
                <div className={menu} style={{ overflowX: "hidden"}}>
                <div className="option"
                onClick={() => {
                    toggleTab("gallery");
                    handleMenu();
                    }}>
                    <p> {<Icon name='picture' size='large' />} GALLERY</p>
                </div>
                <div className="option"
                onClick={() => {
                    toggleTab("current projects");
                    handleMenu();
                }}>
                    <p> {<Icon name='building outline' size='large' />}CURRENT PROJECTS</p>
                </div>
                <div className="option"
                onClick={() => {
                    toggleTab("about");
                    handleMenu();
                    }}>
                    <p> {<Icon name='info circle' size='large' />} OUR TEAM</p>
                </div>
                <div className="option"
                onClick={() => {
                    toggleTab("contact");
                    handleMenu();
                }}>
                    <p> {<Icon name='envelope' size='large' />}CONTACT</p>
                </div>
                <div className="button"
                onClick={handleMenu}>
                    <Button variant="contained" onClick={handleMenu}
                    > <Icon name='trash alternate' size='large' /></Button>
                </div>
            </div> : null
            }

        </>

    );
}

export default Header;