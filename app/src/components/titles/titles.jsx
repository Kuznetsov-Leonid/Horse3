import React from "react";
import './style.css';

export const Title = (props) => {
    const TITLE = props.TITLE
    return(
        <>
            <div className = "Title_box">
                <h1>{TITLE}</h1>
            </div>
        </>
    );
}