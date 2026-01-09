import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './css/Contact.css'; // Import the CSS file

const Contact: React.FC = () => {
  return (

    <Container className="mt-5 contact-container">
      <header className="text-center mb-4">
        <h1 className="display-4">Contact Me</h1>
        <p className="lead">I would love to hear from you!</p>
      </header>
      <Form className="mx-auto" style={{ maxWidth: '40rem' }}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Your message here..." required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </Container>

  );
};

export default Contact;