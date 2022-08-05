import React from "react";
import './style.css';
import { Container, Card, CardGroup } from 'react-bootstrap';
import Asset from './Group1.png';
import { SocialLink } from "../../../contacts/contacts";

const CaruselItem_3 = () => {
    return(
        <>
            <div className = "CaruselItem_3">
                <Container>
                    <CardGroup>
                        <Card className = "CaruselItem_3_conent">
                            <img src = {Asset} className = "CaruselItem_3_conent_img"/>
                        </Card>
                        <Card className = "CaruselItem_3_conent link3_cont">
                            <h1>Мы в соцсетях</h1>
                            <div className = "CaruselItem_3_conent_link">
                                <SocialLink/>
                            </div>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        </>
    );
}

export default CaruselItem_3