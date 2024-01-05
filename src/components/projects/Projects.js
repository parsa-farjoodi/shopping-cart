import React from 'react'
import "./Projects.css"
import { Container, Row, Col } from 'react-bootstrap'
import { projects } from '../../datas'

export default function Projects() {
    return (
        <Container fluid>
            <Row>
                <Col sm={12}>
                    <div className='projectContainer'>
                        <div className='projectTitle'>
                            <h2>Our Projects</h2>
                        </div>
                        <div>
                            <img src='./img/services.webp' />
                        </div>
                        <div className='projectMenu'>
                            <ul>
                                <li className='active'>HOME</li>
                                <li>ELECTRICAL</li>
                                <li>GARDEN</li>
                                <li>HEATING</li>
                                <li>HOME MAINTENANCE</li>
                                <li>PAINTING</li>
                            </ul>
                        </div>
                    </div>
                    <div className='projectPhotos'>
                        {projects.map(project => (
                            <div className='photo'>
                                <img src={project.img} />
                                <div className='overlay'>
                                    <p>This house was completely maintained by our experts.</p>
                                    <button>LEARN MORE</button>
                                </div>
                            </div>
                        ))}

                    </div>
                </Col>
            </Row>
        </Container>
    )
}
