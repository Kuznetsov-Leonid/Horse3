import React, {useState} from 'react';
import { Container, Card, Row, Col, Button, Modal } from 'react-bootstrap';
import { Title } from '../titles/titles';

export const GalleryPrototype = (props) => {

    const GalleryItem = (props) =>{
        const [modalShow, setModalShow] = useState(false);
        const ItemImg = props.ItemImg

        return(
            <div>
                <Col>
                    <Card className = 'mb-2 text-white CardSetting'>
                        <Card.Img
                            variant   = 'top' 
                            className = 'CardImg gallery_card_pointer'
                            src       = {ItemImg.img}
                            onClick   = {() => setModalShow(true)}
                        />
                    </Card>
                </Col>
                <GalleryItemModal
                    show   = {modalShow}
                    onHide = {() => setModalShow(false)}
                    body   = {ItemImg.img}
                />
            </div>
        );
    }

    const GalleryList = (props) =>{
        const data  = props.data
        const items = data.map((item) =>{
            return <GalleryItem 
                key          = {item.id}
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
                <GalleryList data = {props.data} />
            </Container>
        </div>
    );
}

const GalleryItemModal = (props) => {
    const onHide = props.onHide
    const body   = props.body
    return(
        <Modal
            {...props}
            size            = 'lg'
            aria-labelledby = 'contained-modal-title-vcenter'
            centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                    <Container>
                        <img
                            className = 'gallery_modal_img'
                            src       = {body} 
                            alt       = "none" 
                        />
                    </Container>
                <Modal.Footer>
                    <Button onClick = {onHide}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
    );
}