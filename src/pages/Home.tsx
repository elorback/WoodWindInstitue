import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './css/Home.css';

const HeroSection: React.FC = () => {
    const [pics, setPics] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const handleNavigation = (e: React.MouseEvent<HTMLButtonElement>) => {
        navigate(e.currentTarget.value);
    };

    // Fetch photos.json once
    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const res = await fetch('/photos/homephotos.json');
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                const data: string[] = await res.json();
                setPics(data);
            } catch (err) {
                console.error('Failed to load photos:', err);
            }
        };
        fetchPhotos();
    }, []);

    // Rotate photos every 3 seconds
    useEffect(() => {
        if (pics.length === 0) return;
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % pics.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [pics]);

    return (
        <section className="hero-section">
            <Container className="hero-container">
                <Row className="align-items-center">
                    {/* Text */}
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
                                value="/contact"
                            >
                                Contact
                            </Button>
                            <Button
                                variant="outline-light"
                                onClick={handleNavigation}
                                value="/mystory"
                            >
                                Learn More
                            </Button>
                        </div>
                    </Col>

                    {/* Rotating Photos with fade */}
                    <Col md={6} className="hero-image">
                        {pics.map((pic, index) => (
                            <img
                                key={pic}
                                src={pic}
                                alt={`Student ${index + 1}`}
                                className={`img-fluid rounded hero-photo ${index === currentIndex ? 'visible' : 'hidden'
                                    }`}
                            />
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;
