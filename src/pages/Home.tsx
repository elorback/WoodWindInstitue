import React from 'react';
import { Container, Row, Col, Card, Button, CardBody } from 'react-bootstrap';
import './css/Home.css'; // Import the CSS file

const Home: React.FC = () => {
    return (
        <>
            <Container className="home-container">
                <Card>
                    <Card.Title>Still Working on this part :) </Card.Title>
                    <Card.Body>Please be patient</Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default Home;