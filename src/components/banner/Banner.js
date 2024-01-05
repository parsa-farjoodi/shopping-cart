import React from 'react'
import "./Banner.css"
import { Container, Row, Col } from 'react-bootstrap'

export default function Banner() {
    return (
        <Container fluid>
            <Row>
                <Col sm={12}>
                    <div className='banner'>
                        <a href='#' className='bannerImg'>
                            <img src='./img/services2.webp' />
                        </a>
                        <div className='bannerDetails'>
                            <h2>Free Estimates Delivered In 24 Hours</h2>
                            <p>Painting Services – whatever needs to be painted</p>
                            <button>MAKE AN APPOINTMENT</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
