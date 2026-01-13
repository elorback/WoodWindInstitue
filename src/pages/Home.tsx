import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './css/Home.css';

const HeroSection: React.FC = () => {
    const navigate = useNavigate(); // hook returns navigate function

    const handleNavigation = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.currentTarget.value; // get the value of the clicked button
        navigate(target); // navigate to that route
    };

    return (
        <section className="hero-section">
            <Container className="hero-container">
                <Row className="align-items-center">
                    {/* Text / Copy */}
                    <Col md={6} className="hero-text">
                        <h1 className="hero-title">Discover the Joy of Classical Music</h1>
                        <p className="hero-subtitle">
                            Introducing young musicians to orchestral classics, opera, ballet, film scores, and chamber music—while having the most fun making music.
                        </p>
                        <div className="hero-buttons">
                            <Button
                                variant="primary"
                                className="me-3"
                                onClick={handleNavigation}
                                value={"/contact"}
                            >
                                Contact
                            </Button>
                            <Button
                                variant="outline-light"
                                onClick={handleNavigation}
                                value={"/mystory"}>
                                Learn More
                            </Button>
                        </div>
                    </Col>

                    {/* Hero Image / Visual */}
                    <Col md={6} className="hero-image">
                        <img
                            src="/images/students-performing.jpg"
                            alt="Students performing classical music"
                            className="img-fluid rounded"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;
