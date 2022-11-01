/**
 *  07.07.2022
 *  Create by Kuznetsov Leonid
 *  Orlan1211@yahoo.com
 */

import React from "react";
import './style.css';

export const Footer = () => {

    let date = new Date();
    let year = date.getFullYear();

    return(
        <>
            <div className = "footer">
                <p className = 'footer-copir-txt'><b>&copy;&ensp;E.S.C.&ensp;ARMADA&ensp;{year}</b></p>
                <p className = 'footer-copir-txt'><b>v. 1.0.1</b></p>
            </div>
        </>
    );
}