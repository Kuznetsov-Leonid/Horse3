import React from "react";
import './style.css';
import { Spinner } from "react-bootstrap";
import PreloadLogo from '../../img/PreloadLogo.jpg';

const Prelouder = () => {
    
    return(
        <>
            <div id = "page-preloader" className = "preloader">
                <div className="loader">
                    <Spinner animation="grow" className = "load_color" />
                    <img 
                        className = "preloadLogo"
                        src       = {PreloadLogo} 
                        alt       = "ksk" 
                    />
                </div>
            </div>
        </>
    );
}
export default Prelouder