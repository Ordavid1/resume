import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-game-bg text-game-text overflow-hidden selection:bg-game-mint selection:text-white">
      {/* Animated Background Shapes */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Mint Blob */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0], 
            rotate: [0, 20, 0] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-game-mint/10 rounded-full blur-3xl"
        />
        
        {/* Peach Blob */}
        <motion.div 
          animate={{ 
            x: [0, -70, 0], 
            y: [0, 100, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -right-20 w-[30rem] h-[30rem] bg-game-peach/10 rounded-full blur-3xl"
        />

        {/* Yellow Blob */}
        <motion.div 
           animate={{ 
            x: [0, 50, 0], 
            y: [0, 50, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 left-1/3 w-80 h-80 bg-game-yellow/10 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{ 
                backgroundImage: 'radial-gradient(#2d334a 1px, transparent 1px)', 
                backgroundSize: '24px 24px' 
            }} 
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};