// Risks.tsx
import React from 'react';
import {
  FaUserSlash,
  FaBalanceScale,
  FaMask,
  FaRobot,
  FaBomb,
  FaEyeSlash,
  FaSkull,
  FaBug
} from 'react-icons/fa';
import './CSS/Risk.css';

const riskData = [
  {
    icon: <FaUserSlash className="riskmain-icon riskmain-icon--red" />,
    title: "Massive Job Loss",
    desc: "AI automation threatens to displace millions of jobs, especially in manufacturing, logistics, and even white-collar industries like law and journalism.",
  },
  {
    icon: <FaBalanceScale className="riskmain-icon riskmain-icon--lightred" />,
    title: "Bias & Ethical Dilemmas",
    desc: "AI systems can replicate and amplify human biases, resulting in unfair outcomes in hiring, finance, and justice systems.",
  },
  {
    icon: <FaMask className="riskmain-icon riskmain-icon--red" />,
    title: "Deepfakes & Disinformation",
    desc: "AI-generated images and voices can create ultra-realistic fake videos, threatening democracy and global trust.",
  },
  {
    icon: <FaRobot className="riskmain-icon riskmain-icon--lightred" />,
    title: "Uncontrolled Superintelligence",
    desc: "Unchecked AI growth could lead to machines operating outside human control — a potential existential threat.",
  },
  {
    icon: <FaBug className="riskmain-icon riskmain-icon--red" />,
    title: "Security Vulnerabilities",
    desc: "AI systems can be hacked or manipulated to make wrong decisions, putting critical infrastructure and privacy at risk.",
  },
  {
    icon: <FaEyeSlash className="riskmain-icon riskmain-icon--lightred" />,
    title: "Loss of Privacy",
    desc: "Facial recognition, surveillance drones, and behavior prediction tools powered by AI challenge civil liberties worldwide.",
  },
  {
    icon: <FaBomb className="riskmain-icon riskmain-icon--red" />,
    title: "Weaponization of AI",
    desc: "Autonomous weapons and AI-driven cyber warfare pose serious threats to international stability and ethics in combat.",
  },
  {
    icon: <FaSkull className="riskmain-icon riskmain-icon--lightred" />,
    title: "Loss of Human Value",
    desc: "The overreliance on machines risks reducing human judgment, creativity, and empathy to algorithmic outcomes.",
  },
];

const Risks: React.FC = () => {
  return (
    <section className="riskmain-section" id="risks">
      <h2 className="riskmain-title">
        The Dark Side of AI
      </h2>

      <div className="riskmain-grid">
        {riskData.map((risk, index) => (
          <article
            key={index}
            className="riskmain-card"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="riskmain-icon-wrapper">{risk.icon}</div>
            <h3 className="riskmain-card-title">{risk.title}</h3>
            <p className="riskmain-card-desc">{risk.desc}</p>
          </article>
        ))}
      </div>

      <p className="riskmain-quote">
        "With great power comes great responsibility — we must guide AI development with care, ethics, and foresight."
      </p>
    </section>
  );
};

export default Risks;
