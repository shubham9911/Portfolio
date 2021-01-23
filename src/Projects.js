import React from 'react';
import './Projects.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import * as GrIcons from 'react-icons/gr';
import * as SiIcons from 'react-icons/si';
import * as RiIcons from 'react-icons/ri';




function Projects() {
    return (
        <div className='projects'>
            <h1>Projects</h1>
            <Container className='project_cards'>
                <Row>
                    <Col>
                    <Card className='card' style={{ width: '25rem' }}>
                        <Card.Img variant="top" src="amazon.gif" />
                        <Card.Body>
                            <Card.Title>Amazon Clone</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>This is one of the best project I worked on.It is a full e-commerce web page clone of Amazon. Which include sign in functionality using firebase and payment functionality using stripe.</li>
                                    <li>
                                        <h6>HTML, CSS, JavaScript, React.js, Firebase, Stripe</h6>
                                    </li>
                                </ul>
                            </Card.Text>
                            <i><SiIcons.SiGithub/></i>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: ' 25rem' }}>
                            <Card.Img variant="top" src="covid.gif" />
                            <Card.Body>
                                <Card.Title>Covid 19 Tracker</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>The most important app tp built, in 2020 Covid-19 Tracker. Which is showing live corona cases os India and different parts of India, state wise charts are implemented to visualize cases in more ineractive way.</li>
                                        <li>
                                            <h6>HTML, CSS, JavaScript, React.js, Chart.js, Rest API</h6>
                                        </li>
                                    </ul>
                                </Card.Text>
                                <i><SiIcons.SiGithub/></i>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                       <Col>
                            <Card style={{ width: ' 25rem' }}>
                                <Card.Img variant="top" src="burger.gif" />
                                <Card.Body>
                                    <Card.Title>Burger Builder</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>This is a very special project with graphical representation of building a burger in real time. It is a burger configurator and order web page with very interactive controls and features.</li>
                                            <li>
                                                <h6>HTML, CSS, JavaScript, React.js</h6>
                                            </li>
                                        </ul>
                                    </Card.Text>
                                    <i><SiIcons.SiGithub/></i>
                                </Card.Body>
                            </Card>
                       
                       </Col>
                       <Col>
                            <Card style={{ width: ' 25rem' }}>
                                    <Card.Img variant="top" src="portfolio.gif" />
                                    <Card.Body>
                                        <Card.Title>Portfolio</Card.Title>
                                        <Card.Text>
                                            <ul>
                                                <li>This is My personal portfolio show casing my skills and projects to recruiters and people who wants to work with me. With links to my work and Resume and my socials where they can contact me.</li>
                                                <li>
                                                    <h6>HTML, CSS, JavaScript, Bootstrap</h6>
                                                </li>
                                            </ul>
                                        </Card.Text>
                                        <i><SiIcons.SiGithub/></i>
                                    </Card.Body>
                                </Card>
                       </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Projects
