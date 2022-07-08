import React from "react";
import './style.css';
import Pach from '../../img/Pach.png';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { CustomBtn } from "../../components/buttons/buttons";

const Page404 = () => {
    return(
        <>
            <div className = "page404">
                <Container>
                    <div className = "page404_box">
                        <Row>
                            <Col>
                                <div className = 'Page404_img'>
                                    <img 
                                        src       = {Pach} 
                                        alt       = 'KSK Armada' 
                                    />
                                </div>
                            </Col>
                            <Col>
                                <div className = 'Page404_txt'>
                                    <h1>404</h1>
                                    <h3>Увы... Что-то пошло не так...</h3>
                                    <h2>Попробуем начать всё сначала</h2>
                                </div>
                                <CustomBtn 
                                    TITLE = 'На главную' 
                                    HREF = '/'
                                />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Page404
