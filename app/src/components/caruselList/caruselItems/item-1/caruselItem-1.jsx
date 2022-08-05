import React from "react";
import './style.css';
import { CustomBtn } from '../../../buttons/buttons';
import { Container, Card } from 'react-bootstrap';
import Asset from './Asset.png';

const CaruselItem_1 = () => {
    return(
        <>
            <div className = "CaruselItem_1">
                <Container>
                    <Card className = "CaruselItem_1_content">
                        <h1><b>КОННЫЙ КЛУБ</b></h1>
                        <h3><b>приглашает на&nbsp;постой лошадей <br />любого возвраста</b></h3>
                        <br />
                        <img src={Asset}/>
                        <br />
                        <CustomBtn 
                            TITLE   = 'Подробнее'
                        />
                    </Card>
                </Container>
            </div>
        </>
    );
}

export default CaruselItem_1