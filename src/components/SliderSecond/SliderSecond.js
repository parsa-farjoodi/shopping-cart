import React from 'react'
import "./SliderSecond.css"
import { Container, Carousel, Row, Col } from 'react-bootstrap'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Members } from '../../datas';

export default function SliderSecond() {
    return (
        <Container >
            <Row>
                <Col sm={12}>
                    <div className='sliderSecondContainer'>
                        <div className='secondSliderTitle'>
                            <h2>What People Think About Us</h2>
                        </div>
                        <div>
                            <img src='./img/services.webp' />
                        </div>
                        <div className='sliderSecondCarousel'>
                            <Carousel data-bs-theme="dark" className='carouselSlider'>
                                {Members.map(member => (
                                    <Carousel.Item className='carousel'>
                                        <div className="carouselPicture">
                                            <div className='carouselImg'>
                                                <img
                                                    src={member.img}
                                                    alt="First slide"
                                                />
                                            </div>
                                        </div>
                                        <div className='carouselIcon'>
                                            <FormatQuoteIcon className='quoteIcon' />
                                        </div>
                                        <div className='carouselParagraph'>
                                            <p>
                                                It was my first time to request the assistance of professional maintenance team as previously I used to do everything by myself. They painted my facade <br /> carefully and my wife is very pleased that it was done so delicate and fast.
                                            </p>
                                        </div>
                                        <div className='job'>
                                            <h4>{member.name}</h4>
                                            <span>{member.job}</span>
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
