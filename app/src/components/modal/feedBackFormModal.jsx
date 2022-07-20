import React, { useRef } from 'react';
import './style.css';
import { useForm } from 'react-hook-form';
import { Container, Form, FormGroup, Modal } from "react-bootstrap";
import { CustomBtn } from "../buttons/buttons";
import PrivacyPolicy from '../../pages/pagePrivicy/privacyPolicy';

const FeedBackForm = () => {
    const form = useRef();
    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onTouched"
    }); 


    const onSubmit = (data) => {
        //alert(JSON.stringify(data));
        
        //reset()
    }

    return(
        <>
        <div >
            <Container>
                <h1><b>Онлайн запись</b></h1>
                <br />
                <Form ref={form} onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group  
                        className = "mb-3" 
                        controlId = "formBasicEmail"
                    >
                        <Form.Label>Имя*</Form.Label>
                        <Form.Control 
                            {...register("name", {
                                required: "Имя обязательно к заполнению",
                            })}
                            type        = "name" 
                            placeholder = "Ваше имя" 
                            name        = "name"
                        />
                        <br/>
                        <Form.Label>Email*</Form.Label>
                        <Form.Control 
                            {...register("email", {
                                required: "Email обязателен к заполнению",
                                pattern: {
                                    value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                    message: "Некорректный email"
                                }
                            })}
                            type        = "email" 
                            placeholder = "Ваш email" 
                            name        = "email"
                        />
                        <br />
                        <Form.Label>Номер телефона*</Form.Label>
                        <Form.Control
                            {...register("tel", {
                                required: "Номер телефона обязателен к заполнению",
                                pattern: {
                                    value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){8,14}(\s*)?$/,
                                    message: "Некорректный номер"
                                }
                            })}
                            type        = "phone" 
                            placeholder = "Ваш номер телефона" 
                            name        = "tel"
                        />
                        <br />
                        <Form.Label>Сообщение</Form.Label>
                        <Form.Control
                            {...register("message")}
                            type        = "messege" 
                            placeholder = "Ваше сообщение" 
                            as          = "textarea" 
                            name        = "message"  
                            rows        = {5}
                        />
                        <br />
                        <FormGroup controlId="formBasicCheckbox">
                            <Form.Check
                                {...register("checkbox1",{
                                    required: true
                                })} 
                                type  = "checkbox" 
                                label = "Я согласен получать сообщения от КСК Армада*" 
                                name  = "checkbox1"
                            />
                            <br />
                        
                            <div className = 'checkbox_2'>
                                <Form.Check
                                    {...register("checkbox2",{
                                        required: true
                                    })} 
                                    type = "checkbox"
                                    name = "checkbox2"
                                />
                                &nbsp; Согласие на обработку&nbsp;<a href='/'>персональных данных</a>*
                            </div>
                        </FormGroup>
                        
                        <br />
                        <div style={{color:'red'}}>{errors?.tel && <p>{errors?.tel?.message || "Error!"}</p>}</div>
                        <div style={{color:'red'}}>{errors?.name && <p>{errors?.name?.message || "Error!"}</p>}</div>
                        <div style={{color:'red'}}>{errors?.email && <p>{errors?.email?.message || "Error!"}</p>}</div>
                    </Form.Group>
                    <div className = 'btn_aria_form'>
                        <CustomBtn 
                            disabled = {!isValid}
                            TITLE    = 'Отправить'
                            type     = "submit"
                            id       = "send" 
                        />
                    </div>
                </Form>
            </Container>
        </div>
        </>
    );
}



const FeedBackFormModal = (props) => {
    return(
        <>
            <Modal
                {...props}
                aria-labelledby = "contained-modal-title-vcenter"
                centered
                show            = {props.show} 
                onHide          = {props.onHide}
            >
                <div className = 'FeedBackFormModal'>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <FeedBackForm />
                </div>
            </Modal>
        </>
    );
}

export default FeedBackFormModal