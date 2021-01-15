import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

const HomeScreen = () => {
    return (
        <>
            <div className='home'>
                <Container fluid>
                    <Row>
                        <Col className="text-center my-3" >
                            <h1>Welcome to Find Me</h1>
                        </Col>
                    </Row>
                </Container>
                <div className="1stDiv">
                    
                </div>
            </div>
        </>
    )
}

export default HomeScreen
