import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalProps {
  lines: string[];
  onComplete?: () => void;
}

export const Terminal: React.FC<TerminalProps> = ({ lines, onComplete }) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      if (onComplete) onComplete();
      return;
    }

    const currentLine = lines[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          if (newLines[currentLineIndex] === undefined) {
            newLines[currentLineIndex] = '';
          }
          newLines[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1);
          return newLines;
        });
        setCurrentCharIndex(prev => prev + 1);
      }, 20); // Faster Typing speed for fun feel
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, 300); // Faster Line delay
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex, lines, onComplete]);

  return (
    <div className="bg-white rounded-2xl p-5 border-2 border-game-bg shadow-game h-full overflow-hidden flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 h-8 bg-game-bg flex items-center px-3 gap-2">
        <div className="w-3 h-3 rounded-full bg-game-peach"></div>
        <div className="w-3 h-3 rounded-full bg-game-yellow"></div>
        <div className="w-3 h-3 rounded-full bg-game-mint"></div>
        <span className="ml-2 text-xs font-bold text-game-dim uppercase tracking-wider">Quest Log</span>
      </div>
      
      <div className="mt-6 overflow-y-auto custom-scrollbar font-medium text-sm md:text-base space-y-2">
        {displayedLines.map((line, idx) => (
            <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-2 rounded-lg bg-game-bg/50 text-game-text"
            >
                <span className="text-game-peach mr-2 font-bold">●</span>
                {line}
            </motion.div>
        ))}
        {currentLineIndex < lines.length && (
            <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
                className="w-2 h-2 bg-game-mint rounded-full inline-block ml-2" 
            />
        )}
      </div>
    </div>
  );
};