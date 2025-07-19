import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowDownCircle } from 'react-icons/bs';
import './CSS/Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="heromain-section">
      {/* Background Video */}
      <video
        className="heromain-video"
        src="/Videos/Ai1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay to darken video slightly */}
      <div className="heromain-overlay" />

      {/* Ambient Glow Elements */}
      <div className="heromain-ambient-glow" />
      <div className="heromain-spotlight" />

      {/* Text Content */}
      <motion.div
        className="heromain-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="heromain-center-wrapper">
          <h1 className="heromain-title">
            <span className="heromain-glow">Neural Dawn</span>
          </h1>

          <p className="heromain-subtitle">
            Where the Past, Present, and Future of Artificial Intelligence Converge.
          </p>

          <p className="heromain-tagline">
            Explore the evolution of AI, its ethical dilemmas, innovations, and the futuristic horizon that lies ahead.
          </p>

          <a href="#about" className="heromain-button">
            Explore The Future
            <BsArrowDownCircle className="heromain-icon" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
