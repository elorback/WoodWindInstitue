import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './css/Home.css'; // Import the CSS file

const Home: React.FC = () => {
    return (
        <>
            <Container className="home-container">
                <Row>
                    <Col md={4}>
                        <Card className="shadow-sm mb-4">
                            <Card.Body>
                                <Card.Title>Feature 1</Card.Title>
                                <Card.Text>Description of the first feature.</Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="shadow-sm mb-4">
                            <Card.Body>
                                <Card.Title>Feature 2</Card.Title>
                                <Card.Text>Description of the second feature.</Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="shadow-sm mb-4">
                            <Card.Body>
                                <Card.Title>Feature 3</Card.Title>
                                <Card.Text>Description of the third feature.</Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;