import React from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaTwitter, // ✅ replaced FaXTwitter (not available)
} from 'react-icons/fa'; // ✅ use 'fa' not 'fa6'
import './CSS/Contact.css';

const Contact: React.FC = () => (
  <section className="contact-section" id="contact">
    {/* Neon Glow Background */}
    <motion.div
      className="contact-glow-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ duration: 2 }}
    />

    {/* Title */}
    <motion.h2
      className="contact-title"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      Connect with Tomorrow
    </motion.h2>

    {/* Subtitle */}
    <motion.p
      className="contact-subtitle"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.2 }}
      viewport={{ once: true }}
    >
      Let’s build futuristic possibilities through AI, code, and collaboration.
    </motion.p>

    {/* Grid Container */}
    <div className="contact-container">
      {/* Contact Form */}
      <motion.form
        className="contact-form"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <input type="text" placeholder="Your Name" className="contact-input" />
        <input type="email" placeholder="Your Email" className="contact-input" />
        <textarea placeholder="Your Message" rows={5} className="contact-input" />
        <button type="submit" className="contact-button">
          Send 🚀
        </button>
      </motion.form>

      {/* Contact Info + Socials */}
      <motion.div
        className="contact-info"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="contact-info-block">
          <FaEnvelope className="contact-icon" />
          <span>contact@neuraldawn.ai</span>
        </div>
        <div className="contact-info-block">
          <FaPhoneAlt className="contact-icon" />
          <span>+1 234 567 8901</span>
        </div>
        <div className="contact-info-block">
          <FaMapMarkerAlt className="contact-icon" />
          <span>Silicon Valley, CA</span>
        </div>

        {/* Social Links */}
        <div className="contact-socials">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </motion.div>
    </div>

    {/* Quote */}
    <motion.p
      className="contact-quote"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.2 }}
      viewport={{ once: true }}
    >
      “The future begins when we connect. Let's shape it together.”
    </motion.p>
  </section>
);

export default Contact;