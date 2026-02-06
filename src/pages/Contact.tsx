import React from 'react';
import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './css/Contact.css';

const Contact: React.FC = () => {
  interface ContactForm {
    name: string,
    email: string,
    phone: string,
    message: string
  }

  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    fetch("https://formspree.io/f/mzdapyka", { method: "POST", body: data, headers: { "Accept": "application/json" } }).then(res => {
      if (res.ok) {
        alert("SENT MESSAGE!");
        setForm({ name: '', email: '', phone: '', message: '' })
      } else {
        alert("Failed to send...")
      }

    }).catch(er => { console.log(er) })

    console.log(form);
  };


  return (
    <Container className="contact-container mt-5">
      <header className="contact-header text-center mb-4">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-subtitle">I would love to hear from you!</p>
      </header>

      <Form className="contact-form mx-auto" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter your name" value={form.name} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter your email" value={form.email} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='phone'>
          <Form.Label>Phone</Form.Label>
          <Form.Control type='phone' name="phone" placeholder='000-000-0000' value={form.phone} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-4" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Your message here..."
            name="message"
            value={form.message}
            onChange={handleChange}
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
