import React from "react";
import { Carousel } from 'react-bootstrap';
import './style.css';
import CaruselItem_1 from "./caruselItems/item-1/caruselItem-1";
import CaruselItem_2 from "./caruselItems/item-2/caruselItem-2";
import CaruselItem_3 from "./caruselItems/item-3/caruselItem-3";
import CaruselItem_4 from "./caruselItems/item-4/caruselItem-4";

const CaruselList = () => {
    return(
        <div className = "CaruselList">
            <div className = "CaruselList_lay">
                <Carousel>
                    <Carousel.Item>
                        <CaruselItem_1/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CaruselItem_2/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CaruselItem_3/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CaruselItem_4/>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default CaruselList