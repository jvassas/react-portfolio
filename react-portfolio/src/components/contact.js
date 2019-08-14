import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';

class Contact extends Component {
  render() {
    return (
    <div className="contact">
      <Form>
          <h1>Contact</h1>
        <Form.Group controlId="name-input" className="name-input">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Name" />
        </Form.Group>
        <Form.Group controlId="email-input" className="email-input">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="message-input" className="message-input">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="5" placeholder="Your message" />
        </Form.Group>
        <Button variant="secondary" className="submit">Submit</Button>
      </Form>
    </div>
    );
  }
}

export default Contact;
