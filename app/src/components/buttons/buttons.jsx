/**
 *  07.07.2022
 *  Create by Kuznetsov Leonid
 *  Orlan1211@yahoo.com
 */

import React from "react";
import './style.css';
import { Button } from "react-bootstrap";

export const CustomBtn = (props) => {
    const TITLE = props.TITLE
    const HREF  = props.HREF
    return (
        <>
            <Button 
                className = "CustomButton"
                href = {HREF}
            >
                <p className = "CustomButton_title">{TITLE}</p>
            </Button>
        </>
    );
}