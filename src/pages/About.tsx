import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./css/About.css";

const About: React.FC = () => {
    const [pics, setPics] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const res = await fetch("/photos/about_photos.json");
                if (!res.ok) throw new Error("Failed to load photos");
                const data: string[] = await res.json();
                setPics(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchPhotos();
    }, []);

    useEffect(() => {
        if (pics.length === 0) return;
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % pics.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [pics]);

    return (
        <section className="about-section">
            <Container className="about-container">

                {/* TEXT */}
                <div className="about-text">
                    <h1 className="about-title">
                        The Woodwind Institute of America
                    </h1>

                    <p>
                        A program designed to introduce and expose young musicians to the
                        wonders of classical music. Students learn and perform original
                        arrangements of orchestral classics, famous opera scenes, ballet
                        music, film scores, chamber music, and more.
                    </p>

                    <div className="about-buttons">
                        <Button
                            className="btn-primary me-3"
                            onClick={() => navigate("/contact")}
                        >
                            Contact Us
                        </Button>

                        <Button
                            className="btn-learn-more"
                            onClick={() => navigate("/programs")}
                        >
                            View Programs
                        </Button>
                    </div>
                </div>

                {/* IMAGE ROTATOR */}
                <div className="about-image-container">
                    {pics.map((pic, index) => (
                        <img
                            key={pic}
                            src={pic}
                            className={`about-photo ${index === currentIndex ? "visible" : "hidden"
                                }`}
                        />
                    ))}
                </div>

            </Container>
        </section>
    );
};

export default About;
