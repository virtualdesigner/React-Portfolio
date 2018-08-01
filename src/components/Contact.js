import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <h1 className="lg-heading">
          Contact<span className="text-secondary"> Me</span>
        </h1>
        <div className="contact-opts">
          <div className="contact-opt email">smvirtualdesigner@gmail.com</div>
          <div className="contact-opt address">
            7/8, kamarajar 1st cross street, padi, chennai, IN.
          </div>
          <div className="contact-opt phone-number">+91 9884284629</div>
        </div>
      </div>
    );
  }
}

export default Contact;
