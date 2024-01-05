import React from 'react'
import "./BannerSecond.css"
import { Container, Row, Col } from 'react-bootstrap'

export default function BannerSecond() {
    return (
        <Container fluid>
            <Row>
                <Col sm={12}>
                    <div className='secondBanner' style={{ backgroundImage: "url(/img/bannerSecond.jpg)" }}>
                        <div className='title'>
                            <h2>Get Started Now, Schedule Your Free Estimate</h2>
                            <p>We have experience in painting any surface from new constructions to cabinets in commercial properties</p>
                        </div>
                        <div className='button'>
                            <button>MAKE AN APPOINTMENT</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
