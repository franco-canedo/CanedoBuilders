import { useEffect, useState } from 'react';
import './CurrentProjects.css';


//////// components
import EnchantedLane from '../individualProjects/EnchantedLane';
import ProspectAve from '../individualProjects/ProspectAve';
import W51 from '../individualProjects/W51';
import Ruth from '../individualProjects/Ruth';
import E9 from '../individualProjects/E9';




//////// Unit Page

import ProspectA from '../units/ProspectA';



import load from '../gifs/buffer.gif';


import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Icon } from 'semantic-ui-react'
import { Progress } from 'semantic-ui-react';
import "react-image-gallery/styles/css/image-gallery.css";

import AOS from 'aos';
import 'aos/dist/aos.css';



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



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    imageList: {
        width: 500,
        height: 450,
    },
}));

function CurrentProjects({ normal }) {
    const [width, setWidth] = useState(window.innerWidth);
    const [unit, setUnit] = useState("");

    const [buttonIcon] = useState('mars');
    const [progressIcon] = useState('calendar alternate outline');

    useEffect(() => {
        setUnit("normal");
        window.scrollTo(0, 0);
        AOS.init({ duration: 1000 });
        const debouncedHandleResize = debounce(function handleResize() {
            setWidth(window.innerWidth)
        }, 1000)

        window.addEventListener('resize', debouncedHandleResize)

        return _ => {
            window.removeEventListener('resize', debouncedHandleResize)
        }
    }, []);

    const [loading, setLoading] = useState(true);

    const timer = () => {
        setInterval(() => setLoading(false), 6000);
    }

    const handleUnitSelect = (unit) => {
        // setUnit(unit);
    }


    return (
        <>
            {

                                    <div
                                        className="gallery-master-container">
                                        <div className="projects-container">

                                            {timer()}
                                           
                                            <div data-aos="fade-right" data-aos-once="true">
                                                <EnchantedLane loading={loading} load={load} />
                                            </div>
                                            <div data-aos="fade-right" data-aos-once="true">
                                                <Ruth loading={loading} load={load} />
                                            </div>
                                            <div data-aos="fade-right" data-aos-once="true">
                                                <E9 loading={loading} load={load} />
                                            </div>
                                           
                                        
                                            
                                            
                                        </div>
                                    </div>
            }
        </>
    );
}

export default CurrentProjects;