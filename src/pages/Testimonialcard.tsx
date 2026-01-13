import React, { useState } from "react";
import { Card } from "react-bootstrap";
import type { Testimonial } from "./testimonialsdata";
import "./css/TestimonialCard.css";

interface Props {
    testimonial: Testimonial;
}

const PREVIEW_LENGTH = 300;

const truncate = (text: string) =>
    text.length > PREVIEW_LENGTH ? text.slice(0, PREVIEW_LENGTH) + "…" : text;

const TestimonialCard: React.FC<Props> = ({ testimonial }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Card className="testimonial-card">
            <Card.Body className="testimonial-body">
                <div className="testimonial-content">
                    <p className="quote-mark">“</p>
                    <p className="testimonial-text">
                        {expanded ? testimonial.text : truncate(testimonial.text)}
                    </p>
                    {testimonial.text.length > PREVIEW_LENGTH && (
                        <button
                            className="read-more-btn"
                            onClick={() => setExpanded(!expanded)}
                        >
                            {expanded ? "Show less" : "Read full testimonial"}
                        </button>
                    )}
                </div>
                <h5 className="testimonial-name">— {testimonial.name}</h5>
            </Card.Body>
        </Card>
    );
};

export default TestimonialCard;
