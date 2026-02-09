import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Gamepad2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
      whileHover={{ y: -10, rotate: 1, scale: 1.02 }}
      className="group bg-white rounded-3xl overflow-hidden border-2 border-transparent hover:border-game-mint transition-all duration-300 shadow-game hover:shadow-game-hover flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden bg-game-bg">
        <div className="absolute top-2 right-2 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-game-mint shadow-sm border border-game-mint/20">
             LVL {index + 1}
        </div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute inset-0 bg-game-mint/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <motion.div 
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.1 }}
                className="bg-white p-3 rounded-full text-game-mint shadow-lg"
            >
                <Gamepad2 size={32} />
            </motion.div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-display font-bold text-game-text mb-2 group-hover:text-game-mint transition-colors">
          {project.title}
        </h3>
        <p className="text-game-dim text-sm mb-4 font-medium leading-relaxed flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-game-bg text-game-text/70 rounded-md border border-game-dim/10">
              {t}
            </span>
          ))}
        </div>

        <motion.a 
          href={project.url} 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-2 w-full py-3 bg-game-mint text-white font-bold rounded-xl shadow-[0_4px_0_0_#26a69a] hover:shadow-[0_2px_0_0_#26a69a] hover:translate-y-[2px] transition-all"
        >
          <ExternalLink size={18} strokeWidth={3} />
          <span>PLAY PROJECT</span>
        </motion.a>
      </div>
    </motion.div>
  );
};