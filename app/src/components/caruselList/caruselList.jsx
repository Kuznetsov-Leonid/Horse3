import React from "react";
import { Carousel } from 'react-bootstrap';
import CaruselItem_1 from "./caruselItems/item-1/caruselItem-1";

const CaruselList = () => {
    return(
        <div>
            <Carousel>
                <Carousel.Item>
                    <CaruselItem_1/>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CaruselList