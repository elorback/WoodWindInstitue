import React from 'react';
//import { Container, Row, Col, Card, Button,  } from 'react-bootstrap';
import { Container, Card } from 'react-bootstrap';
import './css/Home.css'; // Import the CSS file

const Home: React.FC = () => {
    return (
        <>
            <Container className="home-container">
                <Card className='card-container'>
                    <Card.Title className='c-title'>Still Working on this part! </Card.Title>
                    <Card.Body className='c-body'>Please be patient</Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default Home;