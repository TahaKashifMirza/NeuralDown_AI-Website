import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import './CSS/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footermain-footer">
      <div className="footermain-glass">
        {/* Brand */}
        <div className="footermain-section footermain-brand-section">
          <h2 className="footermain-logo">NEURAL DAWN</h2>
          <p className="footermain-tagline">
            Embrace the intelligence of tomorrow. Your AI journey begins here.
          </p>
        </div>

        {/* Navigation */}
        <div className="footermain-section footermain-links-section">
          <h3 className="footermain-heading">Explore</h3>
          <ul className="footermain-links-list">
            <li><a className="footermain-link" href="#hero">Home</a></li>
            <li><a className="footermain-link" href="#about">About AI</a></li>
            <li><a className="footermain-link" href="#timeline">Timeline</a></li>
            <li><a className="footermain-link" href="#usecases">Use Cases</a></li>
            <li><a className="footermain-link" href="#risks">Risks</a></li>
            <li><a className="footermain-link" href="#future">Future</a></li>
            <li><a className="footermain-link" href="#faqs">FAQs</a></li>
            <li><a className="footermain-link" href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footermain-section footermain-contact-section">
          <h3 className="footermain-heading">Contact</h3>
          <p className="footermain-contact-item"><FaEnvelope className="footermain-icon" /> contact@neuraldawn.ai</p>
          <p className="footermain-contact-item"><FaMapMarkerAlt className="footermain-icon" /> Silicon Valley, USA</p>
        </div>

        {/* Socials */}
        <div className="footermain-section footermain-socials-section">
          <h3 className="footermain-heading">Connect</h3>
          <div className="footermain-social-icons">
            <a className="footermain-social-link" href="https://github.com" target="_blank"><FaGithub /></a>
            <a className="footermain-social-link" href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
            <a className="footermain-social-link" href="https://twitter.com" target="_blank"><FaTwitter /></a>
            <a className="footermain-social-link" href="https://facebook.com" target="_blank"><FaFacebook /></a>
            <a className="footermain-social-link" href="https://instagram.com" target="_blank"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footermain-bottom">
        <p className="footermain-bottom-text">&copy; 2025 NEURAL DAWN. All rights reserved.</p>
        <p className="footermain-bottom-text">Crafted with 💡 by <span className="footermain-highlight">Taha Kashif Mirza</span></p>
      </div>

      {/* Background animation */}
      <div className="footermain-glow-1"></div>
      <div className="footermain-glow-2"></div>
    </footer>
  );
};

export default Footer;
