/**
 *  07.07.2022
 *  Create by Kuznetsov Leonid
 *  Orlan1211@yahoo.com
 */

import React from "react";
import './style.css';
import Logo from '../../img/HeaderLogo.png';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { CustomBtn } from "../buttons/buttons";

export const Header = () => {
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
                    <Navbar.Brand 
                            href = '/'
                            className='Header_layout'
                        >
                        <img 
                            src       = {Logo}
                            alt       = {'KSK ARMADA'}
                            className = 'Header_logo' 
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls = 'responsive-navbar-nav'/>
                    <Navbar.Collapse id = 'responsive-navbar-nav'>
                    <div style = {{'margin':'auto'}}>
                        <Nav>
                            <NavDropdown  eventKey  = {1} title = "Услуги" id = "navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Список услуг</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action4">Лошади на продажу</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link 
                                eventKey  = {2} 
                                href      = '#section3'
                            >
                                Контакты
                            </Nav.Link>
                            <NavDropdown  eventKey  = {3} title = "О нас" id = "navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">О конюшне</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action4">Галлерея</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action4">Политика конфеденциальности</NavDropdown.Item>
                            </NavDropdown> 
                        </Nav>
                    </div>
                    <Nav>
                        <CustomBtn TITLE = 'Оналайн запись'/>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
