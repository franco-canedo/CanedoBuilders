import { useEffect, useState } from 'react';
import './CurrentProjects.css';
import house5 from '../photos/house5.jpg';
import house7 from '../photos/house7.jpg';


function CurrentProjects() {
    return (
        <div className="gallery-master-container">
            <div>
                <img src={house5} className="project-img"></img>
            </div>
            <div>
                <img src={house7} className="project-img"></img>
            </div>
        </div>

    );
}

export default CurrentProjects;