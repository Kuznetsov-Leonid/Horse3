/**
 *  07.07.2022
 *  Create by Kuznetsov Leonid
 *  Orlan1211@yahoo.com
 */

import React from "react";
import './style.css';

export const CustomBtn = (props) => {
    const TITLE = props.TITLE
    return (
        <>
            <button className = "CustomButton">
                <p className = "CustomButton_title">{TITLE}</p>
            </button>
        </>
    );
}