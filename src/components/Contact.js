import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import './Contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('Your message has been sent successfully!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <motion.div
      className="contact"
      initial={{ y: '0vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      >
      <section className="contact-section" id="contact">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-description">
            I'd love to hear from you! Whether you have a question or want to collaborate, feel free to reach out.
          </p>

          <div className="contact-content">
            {/* Contact Form */}
            <div className="form-container">
              <form onSubmit={handleSubmit} id="contact-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
              {formStatus && <p className="form-status">{formStatus}</p>}
            </div>

            {/* Contact Information */}
            <div className="contact-info">
              <div className="info-item">
                <h3>Email</h3>
                <p>mamudajohn3@gmail.com</p>
              </div>
              <div className="info-item">
                <h3>Phone</h3>
                <p>(234) 91-2565-3189</p>
              </div>
              <div className="info-item">
                <h3>Social</h3>
                <ul>
                  <li><a href="https://www.linkedin.com/in/john-mamuda-280524277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a></li>
                  <li><a href="#">GitHub</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      </motion.div>
  );
};

export default ContactPage;
