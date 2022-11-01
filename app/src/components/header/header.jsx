/**
 *  07.07.2022
 *  Create by Kuznetsov Leonid
 *  Orlan1211@yahoo.com
 */

import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';
import { CustomBtn } from "../buttons/buttons";
import FeedBackFormModal from "../modal/feedBackFormModal";
import Logo from '../../img/HeaderLogo.png';
import './style.css';

export const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    return (
        <>
            <Navbar
                collapseOnSelect 
                sticky    = "top"
                variant   = 'dark' 
                expand    = 'lg'
                className = 'Header'
                style     = {{'zIndex':'1'}}
            >
                <Container>
                    <Navbar.Brand className='Header_layout'>
                        <NavLink to="/">
                            <img 
                                src       = {Logo}
                                alt       = {'KSK ARMADA'}
                                className = 'Header_logo' 
                            />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls = 'responsive-navbar-nav'/>
                    <Navbar.Collapse id = 'responsive-navbar-nav'>
                    <div style = {{'margin':'auto'}}>
                        <Nav>
                            <NavDropdown 
                                eventKey  = {1} 
                                title     = "Услуги" 
                                id        = "navbarScrollingDropdown" 
                                className = "nav-link"
                            >
                                <NavDropdown.Item>
                                    <NavLink 
                                        to        = "/PageServices" 
                                        className = 'item_link'
                                        >
                                            Список услуг
                                        </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <NavLink 
                                        to        = "/StoreHorse" 
                                        className = "item_link"
                                    >
                                        Лошади на продажу
                                    </NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link eventKey  = {2}> 
                                <NavLink 
                                    to        = "/PageContacts" 
                                    className = "nav-link"
                                >
                                    Контакты
                                </NavLink>
                            </Nav.Link>
                            <NavDropdown  
                                eventKey  = {3} 
                                title     = "О нас" 
                                id        = "navbarScrollingDropdown" 
                                className = "nav-link"
                            >
                                <NavDropdown.Item>
                                    <NavLink 
                                        to        = "/AboutUs" 
                                        className = "item_link"
                                    >
                                        О конюшне
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <NavLink 
                                        to        = "/Gallery" 
                                        className = "item_link"
                                    >
                                        Галлерея
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <NavLink 
                                        to        = "/AboutSite" 
                                        className = "item_link"
                                    >
                                        О сайте
                                    </NavLink>
                                </NavDropdown.Item>
                            </NavDropdown> 
                        </Nav>
                    </div>
                    <Nav>
                        <CustomBtn 
                            TITLE   = 'Оналайн запись'
                            onClick = {handleShow}
                        />
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <FeedBackFormModal 
                show   = {show} 
                onHide = {handleClose}
            />
        </>
    );
}
