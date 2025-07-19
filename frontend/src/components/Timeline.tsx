import { motion } from 'framer-motion';
import {
  FaInfinity,
  FaRocket,
  FaGlobe,
  FaHeartbeat,
  FaMicrochip,
  FaSatelliteDish,
  FaUserAstronaut,
  FaBrain,
} from 'react-icons/fa';
import './CSS/Timeline.css';

const futurePoints = [
  {
    icon: <FaInfinity className="future-icon cyan" />,
    title: "Boundless AI Potential",
    desc: "AI will integrate with quantum computing, unlocking limitless possibilities across science and industry.",
  },
  {
    icon: <FaHeartbeat className="future-icon pink" />,
    title: "Real-time Health Monitoring",
    desc: "Smart implants and AI diagnostics will detect illnesses before symptoms appear, revolutionizing healthcare.",
  },
  {
    icon: <FaRocket className="future-icon cyan" />,
    title: "AI-Powered Space Exploration",
    desc: "Autonomous rovers and AI-driven spacecraft will lead humanity beyond the solar system.",
  },
  {
    icon: <FaGlobe className="future-icon pink" />,
    title: "Ethical Global AI Alliance",
    desc: "A unified global governance structure will ensure transparency, fairness, and safety in AI usage.",
  },
  {
    icon: <FaMicrochip className="future-icon cyan" />,
    title: "Neural Interfaces",
    desc: "Brain-computer integration will allow thought-powered control of devices, making typing obsolete.",
  },
  {
    icon: <FaSatelliteDish className="future-icon pink" />,
    title: "Planetary Communication",
    desc: "AI will manage deep-space communication in real-time, handling delay, noise, and translation seamlessly.",
  },
  {
    icon: <FaUserAstronaut className="future-icon cyan" />,
    title: "AI-Human Hybrids",
    desc: "Cognitive augmentation will enhance memory, decision-making, and creativity — redefining humanity.",
  },
  {
    icon: <FaBrain className="future-icon pink" />,
    title: "General AI Consciousness",
    desc: "AI may develop its own reasoning capabilities, initiating a new paradigm in sentient systems.",
  },
];

export default function Future() {
  return (
    <section className="future-section" id="future">
      <motion.h2
        className="future-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Tomorrow, Today: The Future of AI
      </motion.h2>

      <div className="future-grid">
        {futurePoints.map((point, index) => (
          <motion.div
            key={index}
            className="future-card"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="future-icon-wrapper">{point.icon}</div>
            <h3 className="future-card-title">{point.title}</h3>
            <p className="future-card-desc">{point.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="future-quote"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
      >
        “AI is not just the future — it’s the architecture of a new era.”
      </motion.p>
    </section>
  );
}
