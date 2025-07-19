import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import './CSS/Navbar.css';

const NAV_ITEMS = ['Home', 'About', 'Timeline', 'Use Cases', 'Risks', 'Future', 'FAQs', 'Contact'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(prev => !prev);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="navbar-header">
      <nav className="navbar-nav">
        <motion.h1
          className="navbar-logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="navbar-gradient-text">NEURAL DAWN</span>
        </motion.h1>

        <ul className="navbar-menu-desktop">
          {NAV_ITEMS.map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase().replace(/\s/g, '')}`} className="navbar-link">
                {item}
                <span className="navbar-underline" />
              </a>
            </li>
          ))}
        </ul>

        <button className="navbar-hamburger" onClick={handleToggle} aria-label="Toggle menu">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="navbar-menu-mobile"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.4 }}
              >
                <ul className="navbar-menu-mobile-list">
                  {NAV_ITEMS.map(item => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase().replace(/\s/g, '')}`}
                        className="navbar-mobile-link"
                        onClick={handleLinkClick}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="navbar-backdrop"
                onClick={handleToggle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
