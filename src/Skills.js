import React from 'react'
import './Skills.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import * as GrIcons from 'react-icons/gr';
import * as SiIcons from 'react-icons/si';
import * as RiIcons from 'react-icons/ri';

function Skills() {
    return (
        <div id='skills' className='skills'>
            <section data-section='skills'>
                <h1>My Skills</h1>
                <div className='skills_info'>
                <Container>
                    
                    <Row>
                        <Col>
                            <i><GrIcons.GrHtml5/></i>
                            <h2 className='skills_heading'>HTML</h2>
                            
                        </Col>
                        <Col>
                            <i><GrIcons.GrCss3/></i>
                            <h2 className='skills_heading'>CSS</h2>
                        </Col>
                        <Col>
                            <i><SiIcons.SiJavascript/></i>
                            <h2 className='skills_heading'>JavaScript</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <i><RiIcons.RiReactjsLine/></i>
                            <h2 className='skills_heading'>React.js</h2>
                        </Col>
                        <Col>
                            <i><SiIcons.SiBootstrap/></i>
                            <h2 className='skills_heading'>Bootstrap</h2>
                        </Col>
                        <Col>
                            <i><SiIcons.SiDatacamp/></i>
                            <h2 className='skills_heading'>Data Structure
                                & Alogorithm
                            </h2>
                        </Col>
                    </Row>
                </Container>
                    
                </div>
            </section>
            
        </div>
    )
}

export default Skills
