import React, { useState } from "react";
import { Container, Card, Modal, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './css/Faculty.css';
import Andrea_headshot from "/photos/Andrea.jpg";
import Julie from "/photos/julie.jpg";
import Mariana from "/photos/Mariana.png"
import Matt from "/photos/Matthew.png";

// ---------- Faculty Component ----------
interface FacultyMember {
    id: number;
    pic: string;
    inst: string;
    title: string;
    body: string;
}

const Faculty: React.FC = () => {
    const faculty: FacultyMember[] = [
        { id: 1, title: "Andrea DiOrio", inst: "Clarinet", pic: Andrea_headshot, body: "Andrea is an active freelance clarinetist and private teacher in the Chicagoland area.  Over the last 15 years Andrea has performed over twenty operas with the Lyric Opera of Chicago.  She has also performed with these great orchestras:  Grant Park Orchestra, Quad City Symphony, Chicago Sinfonietta, Chicago Opera Theater, Elgin Symphony Orchestra, Ravinia Festival Orchestra, Chicago Philharmonic, Lake Forest Symphony, Illinois Philharmonic Orchestra, South Bend Symphony Orchestra, Las Vegas Philharmonic, da Corneto Opera Orchestra, Elmhurst Symphony Orchestra, Champaign-Urbana Symphony, Rockford Symphony Orchestra, and Illinois Symphony Orchestra.  Andrea performed bass clarinet with the Quad City Symphony for the 2007-2008 season, and she performed as a partial season substitute on 2nd Clarinet with the Grant Park Orchestra for the 2009 festival." },
        { id: 2, title: "Julie Popplewell", inst: "Oboe", pic: Julie, body: "Julie Popplewell received her Bachelors of Music in Oboe Performance from the University of Illinois at Urbana-Champaign. While at UIUC, she won the Smith Music Competition, earning a full tuition scholarship. Julie has studied with renowned oboists — Dr. Nancy Ambrose King, Daniel Stolper, and Scott Hostetler. Additionally, she has studied with Grover Schiltz, Deb Stevenson, Jelena Dirks, Lora Schaefer, Gordon Hunt, and Richard Killmer. After post-graduate work done at DePaul University, Julie quickly became an active freelance oboist and teacher in the Chicago area, maintaining an oboe studio consisting of 50+ students in the western suburbs." },
        { id: 3, title: "Dr. Mariana Gariazzo", inst: "Flute", pic: Mariana, body: "Dr. Mariana Gariazzo earned a Bachelor of Music at the Universidad Nacional de Cuyo (Argentina), a Master of Music from Yale University and a Doctor of Musical Arts from the University of Texas at Austin. Gariazzo enjoys a growing reputation as an engaging and thought-provoking pedagogue, lecturer and performer. Her research focuses on new music by Latin American composers, and she has served as a guest artist and speaker on the subject at prominent venues and conferences in Europe, Asia, Latin and North America. A recipient of numerous awards and distinctions, Gariazzo has secured multiple grants while on the faculty at Texas A&M University, including the Innovative Pedagogy Grant, Arts Enhancement Grant, Melbern G. Glasscock Center Co-Sponsorship Grant, Academic Innovation Grant, High Impact Innovation Practices Grant, and the Advance Climate Together Grant." },
        {
            id: 4, title: "Matthew Beck", inst: "Saxophone", pic: Matt, body: "Beck currently serves as Adjunct Professor of Saxophone at Elmhurst University, Adjunct Professor of Clarinet and Saxophone at Aurora University, and Adjunct Professor of Woodwinds at Morton College. In 2018 he received the Masters of Music degree in Saxophone Performance from Roosevelt University’s Chicago College of Performing Arts where he made his Chicago Symphony Center debut as a winner of the CCPA Concerto Competition. He also holds the first Bachelors Degree in Music Performance from Elmhurst University where he was a five time winner of the Elmhurst Philharmonic Concerto Competition. Matthew has played in masterclasses with Frederick Hemke and Nikita Zimin. His primary teachers include J. Michael Weiss-Holmes, Roger Birkeland, and Mark Colby on saxophone, Jennie Oh Brown on flute, and Gail Crosson on clarinet. Matthew is a member of the Chicago Federation of Musicians and the North American Saxophone Alliance."
        }
    ];

    const [selectedMember, setSelectedMember] = useState<FacultyMember | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const handleOpenModal = (member: FacultyMember) => {
        setSelectedMember(member);
        setShowModal(true);
    };
    const handleCloseModal = () => setShowModal(false);

    return (
        <Container className="mt-5 faculty-container">
            <header className="text-center mb-4">
                <h1 className="faculty-title">Faculty</h1>
            </header>

            <div className="carousel">
                <Carousel
                    arrows
                    infinite
                    draggable
                    swipeable
                    keyBoardControl
                    responsive={{
                        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
                        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
                        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
                    }}
                >
                    {faculty.map(mem => (
                        <div
                            key={mem.id}
                            className={`card-wrapper ${hoveredId === mem.id
                                ? "card-wrapper--hovered"
                                : hoveredId !== null && hoveredId !== mem.id
                                    ? "card-wrapper--inactive"
                                    : ""
                                }`}
                            onClick={() => handleOpenModal(mem)}
                            onMouseEnter={() => setHoveredId(mem.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            style={{ cursor: "pointer" }}
                        >
                            <Card className="c-card">
                                <Card.Img variant="top" src={mem.pic} />
                                <Card.Body className="text-center">
                                    <Card.Title className="card-title">{mem.title}</Card.Title>
                                    <Card.Text className="card-instrument">{mem.inst}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </Carousel>
            </div>

            <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
                <Modal.Header closeButton>
                    {/* Use a custom div for flex layout instead of Modal.Title */}
                    <div className="modal-title-wrapper">
                        <div className="name">{selectedMember?.title}</div>
                        <div className="instrument">{selectedMember?.inst}</div>
                    </div>
                </Modal.Header>
                <Modal.Body className="modal-body">{selectedMember?.body}</Modal.Body>
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
