import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container">
      <h1 className="contact-title text-center mt-5">Let's Connect!</h1>
      <form action="https://formspree.io/f/xkgnnyql" method="POST">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Enter Your Name"
            required
          />
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <br />
          <textarea
            rows="5"
            cols="50"
            name="message"
            placeholder="Your Message"
            id="message"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
