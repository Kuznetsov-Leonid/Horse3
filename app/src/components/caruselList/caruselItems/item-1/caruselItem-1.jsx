import React from "react";
import './style.css';
import { CustomBtn } from '../../../buttons/buttons';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Asset from './Asset.png';

const CaruselItem_1 = () => {
    return(
        <>
            <div className = "CaruselItem_1">
                <div className = "CaruselItem_1_bg">
                    <Container>
                        <div className = "baner_content">
                            <div className = "baner_content_title">
                                <h1><b>Конный клуб</b></h1>
                                <h3><b>приглашает на&nbsp;постой лошадей любого пола и&nbsp;возвраста</b></h3>
                            </div>
                            <div className = "baner_content_img">
                                <img src={Asset} alt="none" className = "baner_content_img_iner"/>
                            </div>
                            <div className = "baner_content_btn">
                            <CustomBtn 
                                TITLE   = 'Подробнее'
                            />
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default CaruselItem_1