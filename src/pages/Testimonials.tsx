import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { testimonials } from "./testimonialsdata";
import TestimonialCard from "./Testimonialcard";
import "./css/Testimonials.css";

const Testimonials: React.FC = () => {
    return (
        <Container className="mt-5 main">
            <header className="text-center mb-5">
                <h1 className="display-4 testimonial-header">Testimonials</h1>
            </header>

            {/* Students */}
            <section className="mb-5">
                <h2 className="section-title text-center mb-4">Students</h2>
                <Row className="g-4">
                    {testimonials
                        .filter(t => t.role === "Student")
                        .map(t => (
                            <Col md={6} key={t.id}>
                                <TestimonialCard testimonial={t} />
                            </Col>
                        ))}
                </Row>
            </section>

            {/* Professional Testimonials */}
            <section>
                <h2 className="section-title text-center mb-4">Professional Testimonials</h2>
                <Row className="g-4">
                    {testimonials
                        .filter(t => t.role === "Faculty")
                        .map(t => (
                            <Col md={6} key={t.id}>
                                <TestimonialCard testimonial={t} />
                            </Col>
                        ))}
                </Row>
            </section>
        </Container>
    );
};

export default Testimonials;
