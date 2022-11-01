/**
 * create by Kuznetsov Leonid
 * 17.07.2022
 */

import React, {useState} from 'react';
import './style.css';
import { Container, Card, Row, Col, Button, Modal } from 'react-bootstrap';
import { Title } from '../titles/titles';
import { CastomCardBtn } from '../buttons/buttons';


/**
 * 
 * @param {*} props 
 * @returns 
 */
export const Store = (props) => {

    const StoreItem = (props) => {
        const [modalShow, setModalShow] = useState(false);
        const ItemTitle   = props.ItemTitle
        const ItemContent = props.ItemContent
        const ItemImg     = props.ItemImg

        return(
            <div>
                <Col>
                    <Card className = 'mb-2 text-white CardSetting' >
                        <Card.Img
                            variant   = 'top' 
                            src       = {ItemImg.img} 
                            alt       = {ItemTitle.title}
                            className = 'CardImg'
                        />
                        <Card.ImgOverlay>
                        <Card.Title className = 'title'>
                            <b>
                                {ItemTitle.title}
                            </b>
                        </Card.Title>
                        <div className = 'btnCardLay'>
                            <CastomCardBtn 
                                TITLE     = "Подробнее"
                                onClick   = {() => setModalShow(true)}
                            />
                        </div>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <StoreModal
                    show   = {modalShow}
                    onHide = {() => setModalShow(false)}
                    title  = {ItemTitle.title}
                    body   = {ItemContent.content}
                />
            </div>
        );
    }

    const StoreList = (props) => {
        const data  = props.data
        const items = data.map((item) =>{
            return <StoreItem 
                key          = {item.id}
                ItemTitle    = {item}
                ItemContent  = {item}
                ItemImg      = {item}
            />
        })
        return(
            <div>
                <Row 
                    xs        = {1} 
                    md        = {3} 
                    className = 'g-4'
                >
                    {items}     
                </Row>
            </div>
        );
    }
    
    return(
        <div className = {props.className}>
            <Container>
                <div className = 'Service_bg_lay'>
                    <Title TITLE = {props.title} />
                </div>
                <StoreList data = {props.data} />
            </Container>
        </div>
    );
}

/**
 * 
 * @param {*} props 
 * @returns 
 */
const StoreModal = (props) => {
    const onHide = props.onHide
    const title  = props.title
    const body   = props.body
    return(
        <>
            <Modal
            {...props}
            size            = 'lg'
            aria-labelledby = 'contained-modal-title-vcenter'
            centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
                </Modal.Header>
                    <Container>
                        {body}
                    </Container>
                <Modal.Footer>
                    <Button onClick = {onHide}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
