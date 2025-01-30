import React from "react";
import "../Styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-subtitle">I'd love to hear from you!</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
            placeholder="Your message..."
            required
          ></textarea>
        </div>
        <button type="submit" className="form-button">
          Send Message to Rahul ..
        </button>
      </form>
    </div>
  );
};

export default Contact;
