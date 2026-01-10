import React, { useState } from "react";
import { Container, Card, Modal, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './css/Faculty.css';

interface FacultyMember {
    id: number;
    title: string;
    body: string;
}

const Faculty: React.FC = () => {

    const faculty: FacultyMember[] = [
        { id: 1, title: "Professor A", body: "Bassoon specialist with 20 years experience" },
        { id: 2, title: "Professor B", body: "Chamber music and reed making expert" },
        { id: 3, title: "Professor C", body: "Orchestral performance and pedagogy" },
        { id: 4, title: "Professor D", body: "Contemporary and solo repertoire" }
    ];

    // Modal state
    const [selectedMember, setSelectedMember] = useState<FacultyMember | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const handleOpenModal = (member: FacultyMember) => {
        setSelectedMember(member);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedMember(null);
        setShowModal(false);
    };

    return (
        <Container className="mt-5 faculty-container">
            <header className="text-center mb-4">
                <h1 className="display-4">Faculty</h1>
            </header>

            <div className="carousel">
                <Carousel
                    arrows
                    infinite
                    draggable
                    swipeable
                    keyBoardControl
                    centerMode={false}
                    responsive={{
                        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
                        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
                        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
                    }}
                >
                    {faculty.map(mem => (
                        <div
                            key={mem.id}
                            className={`card-wrapper ${hoveredId === mem.id ? 'card-wrapper--hovered' : ''} ${hoveredId !== null && hoveredId !== mem.id ? 'card-wrapper--inactive' : ''}`}
                            onClick={() => handleOpenModal(mem)}
                            onMouseEnter={() => setHoveredId(mem.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            style={{ cursor: 'pointer' }}
                        >
                            <Card className="c-card">
                                <Card.Header className="card-title text-center">{mem.title}</Card.Header>
                            </Card>
                        </div>
                    ))}
                </Carousel>
            </div>

            {/* ---------- Modal ---------- */}
            <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{selectedMember?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedMember?.body}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Faculty;
