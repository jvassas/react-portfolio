import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="contact-info">
        <h1>Contact</h1>
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-md-8">
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
        <div>
          <h6 class="note text-center">*All messages will be sent to my inbox</h6>
        </div>
      </div>
    );
  }
}

export default Contact;


