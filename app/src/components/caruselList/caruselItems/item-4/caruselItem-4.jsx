import React from "react";
import './style.css';
import { Container, Card, CardGroup } from 'react-bootstrap';
import { CustomBtn } from '../../../buttons/buttons';
import Asset from './equestrian.png';

const CaruselItem_4 = () => {
    return(
        <>
            <div className = "CaruselItem_4">
                <Container>
                    <CardGroup>
                        <Card className = "CaruselItem_4_conent link3_cont">
                            <h1><b>Индивидуальные занятия по&nbsp;верховой езде</b></h1>
                            <br />
                            <div className = "CaruselItem_2_conent_btn">
                                <CustomBtn 
                                    TITLE   = 'Подробнее'
                                />
                            </div>
                        </Card>
                        <Card className = "CaruselItem_4_conent ">
                            <img src = {Asset} className = "CaruselItem_3_conent_img"/>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        </>
    );
}

export default CaruselItem_4