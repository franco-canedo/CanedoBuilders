import { useEffect, useState } from 'react';
import './CurrentProjects.css';


//////// components
import Bunche from '../individualProjects/Bunche';
import East from '../individualProjects/2102E';
import EnchantedLane from '../individualProjects/EnchantedLane';
import ProspectAve from '../individualProjects/ProspectAve';
import BrentwoodSt from '../individualProjects/Brentwood';

////// Bunche 
import BuncheCarousel from '../components/BuncheCarousel';
import buncheMap from '../bunche/buncheMap.png';

//////// Unit Page
import E21UnitA from '../units/2102A';
import E21UnitB from '../units/2102B';
import BuncheA from '../units/BuncheA';
import BuncheB from '../units/BuncheB';
import ProspectA from '../units/ProspectA';



import load from '../gifs/buffer.gif';


import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Icon } from 'semantic-ui-react'
import { Progress } from 'semantic-ui-react';
import "react-image-gallery/styles/css/image-gallery.css";



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
                unit === "E21UnitA" ? <E21UnitA handleUnitSelect={handleUnitSelect} /> :
                    unit === "E21UnitB" ? <E21UnitB handleUnitSelect={handleUnitSelect} /> :
                        unit === "BuncheA" ? <BuncheA handleUnitSelect={handleUnitSelect} /> :
                            unit === "BuncheB" ? <BuncheB handleUnitSelect={handleUnitSelect} /> :
                                unit === "ProspectAve" ? <ProspectA handleUnitSelect={handleUnitSelect}/> :

                                <div
                                    className="gallery-master-container">
                                    <div className="projects-container">

                                        {timer()}

                                        <East setUnit={setUnit}
                                            loading={loading} load={load} />
                                        <Bunche setUnit={setUnit}
                                            loading={loading} load={load} />
                                        <ProspectAve setUnit={setUnit} loading={loading} load={load} />
                                        <EnchantedLane loading={loading} load={load} />
                                        <BrentwoodSt loading={loading} load={load}/>
                                    </div>
                                </div>
            }
        </>
    );
}

export default CurrentProjects;