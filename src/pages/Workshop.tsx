import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './css/Workshop.css'; // Import the CSS file

const Workshop: React.FC = () => {
    return (
        <>
            <Container className="mt-5 workshop-container">
                <header className="text-center mb-4">
                    <h1 className="display-4">Bassoon Workshop</h1>
                </header>
                <Card>
                    <Card.Body className='workshop-body'>
                        One of my favorite things about teaching is the bassoon workshop I put together every summer. The workshop meets weekly and we work on my own bassoon ensemble arrangements of some of the best music written across time. By the end of the summer, we put on a concert of our favorite pieces from the summer. As a teacher, I get to work with my students on their music in context. This allows me to teach my students better since we go over so much about playing in an ensemble that can't be done in a lessons.
                        <br /><br />
                        Past Guest Artists Include: Dennis Michel (Chicago Symphony), Lewis Kirk (Lyric Opera), Benjamin Coelho (University of Iowa),        Ben Roidl-Ward (University of Illinois), and Jim Rodgers (Pittsburgh Symphony Orchestra - also pictured below)
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default Workshop;