import React from 'react';
import './Education.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Education() {
    return (
        <div className='eduction'>
            <h1>Education</h1>
            <Container>
                <Row>
                    <Col>
                        <div className='college'>
                            <h5>Guru Gobind Singh Indraprastha University</h5>
                            <h1>Bachelor Of Technology<br/>(E.C.E)</h1>
                            <h6>Aggregate:</h6><p>66.11%</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='school'>
                            <h4>Rajkiya Pratibha Vikas Vidyalaya</h4>
                            <h1>10th</h1>
                            <h6>Aggregate:</h6><p>82%</p>
                            <h1>12th</h1>
                            <h6>Aggregate:</h6><p>82%</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Education
