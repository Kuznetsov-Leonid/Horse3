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
                {...props}
                className = "CustomButton"
                href      = {HREF}
                onClick   = {props.onClick}
                disabled  = {props.disabled}
                type      = {props.type}
                value     = {props.value}
                id        = {props.id}
            >
                <p className = "CustomButton_title">{TITLE}</p>
            </Button>
        </>
    );
}

export const CastomCardBtn = (props) => {
    const TITLE = props.TITLE
    const HREF  = props.HREF
    return(
        <Button
            {...props}
            className = 'CastomCardBtn'
            href      = {HREF}
            onClick   = {props.onClick}
            disabled  = {props.disabled}
            type      = {props.type}
            value     = {props.value}
            id        = {props.id}
        >
            <p className = "CustomButton_title">{TITLE}</p>
        </Button>
    );
}