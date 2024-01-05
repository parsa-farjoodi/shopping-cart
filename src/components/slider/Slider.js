import React from 'react'
import "./Slider.css"
import { Container, Carousel } from 'react-bootstrap'

export default function Slider() {
    return (
        <Container fluid>
            <Carousel data-bs-theme="dark" className='carouserSlider'>
                <Carousel.Item className='carousolItem'>
                    <img
                        className="d-block w-100"
                        src="./img/crausol1.jpg"
                        alt="First slide"
                    />
                    <div className='explaination'>
                        <h3>PROVIDING INTERIOR EXTERIOR</h3>
                        <h1>Painting Services</h1>
                        <button className='moreAbout'>MORE ABOUT US</button>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./img/crausol2.jpg"
                        alt="Second slide"
                    />
                    <div className='explaination'>
                        <h3>PROVIDING INTERIOR EXTERIOR</h3>
                        <h1>Painting Services</h1>
                        <button className='makeAppoint'>MAKE AN APPOINTMENT</button>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./img/crausol3.jpg"
                        alt="Third slide"
                    />
                    <div className='explaination'>
                        <h3>QUALITY PAINTING MADE EASY</h3>
                        <h1>Call Us Today (719) 445-2808</h1>
                        <div className='buttons'>
                            <button className='emergency'>NEED EMERGENCY SERVICES?</button>
                            <button className='moreAbout'>MORE ABOUT US</button>
                        </div>
                        <p className='detail'>OUR EXPERTS WILL SLOVE THEM IN NO TIME.</p>
                    </div>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}
