import React from "react";
import './style.css';
import { Button, Container, CardGroup, Card } from 'react-bootstrap';
import { Title } from "../titles/titles";
import Rider from '../../img/Rider.png';
import Point from '../../img/Point.png';
import SmartPhone from '../../img/SmartPhone.png';
import Chat from '../../img/Chat.png';
import Vk from '../../img/VkWhite.png';
import Tel from '../../img/TelWhite.png';

const Iframe = () => {
    return(
        <>
            <div style = {{'height':'100%'}} dangerouslySetInnerHTML = {{ __html: "<iframe src='https://yandex.ru/map-widget/v1/-/CCUBzOsocC' class='mapContact' frameborder='1' allowfullscreen='true'></iframe>"}} />
        </>
    );
}

export const SocialLink = () => {
    return (
        <>
            <Button 
                variant   = 'link'
                target    = '_blank'
                href      = 'https://vk.com/ksk_armada'
                className = 'linkIco'
            >
                <img 
                    src       = {Vk} 
                    alt       = 'VKontacte'
                    className = 'vkontacte'
                />
            </Button>
            <Button 
                variant   = 'link'
                target    = '_blank'
                href      = 'https://t.me/ksk_armada'
                className = 'linkIco'
            >
                <img 
                    src       = {Tel}     
                    alt       = 'Telegram'
                    className = 'telegram' 
                />
            </Button>
        </>
    );
}

export const Contacts = () => {
    const Obj = {
        alt      : 'KSK Armada',
        phone    : 'phone',
        mail     : 'mail',
        mapPoint : 'map point'
    };
    return(
        <>
            <div className = "Contacts">
                <Container>
                    <CardGroup>
                        <Card className = "CardSetting">
                            <Title TITLE = 'Наши контакты'/>
                        </Card>
                    </CardGroup>
                    <CardGroup>
                        <Card className = "CardSetting">
                            <table>
                                <tr >
                                    <td>
                                        <img 
                                            src       = {Chat} 
                                            alt       = {Obj.mail} 
                                            className = 'Footer_icon Chat noneIcon'
                                        />
                                    </td>
                                    <td>
                                        <h6 style = {{'marginTop':'20px'}}><b>Эл. почта:</b></h6>
                                        <h5>ksk_armada@Yahoo.com</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img 
                                            src       = {SmartPhone} 
                                            alt       = {Obj.phone} 
                                            className = 'Footer_icon SmartPhone noneIcon'
                                        />
                                    </td>
                                    <td>
                                        <h6 style = {{'marginTop':'20px'}}><b>Наш номер:</b></h6>
                                        <h5>+7 (967) 017-99-63</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img 
                                            src       = {Point} 
                                            alt       = {Obj.mapPoint} 
                                            className = 'Footer_icon Point noneIcon'
                                        />
                                    </td>
                                    <td>
                                        <h6 style = {{'marginTop':'20px'}}><b>Наш адрес:</b></h6>
                                        <h5>Новорязанское шоссе, дер. Дурниха Раменского района владение 79, 25&nbsp;км от&nbsp;МКАД.</h5>
                                    </td>
                                </tr>
                            </table>
                            <hr />
                            <div style={{'textAlign':'center'}}>
                                <h1><b>Мы в соцсетях</b></h1>
                                <SocialLink/>
                            </div>
                            <div style={{'textAlign':'center', 'margin':'20px'}}>
                                <h6>СТАТИСТИКА</h6>
                                <Button 
                                    className = "pg-0" 
                                    variant   = "link"  
                                    href      = "https://webmaster.yandex.ru/siteinfo/?site=ksk-armada.ru" 
                                    target    = '_blank'
                                >
                                    <img 
                                        className = 'iconX' 
                                        alt       = 'iconX' 
                                        src       = "https://yandex.ru/cycounter?ksk-armada.ru&theme=dark&lang=ru"
                                    />
                                </Button>
                            </div>
                        </Card>
                        <Card className = 'CardSetting none'>
                            <img 
                                src       = {Rider} 
                                alt       = {Obj.alt} 
                                className = 'Rider'
                            />
                        </Card>
                    </CardGroup>
                    <CardGroup>
                        <Card 
                            className = 'CardSetting' 
                            style     = {{'height':'550px'}}
                        >
                            <Iframe/>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        </>
    );
}