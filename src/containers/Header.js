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
                <div onClick={() => toggleTab("home")}>
                    <h1>Canedo Builders</h1>
                </div>
                <div className="tabs-container">

                    {
                        width < 550 ? <div onClick={handleMenu}>Button</div> :
                            <>
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