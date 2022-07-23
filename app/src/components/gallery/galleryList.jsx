import React from "react";
import './style.css';
import { GalleryPrototype } from "./galleryPrototype";
import { DataServices } from '../../data/DataServices';

const GalleryList = () => {
    return(
        <div>
            <GalleryPrototype
                data  = {DataServices} 
                title = 'Галлерея'
                className = 'Services'
            />
        </div>
    );
}


export default GalleryList