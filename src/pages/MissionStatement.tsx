import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./css/MissionStatement.css";

const MissionStatement: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = (target: string) => navigate(target);

    return (
        <section className="mission-section">
            <Container className="mission-container">
                {/* Mission Card */}
                <Card className="mission-card text-center">
                    <Card.Body>
                        <h1 className="mission-title">
                            The Woodwind Institute of America
                        </h1>
                        <p className="mission-text">
                            A program designed to introduce and expose young musicians to the
                            wonders of classical music. Students learn and perform original
                            arrangements of orchestral classics, famous opera scenes, ballet
                            music, film scores, chamber music, and more. Best of all, students
                            have more fun making music than ever before!
                        </p>

                        {/* Call to Action Buttons */}
                        <div className="mission-buttons">
                            <Button
                                variant="primary"
                                className="me-3"
                                onClick={() => handleNavigation("/contact")}
                            >
                                Contact Us
                            </Button>
                            <Button
                                variant="outline-light"
                                onClick={() => handleNavigation("/programs")}
                            >
                                View Programs
                            </Button>
                        </div>
                    </Card.Body>
                </Card>

                {/* Optional Hero Image */}
                <div className="mission-visual">
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

export default MissionStatement;
