/**
 *  13.07.2022
 *  Create by Kuznetsov Leonid
 *  Orlan1211@yahoo.com
 */

import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";

export const CookieBaner = () => {

    return(
        <>
                <div className = 'cookie-container'>
                    <Container>
                        <p>
                            Оставаясь на&nbsp;Веб-сайте, вы&nbsp;принимаете соглашение о&nbsp;<a href="#">политике конфеденциальности</a> и&nbsp;использования <a href="#">файлов cookie</a>.
                        </p>
                        <button className = "cookie-btn">
                            <b>Ok</b>
                        </button>
                    </Container>
                </div>
        </>
    );
}