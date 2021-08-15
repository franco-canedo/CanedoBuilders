import { useEffect, useState } from 'react';
import './Header.css';


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

    const [menu, setMenu] = useState("mobile-menu-hidden");

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
        } else if (menu === "mobile-menu-hidden") {
            setMenu("mobile-menu-in")
        }
    }

    return (
        <>
            <div className="header">
                <div className="logo-div"
                onClick={() => toggleTab("home")}>
                    <h2>CANEDO</h2>
                </div>
                <div className="tabs-container">

                    {
                        width < 550 ?
                            <div className="button-div">
                                <div onClick={handleMenu}>MENU</div>
                            </div> :
                            <>
                                <div className="tab-div"
                                onClick={() => toggleTab("gallery")}>
                                    <h3>GALLERY</h3>
                                </div>
                                <div className="tab-div"
                                onClick={() => toggleTab("current projects")}>
                                    <h3>CURRENT PROJECTS</h3>
                                </div>
                                <div className="tab-div"
                                onClick={() => toggleTab("about")}>
                                    <h3>ABOUT</h3>
                                </div>
                                <div className="tab-div"
                                onClick={() => toggleTab("contact")}>
                                    <h3>CONTACT</h3>
                                </div>
                            </>
                    }

                </div>
            </div>
            <div className={menu}>
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
        </>

    );
}

export default Header;