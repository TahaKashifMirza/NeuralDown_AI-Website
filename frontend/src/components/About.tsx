import { motion } from 'framer-motion';
import './CSS/About.css';

const About = () => {
  return (
    <section id="about" className="aboutmain-section">
      <div className="aboutmain-overlay" />

      <motion.div
        className="aboutmain-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Left Text Section */}
        <motion.div
          className="aboutmain-text"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="aboutmain-title">What is Artificial Intelligence?</h2>

          <p className="aboutmain-description">
            <strong>Artificial Intelligence (AI)</strong> is the simulation of human intelligence in machines — enabling them to think, learn, reason, and solve problems. From personal voice assistants to autonomous vehicles, AI is rapidly integrating into every part of our digital lives.
          </p>

          <p className="aboutmain-description">
            <strong>Neural Dawn</strong> is a futuristic exploration into the past, present, and potential future of AI. We believe this isn't just a technological shift — it's the beginning of a new evolutionary timeline where humans and machines begin to merge.
          </p>

          <p className="aboutmain-description">
            The <strong>revolution of AI</strong> is reshaping industries like healthcare, finance, education, and space research. From early symbolic machines to today's neural networks and quantum AIs, we're witnessing a paradigm shift that's as monumental as the industrial revolution.
          </p>

          <p className="aboutmain-quote">
            “AI will not replace humans. But humans with AI will replace those without it.”
          </p>
        </motion.div>

        {/* Right Video Section */}
        <motion.div
          className="aboutmain-imageWrapper"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="aboutmain-glassCard">
            <video
              className="aboutmain-image"
              src="/Videos/Ai2.mp4"
              autoPlay
              loop
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
