import React from 'react'
import "./Services.css"
import { Container, Row, Col } from 'react-bootstrap'
import { services } from '../../datas'

export default function Services() {
    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <div className='services'>
                        <div className='servicesTitle'>
                            <h2>PROVIDING INTERIOR AND EXTERIOR PAINTING SERVICES</h2>
                        </div>
                        <div className='servicseImg'>
                            <img src='./img/services.webp' />
                        </div>
                        <div className='servicesExplain'>
                            <p>We have experience in painting any surface from new constructions to cabinets in commercial properties</p>
                        </div>
                        <div className='servicesCard'>
                            {services.map(service => (
                                <div className='card'>
                                    <a href='#' className='cardImg'>
                                        <img src={service.img} />
                                    </a>
                                    <div className='cardTitle'>
                                        <a href='#'>{service.title}</a>
                                    </div>
                                    <div className='cardExplain'>
                                        <p>We provide our clients with all the range of services. We will fix any malfunction in record terms so you</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='serviceButton'>
                            <button>SEE ALL SERVICES</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
