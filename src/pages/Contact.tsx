import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './css/Contact.css';

const Contact: React.FC = () => {
  return (
    <Container className="contact-container mt-5">
      <header className="contact-header text-center mb-4">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-subtitle">I would love to hear from you!</p>
      </header>

      <Form className="contact-form mx-auto">
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required />
        </Form.Group>

        <Form.Group className="mb-4" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Your message here..."
            required
          />
        </Form.Group>

        <Button type="submit" className="contact-btn">
          Send Message
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
