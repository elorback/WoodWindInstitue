import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/SocialBar.css'; // Import the CSS file for custom styles

const Socialbar: React.FC = () => {
    return (
        <Navbar bg="light" className="socialbar fixed-bottom">
            <Nav className="ml-auto justify-content-center w-100">

                <Nav.Link href="https://www.tiktok.com/@marlinandrew" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <FontAwesomeIcon icon={faTiktok} size="2x" style={{ color: '#69C9D0' }} />
                </Nav.Link>
                <Nav.Link href="https://www.facebook.com/marlinbassoon" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#1877F2' }} />
                </Nav.Link>
                <Nav.Link href="https://www.instagram.com/marlinandrew24/#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#E1306C' }} />
                </Nav.Link>
                <Nav.Link href="https://www.youtube.com/watch?v=_eXphC_CsR0&feature=youtu.be" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <FontAwesomeIcon icon={faYoutube} size="2x" style={{ color: '#FF0000' }} />
                </Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Socialbar;
