import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./css/About.css";

const About: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = (target: string) => navigate(target);

    return (
        <section className="about-section">
            <Container className="about-container">
                {/* Text Column */}
                <div className="about-text">
                    <h1 className="about-title">
                        The Woodwind Institute of America
                    </h1>
                    <p className="content">
                        A program designed to introduce and expose young musicians to the
                        wonders of classical music. Students learn and perform original
                        arrangements of orchestral classics, famous opera scenes, ballet
                        music, film scores, chamber music, and more. Best of all, students
                        have more fun making music than ever before!
                    </p>

                    {/* Call to Action Buttons */}
                    <div className="about-buttons">
                        <Button
                            className="btn-primary me-3"
                            onClick={() => handleNavigation("/contact")}
                        >
                            Contact Us
                        </Button>
                        <Button
                            className="btn-learn-more"
                            onClick={() => handleNavigation("/programs")}
                        >
                            View Programs
                        </Button>
                    </div>
                </div>

                {/* Image Column */}
                <div className="about-image">
                    <img
                        src="/images/students-performing.jpg"
                        alt="Students performing classical music"
                        className="img-fluid rounded"
                    />
                </div>
            </Container>
        </section>
    );
};

export default About;
