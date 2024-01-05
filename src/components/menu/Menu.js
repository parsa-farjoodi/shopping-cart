import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Menu.css"

export default function Menu() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className='nav'>
                        <Container>
                            <Row>
                                <Col sm={12} md={6}>
                                    <div className='callAndLocation'>
                                        <div className='call'>
                                            <MailOutlineIcon className='mailIcon' />
                                            Call: <a href='#'>(719) 445-2808</a>
                                        </div>
                                        <div className='location'>
                                            <LocationOnIcon className='locationIcon' />
                                            4578 Marmora Road, Glasgow
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={6}>
                                    <div className='socialMedia'>
                                        <FacebookIcon className='facebookIcon' />
                                        <TwitterIcon className='twitterIcon' />
                                        <YouTubeIcon className='youtubeIcon' />
                                        <InstagramIcon className='instagramIcon' />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col sm={12} md={5}>
                        <div className='logo'>
                            <a href='#'><img src='./img/Logo.webp' /></a>
                            <span className='spanLogo'>Painting Services</span>
                        </div>
                    </Col>
                    <Col sm={12} md={7}>
                        <div className='mainMenu'>
                            <ul className='menu'>
                                <li className='active'>HOME</li>
                                <li>ABOUT</li>
                                <li>SERVICES</li>
                                <li>PROJECTS</li>
                                <li>TEAM</li>
                                <li>CONTACTS</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
