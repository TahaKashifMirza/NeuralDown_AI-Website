import React from 'react';
import { motion } from 'framer-motion';
import {
  FaRobot,
  FaBrain,
  FaCar,
  FaStethoscope,
  FaGraduationCap,
  FaMoneyBillWave,
  FaShieldAlt,
  FaShoppingCart,
  FaTools,
  FaIndustry,
  FaHome,
  FaLanguage
} from 'react-icons/fa';
import './CSS/UseCases.css';

const useCases = [
  {
    icon: <FaStethoscope className="usecasesmain-icon usecasesmain-icon-cyan" />,
    title: "Healthcare",
    desc: "AI powers diagnostics, predicts illness, and enables robotic surgeries with precision and speed.",
  },
  {
    icon: <FaGraduationCap className="usecasesmain-icon usecasesmain-icon-pink" />,
    title: "Education",
    desc: "AI-driven platforms personalize lessons, assess learning gaps, and offer real-time tutoring support.",
  },
  {
    icon: <FaMoneyBillWave className="usecasesmain-icon usecasesmain-icon-cyan" />,
    title: "Finance",
    desc: "AI automates trading, detects fraud, performs credit scoring, and optimizes investments.",
  },
  {
    icon: <FaCar className="usecasesmain-icon usecasesmain-icon-pink" />,
    title: "Transportation",
    desc: "AI powers self-driving cars, traffic predictions, route optimization, and vehicle safety features.",
  },
  {
    icon: <FaBrain className="usecasesmain-icon usecasesmain-icon-cyan" />,
    title: "Mental Health",
    desc: "AI analyzes behavior patterns and powers virtual therapists for mental health monitoring.",
  },
  {
    icon: <FaRobot className="usecasesmain-icon usecasesmain-icon-pink" />,
    title: "Everyday Life",
    desc: "AI enhances smart homes, digital assistants, and voice-controlled devices for seamless living.",
  },
  {
    icon: <FaShieldAlt className="usecasesmain-icon usecasesmain-icon-cyan" />,
    title: "Cybersecurity",
    desc: "AI detects threats in real-time, automates incident response, and strengthens data protection.",
  },
  {
    icon: <FaShoppingCart className="usecasesmain-icon usecasesmain-icon-pink" />,
    title: "E-Commerce",
    desc: "AI recommends products, personalizes shopping experiences, and powers visual search.",
  },
  {
    icon: <FaTools className="usecasesmain-icon usecasesmain-icon-cyan" />,
    title: "Customer Support",
    desc: "AI chatbots provide instant replies, resolve queries, and analyze customer sentiment.",
  },
  {
    icon: <FaIndustry className="usecasesmain-icon usecasesmain-icon-pink" />,
    title: "Manufacturing",
    desc: "AI enhances quality control, predictive maintenance, and robotic process automation.",
  },
  {
    icon: <FaHome className="usecasesmain-icon usecasesmain-icon-cyan" />,
    title: "Smart Homes",
    desc: "AI controls lighting, temperature, appliances, and security — creating intelligent living spaces.",
  },
  {
    icon: <FaLanguage className="usecasesmain-icon usecasesmain-icon-pink" />,
    title: "Language & Translation",
    desc: "AI enables real-time translation, natural language processing, and multilingual interaction.",
  },
];

const UseCases: React.FC = () => {
  return (
    <section className="usecasesmain-section" id="usecases" aria-label="AI Use Cases">
      <motion.h2
        className="usecasesmain-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Real-World Impact of Artificial Intelligence
      </motion.h2>

      <motion.p
        className="usecasesmain-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        From diagnostics to digital assistants, AI empowers nearly every domain of life and work.
      </motion.p>

      <div className="usecasesmain-grid">
        {useCases.map((useCase, index) => (
          <motion.div
            key={index}
            className="usecasesmain-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
          >
            <div className="usecasesmain-icon-wrapper">{useCase.icon}</div>
            <h3 className="usecasesmain-card-title">{useCase.title}</h3>
            <p className="usecasesmain-card-desc">{useCase.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UseCases;
