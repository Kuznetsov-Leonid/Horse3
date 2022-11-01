import React from "react";
import './style.css';
import { Container, Card, CardGroup } from 'react-bootstrap';
import { CustomBtn } from '../../../buttons/buttons';
import Asset from './drawkit-transport-scene-31.png';


const CaruselItem_2 = () =>{
    return (
        <>
            <div className = "CaruselItem_2">
                <Container>
                    <CardGroup>
                        <Card className = "CaruselItem_2_conent">
                            <h3><b>Экскурсии в конюшню по выходным</b></h3>
                            <br />
                            <h1><b>СКИДКА 20%</b></h1>
                            <br />
                            <div className = "CaruselItem_2_conent_btn">
                                <CustomBtn 
                                    TITLE   = 'Подробнее'
                                />
                            </div>
                        </Card>
                        <Card className = "CaruselItem_2_conent">
                            <img src = {Asset}/>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        </>
    );
}

export default CaruselItem_2