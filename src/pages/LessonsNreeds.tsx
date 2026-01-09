import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import './css/LessNreeds.css'

const LessNreed: React.FC = () => {


    return (<>
        <Container className="mt-5 main">
            <Row className="lessons">
                <header className="text-center mb-4">
                    <h1 className="display-4 lesson-header">Lessons</h1>
                </header>
                <Card className="lesson-card">
                    <Card.Body className="lesson-body">
                        I really do enjoy teaching bassoon lessons. Nothing brings me more joy than a student finding out how great and amazing they really are. Having taught lessons for many years, I have had the pleasure of teaching students of all ages, levels, and backgrounds. May they be in elementary, middle, high school, or college. May they be a beginning, intermediate, or advanced player. I also have experience teaching students with learning differences.
                        <br /><br />
                        A lot of my beginning students have switched to bassoon from another instrument.
                        <br /><br />
                        I do offer a free introductory lesson to anyone who is interested.
                        <br /><br />
                        For more information, please email me at marlinbassoon@gmail.com
                    </Card.Body>
                </Card>

            </Row>
            <Row className="reeds">
                <header className="text-center mb-4">
                    <h1 className="display-4">Reeds</h1>
                </header>
                <Card className="reed-card">
                    <Card.Body className="reed-body">
                        I do make my own reeds. Any reed that I provide for a student is of a quality that I would happily play or perform on myself.
                        <br /><br />
                        Reeds are available for purchase. Please email me for more information.
                        <br /><br />
                        Reed Making Lessons are available for advanced high school students.
                    </Card.Body>
                </Card>
            </Row>

        </Container>
    </>
    );
}

export default LessNreed;