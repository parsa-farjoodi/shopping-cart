import React from 'react'
import "./Footer.css"
import { Container, Row, Col } from 'react-bootstrap'
import CheckIcon from '@mui/icons-material/Check';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { recentPosts, follwUS } from '../../datas';


export default function Footer() {
    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <footer className='footer'>
                        <div className='aboutContainer'>
                            <div className='about'>
                                <h3>About</h3>
                                <p>JohnnyGo is a large company with more than 10 years of experience in helping people with their house problems and malfunctions. During our work we helped a huge number of people and have garnered a reputation as a stable company with a team of real skilled experts who don’t fear any difficulties.</p>
                            </div>
                        </div>
                        <div className='servicesContainer'>
                            <div className='services'>
                                <h3>Services</h3>
                                <ul>
                                    <li><CheckIcon className='checkIcon' />Electrical</li>
                                    <li><CheckIcon className='checkIcon' />Plumbig</li>
                                    <li><CheckIcon className='checkIcon' />Heating</li>
                                    <li><CheckIcon className='checkIcon' />Painting</li>
                                    <li><CheckIcon className='checkIcon' />Garden</li>
                                    <li><CheckIcon className='checkIcon' />Home Maintenance</li>
                                </ul>
                            </div>
                        </div>
                        <div className='recentPostContainer'>
                            <div className='recentPost'>
                                <div className='title'>
                                    <h3>Recent Post</h3>
                                </div>
                                {recentPosts.map(post => (
                                    <div className='post'>
                                        <div className='postImage'>
                                            <img src={post.img} />
                                        </div>
                                        <div className='recentPostDetail'>
                                            <div className='date'>
                                                <span>{post.date}</span>
                                            </div>
                                            <div className='title'>
                                                <h5><a href='#'>{post.title}</a></h5>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='folloeUsContainer'>
                            <div className='followUs'>
                                <div className='title'>
                                    <h3>Follow Us</h3>
                                </div>
                                <div className='resumes'>
                                    {follwUS.map(photo => (
                                        <div className="photo">
                                            <img src={photo.img} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </footer>
                </Col>
            </Row>
        </Container>
    )
}
