import React from 'react'
import "./AboutUs.css"
import { Container, Row, Col } from 'react-bootstrap'
import CheckIcon from '@mui/icons-material/Check';

export default function AboutUs() {
    return (
        <Container fluid>
            <Row>
                <Col sm={12}>
                    <div className='aboutUs' style={{ backgroundImage: "url(/img/aboutus.jpg)" }}>
                        <div className='sections'>
                            <div className='aboutUsDetails'>
                                <div className='aboutUsDetailsTitle'>
                                    <h2>About Us</h2>
                                </div>
                                <div className='aboutUsDetailsImg'>
                                    <img src='./img/services.webp' />
                                </div>
                                <div className='aboutUsDetailsParagraf'>
                                    <p>When you are looking for 100% dependability, there is no denying the positive facts of our business.</p>
                                </div>
                            </div>
                            <div className='choises'>
                                <div className='choise'>
                                    <div className='check'>
                                        <CheckIcon className='choiseIcon' />
                                    </div>
                                    <div className='choiseDetails'>
                                        <div className='choiseTitle'>
                                            <h3>Commercial Painting</h3>
                                        </div>
                                        <div className='choiseParagraf'>
                                            <p>If you are doing your residence makeover and want to renew the color of walls or facade, we have great experts who work carefully and are highly talented painters.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='choise'>
                                    <div className='check'>
                                        <CheckIcon className='choiseIcon' />
                                    </div>
                                    <div className='choiseDetails'>
                                        <div className='choiseTitle'>
                                            <h3>Commercial Painting</h3>
                                        </div>
                                        <div className='choiseParagraf'>
                                            <p>We have experience in painting any surface from new constructions to cabinets in commercial properties  there is no denying the positive facts of our business.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='choise'>
                                    <div className='check'>
                                        <CheckIcon className='choiseIcon' />
                                    </div>
                                    <div className='choiseDetails'>
                                        <div className='choiseTitle'>
                                            <h3>Commercial Painting</h3>
                                        </div>
                                        <div className='choiseParagraf'>
                                            <p>Our experts have developed their skills while working on retail stores, schools,  positive facts of our business. apartment complexes, private residences and offices.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
