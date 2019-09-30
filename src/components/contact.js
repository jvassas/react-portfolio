import React, { Component } from "react";
//  Bootstrap and axios imports for contact form
// import { Form, Button } from 'react-bootstrap';
// import axios from 'axios';

class Contact extends Component {
  render() {
    return (
      <div className="contact-info">
        <div className="row">
          <div className="col-12">
          <h1>Contact</h1>
            <form
              action=" https://formsubmit.co/37afd3813b004f392654463be0398b28"
              method="POST" id="contact-form"
            >
              Name: <br />
              <input type="text" name="name" id="form-name"/> <br />
              Email: <br />
              <input type="email" name="email" id="form-email" /> <br />
              Message: <br />
              <textarea name="message" id="form-message"></textarea> <br />
              <button type="submit" id="form-button">Send</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

{
  /* <h4>Send me an <a href="mailto:jakevassas@gmail.com?Subject=Hello%20Jake" target="_top">email</a></h4> */
}
// Contact form that sends email (unsure if I want this)

// constructor() {
//     super()

//     this.state = {
//         name: '',
//         email: '',
//         message: ''
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
// }

// handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value })
// }

// async handleSubmit(e) {
//     e.preventDefault()

//     const { name, email, message } = this.state

//     const form = await axios.post('api/form', {
//         name,
//         email,
//         message
//     })
// }

// render() {
// return (
// <div className="contact">
//   <Form onSubmit={ this.handleSubmit }>
//       <h1>Contact</h1>
//     <Form.Group controlId="name-input" className="name-input">
//       <Form.Label for="name">Name</Form.Label>
//       <Form.Control
//         type="text"
//         name="name"
//         placeholder="Name"
//         onChange={this.handleChange}/>
//     </Form.Group>
//     <Form.Group controlId="email-input" className="email-input">
//       <Form.Label for="email">Email</Form.Label>
//       <Form.Control
//         type="email"
//         name="email"
//         placeholder="name@example.com"
//         onChange={this.handleChange} />
//     </Form.Group>
//     <Form.Group controlId="message-input" className="message-input">
//       <Form.Label for="message">Message</Form.Label>
//       <Form.Control
//         as="textarea"
//         name="message"
//         rows="5" placeholder="Your message"
//         onChange={this.handleChange} />
//     </Form.Group>
//     <Button variant="secondary" className="submit">Submit</Button>
//   </Form>
// </div>
