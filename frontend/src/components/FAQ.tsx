import React, { useState, useCallback } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './CSS/FAQ.css';

const faqData = [
  { q: 'What is Artificial General Intelligence (AGI)?', a: 'AGI refers to AI systems with human-level reasoning and adaptability — capable of learning any intellectual task that a human can do.' },
  { q: 'Will AI take over all human jobs?', a: 'AI will automate many tasks, but it will also create new opportunities. The future lies in collaboration — not competition.' },
  { q: 'Is AI dangerous?', a: 'Like any powerful tool, AI can be misused. Ethical development, global cooperation, and safety frameworks are essential.' },
  { q: 'Can AI feel emotions or have consciousness?', a: 'Currently, AI lacks true emotions or consciousness. It simulates intelligence but does not possess awareness or sentience.' },
  { q: 'How can we ensure AI safety?', a: 'By instituting ethical guidelines, transparency, and rigorous testing before deployment.' },
  { q: 'What industries benefit most from AI?', a: 'Finance, healthcare, transportation, education, entertainment, and manufacturing all leverage AI heavily.' },
  { q: 'Is my data safe with AI applications?', a: 'Security and privacy depend on implementation—always check provider policies and encryption standards.' },
  { q: 'How is AI regulated?', a: 'Governments and NGOs are developing frameworks; self-regulation by companies also plays a key role.' },
  { q: 'What is machine learning vs deep learning?', a: 'Machine learning uses statistical methods; deep learning uses neural networks to model complex patterns.' },
  { q: 'Can I build AI without coding?', a: 'Yes—no-code platforms exist, but coding offers greater flexibility and control.' },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = useCallback((i: number) => {
    setOpenIndex(prev => (prev === i ? null : i));
  }, []);

  return (
    <section className="faqmain-section" id="faqs">
      <div className="faqmain-overlay"></div>
      <h2 className="faqmain-title">Frequently Asked Questions</h2>
      <div className="faqmain-container">
        {faqData.map((faq, i) => (
          <motion.div
            key={i}
            className={`faqmain-item ${openIndex === i ? 'faqmain-open' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <button className="faqmain-question" onClick={() => toggle(i)}>
              <span className="faqmain-question-text">{faq.q}</span>
              <span className="faqmain-icon">
                {openIndex === i ? <FaMinus /> : <FaPlus />}
              </span>
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  className="faqmain-answer-wrapper"
                  initial={{ maxHeight: 0, opacity: 0, scale: 0.98 }}
                  animate={{ maxHeight: 500, opacity: 1, scale: 1 }}
                  exit={{ maxHeight: 0, opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <p className="faqmain-answer">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <p className="faqmain-footer">
        “Curiosity drives innovation — never stop asking the right questions.”
      </p>
    </section>
  );
};

export default FAQ;
