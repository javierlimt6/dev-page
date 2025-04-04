import React from 'react';
import { motion } from 'framer-motion';

// A simple ArrowDown component using an SVG icon
const ArrowDown: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
};

const Name: React.FC = () => {
  return (
    <div className="container mx-auto px-4 z-10 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold mb-6 font-serif"
      >
        Hello! I'm <span className="text-gradient">Javier</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-xl md:text-2xl text-apple-gray max-w-3xl mx-auto mb-12"
      >
        Crafting exceptional digital experiences and building innovative solutions to real-world problems.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-16"
      >
        <a
          href="#about"
          className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
        >
          Explore My Work
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="inline-block"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.span>
        </a>
      </motion.div>
    </div>
  );
};

export default Name;
