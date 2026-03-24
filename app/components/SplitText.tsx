import React from 'react';
import { motion } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words';
  from?: { opacity: number; y: number };
  to?: { opacity: number; y: number };
  threshold?: number;
  rootMargin?: string;
  textAlign?: string;
  onLetterAnimationComplete?: () => void;
  showCallback?: boolean;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'easeOut',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
  showCallback = false,
}) => {
  const splitText = splitType === 'chars' ? text.split('') : text.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay / 1000,
      },
    },
  };

  const childVariants = {
    hidden: from,
    visible: to,
  };

  return (
    <motion.div
      className={`${className} ${textAlign === 'center' ? 'text-center' : textAlign === 'left' ? 'text-left' : 'text-right'}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: threshold, margin: rootMargin, once: true }}
      variants={containerVariants}
    >
      {splitText.map((char, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          transition={{ duration, ease: ease as any }}
          onAnimationComplete={splitType === 'chars' && onLetterAnimationComplete ? onLetterAnimationComplete : undefined}
          style={{ display: 'inline-block' }}
        >
          {char}
          {splitType === 'words' && index < splitText.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
      {showCallback && <div>Animation Complete Callback Triggered</div>}
    </motion.div>
  );
};

export default SplitText;