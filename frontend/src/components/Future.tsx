import React from 'react';
import { motion } from 'framer-motion';
import { FaInfinity, FaRocket, FaGlobe, FaHeartbeat } from 'react-icons/fa';
import './CSS/Future.css';

const futurePoints = [
  {
    icon: <FaInfinity className="futuremain-icon" />,
    title: "AI for Limitless Innovation",
    desc: "From quantum computing to interplanetary exploration, AI will redefine the boundaries of what’s possible.",
  },
  {
    icon: <FaHeartbeat className="futuremain-icon futuremain-icon-pink" />,
    title: "AI-Powered Wellness",
    desc: "Personal health companions will monitor and heal in real-time — extending and enhancing human life.",
  },
  {
    icon: <FaRocket className="futuremain-icon" />,
    title: "Humans & AI in Space",
    desc: "AI will accompany us beyond Earth, navigating, sustaining, and communicating in deep space missions.",
  },
  {
    icon: <FaGlobe className="futuremain-icon futuremain-icon-pink" />,
    title: "Global AI Governance",
    desc: "A new era of collaboration: nations uniting to ethically guide AI’s development and prevent global risks.",
  },
];

const Future: React.FC = () => {
  return (
    <section className="futuremain-section" id="future">
      {/* Ambient Glow */}
      <div className="futuremain-glow" />

      {/* Title */}
      <motion.h2
        className="futuremain-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        The Future Is Here
      </motion.h2>

      {/* Floating Idea Cards */}
      <div className="futuremain-grid">
        {futurePoints.map((point, index) => (
          <motion.div
            key={index}
            className="futuremain-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="futuremain-icon-wrapper">{point.icon}</div>
            <h3 className="futuremain-card-title">{point.title}</h3>
            <p className="futuremain-card-desc">{point.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Quote */}
      <motion.p
        className="futuremain-quote"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        “In the world that AI is building — humanity must choose to evolve with empathy, ethics, and enlightenment.”
      </motion.p>
    </section>
  );
};

export default Future;
