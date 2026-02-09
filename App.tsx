import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Home, 
  User, 
  Briefcase, 
  Code, 
  MessageSquare,
  Award,
  Zap,
  Target,
  Sparkles,
  Gamepad,
  Mail,
  Linkedin,
  Github,
  Calendar,
  GraduationCap
} from 'lucide-react';

import { Layout } from './components/Layout';
import { Terminal } from './components/Terminal';
import { ProjectCard } from './components/ProjectCard';
import { PERSONAL_INFO, PROJECTS, EXPERIENCE, SKILL_NODES, NAV_ITEMS, EDUCATION } from './constants';
import { ViewState } from './types';

// Updated Nav Icons mapping
const NAV_ICONS: Record<string, any> = {
  [ViewState.HUB]: Home,
  [ViewState.PROFILE]: User,
  [ViewState.EXPERIENCE]: Briefcase,
  [ViewState.PROJECTS]: Gamepad,
  [ViewState.CONTACT]: MessageSquare
};

const App: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>(ViewState.BOOT);
  const [bootProgress, setBootProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Gamified Boot Sequence
  useEffect(() => {
    if (viewState === ViewState.BOOT) {
      const interval = setInterval(() => {
        setBootProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setViewState(ViewState.HUB), 500);
            return 100;
          }
          return prev + Math.floor(Math.random() * 10) + 2;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [viewState]);

  const handleNav = (state: ViewState) => {
    setViewState(state);
    setMobileMenuOpen(false);
  };

  const renderBootScreen = () => (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-game-bg">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        className="mb-8 text-game-mint"
      >
        <Sparkles size={64} />
      </motion.div>
      <h1 className="text-4xl font-display font-bold text-game-text mb-2">LOADING WORLD...</h1>
      <p className="text-game-dim font-sans mb-8">Generating terrain and spawning entities</p>
      
      <div className="w-64 h-6 bg-white rounded-full border-2 border-game-text/10 overflow-hidden p-1">
        <motion.div 
          className="h-full bg-game-peach rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${bootProgress}%` }}
        />
      </div>
      <p className="mt-2 font-bold text-game-mint">{bootProgress}%</p>
    </div>
  );

  const renderNav = () => (
    <nav className="fixed left-0 right-0 bottom-6 md:top-0 md:left-6 md:bottom-auto md:right-auto md:h-screen w-full md:w-24 flex md:flex-col items-center justify-center pointer-events-none z-50">
      <div className="pointer-events-auto bg-white/90 backdrop-blur-md border border-white/50 shadow-game rounded-full md:rounded-2xl p-2 md:py-8 flex md:flex-col gap-2 md:gap-6">
        <div className="hidden md:flex flex-col items-center mb-4 text-game-peach">
           <div className="w-10 h-10 bg-game-peach rounded-xl flex items-center justify-center text-white font-black text-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
             OD
           </div>
        </div>
        
        {NAV_ITEMS.map((item) => {
            const isActive = viewState === item.id;
            // Override icon for visual consistency
            const Icon = NAV_ICONS[item.id] || item.icon;
            
            return (
                <motion.button
                  key={item.id}
                  onClick={() => handleNav(item.id as ViewState)}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative p-3 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-game-mint text-white shadow-[0_4px_0_0_#26a69a]' 
                      : 'text-game-dim hover:bg-game-bg hover:text-game-mint'
                  }`}
                >
                  <Icon size={24} strokeWidth={2.5} />
                  {isActive && (
                    <motion.div 
                        layoutId="nav-dot"
                        className="absolute -right-1 -top-1 w-3 h-3 bg-game-yellow rounded-full border-2 border-white"
                    />
                  )}
                </motion.button>
            );
        })}

        <div className="hidden md:block mt-auto border-t-2 border-game-bg pt-4 text-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mx-auto mb-1 animate-pulse" />
            <span className="text-[10px] font-bold text-game-dim/50 uppercase">Online</span>
        </div>
      </div>
    </nav>
  );

  const renderHub = () => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ type: "spring", bounce: 0.5 }}
      // Responsive Grid: 1 col (mobile), 2 cols (tablet), 12 cols (desktop)
      className="max-w-7xl mx-auto h-full overflow-y-auto lg:overflow-visible grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-12 gap-4 md:gap-6 p-4 md:p-10 pb-32 md:pb-10"
    >
      {/* Hero Card */}
      {/* Desktop: Span 8 cols, 7 rows. Tablet: Span 2 cols (full width). */}
      <div className="md:col-span-2 lg:col-span-8 lg:row-span-7 bg-white rounded-3xl p-8 md:p-12 shadow-game border-2 border-white relative overflow-hidden group min-h-[400px] lg:min-h-0 flex flex-col justify-center">
         <div className="absolute top-0 right-0 p-4 md:p-10 opacity-10 group-hover:opacity-20 transition-opacity">
            <Target className="text-game-mint rotate-12 w-32 h-32 md:w-48 md:h-48" />
         </div>
         
         <div className="relative z-10 flex flex-col h-full justify-center">
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <div className="inline-block px-4 py-1 bg-game-yellow/20 text-game-accent rounded-full font-bold text-sm md:text-sm mb-6 border border-game-yellow">
                    ✨ Welcome Player 1
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-black mb-6 text-game-text tracking-tight leading-tight">
                    OR <span className="text-game-peach relative inline-block">
                        DAVID
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-game-yellow" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
                        </svg>
                    </span>
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl text-game-mintDark font-bold mb-6">
                    {PERSONAL_INFO.title}
                </h2>
                <p className="text-game-dim text-lg md:text-xl font-medium max-w-2xl mb-8 leading-relaxed">
                    {PERSONAL_INFO.tagline}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleNav(ViewState.PROJECTS)}
                        className="bg-game-mint text-white px-8 py-4 rounded-2xl font-bold shadow-[0_4px_0_0_#26a69a] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center gap-2 text-base md:text-base"
                    >
                        <Gamepad size={24} className="md:w-6 md:h-6" />
                        START GAME
                    </motion.button>
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleNav(ViewState.CONTACT)}
                        className="bg-white text-game-text border-2 border-game-bg px-8 py-4 rounded-2xl font-bold shadow-sm hover:bg-game-bg transition-all flex items-center justify-center gap-2 text-base md:text-base"
                    >
                        <MessageSquare size={24} className="md:w-6 md:h-6" />
                        CHAT
                    </motion.button>
                </div>
            </motion.div>
         </div>
      </div>

      {/* Stats Card */}
      {/* Desktop: Span 4 cols, 5 rows. Tablet: Span 1 col (half width). */}
      <div className="md:col-span-1 lg:col-span-4 lg:row-span-5 bg-game-peach text-white rounded-3xl p-6 md:p-8 shadow-game border-2 border-white flex flex-col justify-between relative overflow-hidden min-h-[280px]">
        <div className="absolute -right-5 -bottom-5 text-white/20">
            <Zap size={120} className="md:w-[150px] md:h-[150px]" />
        </div>
        <div>
            <h3 className="text-xl md:text-2xl font-display font-bold mb-1 opacity-90">CURRENT STATUS</h3>
            <div className="h-1 w-16 md:w-20 bg-white/50 rounded-full mb-6" />
            <div className="space-y-3 md:space-y-4">
                 <div className="bg-white/20 backdrop-blur-sm p-3 md:p-4 rounded-2xl border border-white/30">
                    <p className="text-[10px] md:text-xs font-bold opacity-80 uppercase mb-1">Role</p>
                    <p className="text-lg md:text-xl font-bold">FOUNDER</p>
                 </div>
                 <div className="bg-white/20 backdrop-blur-sm p-3 md:p-4 rounded-2xl border border-white/30">
                    <p className="text-[10px] md:text-xs font-bold opacity-80 uppercase mb-1">Focus</p>
                    <p className="text-lg md:text-xl font-bold">GEN AI</p>
                 </div>
            </div>
        </div>
        <div className="relative z-10 mt-4">
             <div className="flex items-center gap-2 text-xs md:text-sm font-bold bg-white/20 w-fit px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-game-yellow rounded-full animate-pulse" />
                OPEN FOR QUESTS
             </div>
        </div>
      </div>

      {/* Terminal / Updates */}
      {/* Desktop: Span 4 cols, 7 rows. Tablet: Span 1 col (half width). */}
      <div className="md:col-span-1 lg:col-span-4 lg:row-span-7 h-64 md:h-full">
         <Terminal lines={[
             "Initializing portfolio...",
             "Loading assets: [██████████] 100%",
             "Spawn location: Global/Remote",
             "Class: Product Architect",
             "Stats: +10 Innovation",
             "Press 'Start Game' to view projects..."
         ]} />
      </div>

      {/* Quick Nav Cards */}
      {/* Desktop: Span 4 cols, 5 rows. Tablet: Span 1 col (half width). */}
      <motion.div 
        whileHover={{ y: -5 }}
        onClick={() => handleNav(ViewState.EXPERIENCE)}
        className="md:col-span-1 lg:col-span-4 lg:row-span-5 bg-white rounded-3xl p-6 md:p-8 shadow-game border-2 border-white cursor-pointer hover:border-game-mint transition-colors group relative overflow-hidden min-h-[200px]"
      >
         <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-game-bg rounded-bl-full -mr-8 -mt-8 group-hover:scale-110 transition-transform" />
         <Award size={40} className="text-game-mint mb-4 relative z-10 md:w-12 md:h-12" />
         <h3 className="text-xl md:text-2xl font-bold font-display text-game-text mb-2">Experience Log</h3>
         <p className="text-game-dim text-sm md:text-base font-medium">Track my journey through startups and enterprise.</p>
         <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 text-game-mint opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
            <Sparkles />
         </div>
      </motion.div>

      {/* Desktop: Span 4 cols, 5 rows. Tablet: Span 1 col (half width). */}
      <motion.div 
        whileHover={{ y: -5 }}
        onClick={() => handleNav(ViewState.PROFILE)}
        className="md:col-span-1 lg:col-span-4 lg:row-span-5 relative rounded-3xl p-6 md:p-8 shadow-game border-2 border-white cursor-pointer overflow-hidden group bg-game-text min-h-[250px]"
      >
         <img 
            src={PERSONAL_INFO.profileImage} 
            alt="Character Profile"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
                // Fallback to a generated avatar if local image fails
                e.currentTarget.src = "https://ui-avatars.com/api/?name=Or+David&background=292f36&color=4ecdc4&size=800&font-size=0.33&bold=true";
            }}
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
         
         <div className="relative z-10 h-full flex flex-col text-white">
             <User size={40} className="mb-auto drop-shadow-md md:w-12 md:h-12" />
             <h3 className="text-xl md:text-2xl font-bold font-display mb-1 md:mb-2 drop-shadow-lg">Character Profile</h3>
             <p className="text-sm md:text-base font-medium opacity-90 drop-shadow-md">View skills, bio and stats.</p>
         </div>
      </motion.div>

    </motion.div>
  );

  const renderProfile = () => (
    <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        className="h-full overflow-y-auto p-4 md:p-10 pb-24 md:pb-10 max-w-6xl mx-auto"
    >
        <div className="flex items-center gap-4 mb-10">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-game border-2 border-white bg-game-peach">
                <img 
                    src={PERSONAL_INFO.profileImage} 
                    alt="Profile"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.currentTarget.src = "https://ui-avatars.com/api/?name=Or+David&background=ff6b6b&color=fff&size=256&font-size=0.5&bold=true";
                    }}
                />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-game-text">
                CHARACTER <span className="text-game-mint">PROFILE</span>
            </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl shadow-game border-2 border-white">
                    <h3 className="text-game-mintDark font-display font-bold mb-6 text-xl flex items-center gap-2">
                        <Sparkles size={20} />
                        BIOGRAPHY
                    </h3>
                    <div className="text-game-text leading-loose text-lg font-medium space-y-4">
                        {(PERSONAL_INFO.bio as unknown as string[]).map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <div className="mt-8 p-6 bg-game-bg rounded-2xl border-2 border-dashed border-game-dim/20">
                        <p className="text-game-text/80 italic font-bold text-center">
                            "{PERSONAL_INFO.tagline}"
                        </p>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-game border-2 border-white">
                    <h3 className="text-game-mintDark font-display font-bold mb-6 text-xl flex items-center gap-2">
                        <GraduationCap size={20} />
                        ACADEMIC BACKGROUND
                    </h3>
                    <div className="space-y-8">
                        {EDUCATION.map((edu, index) => (
                            <div key={index} className="relative pl-6 border-l-2 border-game-bg">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-game-bg border-2 border-game-dim/20" />
                                <h4 className="font-bold text-game-text text-lg leading-tight mb-1">{edu.degree}</h4>
                                <div className="text-game-mintDark font-bold text-sm mb-2">{edu.field}</div>
                                <div className="text-game-dim text-sm font-medium flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                    <span>{edu.institution}</span>
                                    <span className="font-mono bg-game-bg px-2 rounded text-xs py-0.5 w-fit">{edu.year}</span>
                                </div>
                                {edu.details && (
                                    <div className="text-xs font-bold text-game-peach mt-2 flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 bg-game-peach rounded-full" />
                                        {edu.details}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="space-y-6">
                {SKILL_NODES.map((node, i) => (
                    <motion.div 
                        key={i} 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white border-2 border-white hover:border-game-mint p-5 rounded-2xl shadow-sm hover:shadow-game transition-all"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-2 bg-game-bg rounded-xl text-game-mint">
                                <node.icon size={24} />
                            </div>
                            <span className="font-bold text-xl text-game-text">{node.category}</span>
                        </div>
                        <div className="w-full bg-game-bg h-4 rounded-full overflow-hidden mb-4 border border-game-dim/10">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${node.level}%` }}
                                transition={{ duration: 1, delay: 0.5 + (i * 0.1), type: "spring" }}
                                className="h-full bg-game-mint rounded-full relative"
                            >
                                <div className="absolute top-0 right-0 bottom-0 w-full bg-gradient-to-l from-white/30 to-transparent" />
                            </motion.div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {node.skills.map(s => (
                                <span key={s} className="text-xs font-bold text-game-dim bg-game-bg px-3 py-1.5 rounded-lg">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </motion.div>
  );

  const renderExperience = () => (
    <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        className="h-full overflow-y-auto p-4 md:p-10 pb-24 md:pb-10 max-w-5xl mx-auto"
    >
        <div className="flex items-center gap-4 mb-12">
            <div className="bg-game-yellow p-3 rounded-2xl text-game-text shadow-game">
                <Award size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-game-text">
                QUEST <span className="text-game-peach">LOG</span>
            </h2>
        </div>

        <div className="relative space-y-8">
            {/* Connecting Line */}
            <div className="absolute left-4 md:left-8 top-4 bottom-4 w-1 bg-game-dim/20 rounded-full" />

            {EXPERIENCE.map((exp, i) => (
                <motion.div 
                    key={exp.id} 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-12 md:pl-20"
                >
                    {/* Checkpoint Node */}
                    <div className="absolute left-0 md:left-4 top-6 w-9 h-9 bg-white border-4 border-game-mint rounded-full z-10 shadow-sm flex items-center justify-center">
                        <div className="w-3 h-3 bg-game-mint rounded-full" />
                    </div>
                    
                    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-game border-2 border-white hover:border-game-peach transition-colors group">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-game-text group-hover:text-game-peach transition-colors">{exp.role}</h3>
                                <div className="text-lg font-bold text-game-mintDark">{exp.company}</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 bg-game-bg rounded-lg text-sm font-bold text-game-dim">{exp.period}</span>
                                <span className={`px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider text-white ${exp.type === 'founder' ? 'bg-game-peach' : 'bg-game-mint'}`}>
                                    {exp.type}
                                </span>
                            </div>
                        </div>

                        <ul className="space-y-3">
                            {exp.description.map((desc, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-game-text font-medium">
                                    <span className="mt-1.5 w-2 h-2 bg-game-yellow rounded-full flex-shrink-0" />
                                    <span className="leading-relaxed opacity-90">{desc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}
        </div>
    </motion.div>
  );

  const renderProjects = () => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        className="h-full overflow-y-auto p-4 md:p-10 pb-24 md:pb-10"
    >
        <div className="flex items-center gap-4 mb-10">
            <div className="bg-game-mint p-3 rounded-2xl text-white shadow-game">
                <Gamepad size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-game-text">
                WORLD <span className="text-game-mint">SELECT</span>
            </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-10">
            {PROJECTS.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
            ))}
        </div>
    </motion.div>
  );

  const renderContact = () => (
    <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="h-full flex flex-col justify-center items-center p-4"
    >
        <div className="bg-white p-8 md:p-12 rounded-[3rem] max-w-2xl w-full shadow-game border-4 border-game-bg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-4 bg-game-bg flex gap-2 px-8 items-center">
                 <div className="w-2 h-2 rounded-full bg-game-dim/30" />
                 <div className="w-2 h-2 rounded-full bg-game-dim/30" />
                 <div className="w-2 h-2 rounded-full bg-game-dim/30" />
            </div>
            
            <div className="text-center mb-10 mt-4">
                <div className="inline-block p-4 bg-game-yellow/20 text-game-yellow rounded-full mb-6">
                    <MessageSquare size={40} />
                </div>
                <h2 className="text-4xl font-display font-black mb-4 text-game-text">START CHAT</h2>
                <p className="text-game-dim font-medium text-lg">
                    Ready to start a new game? Let's build something interactive together.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={`mailto:${PERSONAL_INFO.email}`} 
                    className="flex flex-col items-center justify-center p-6 bg-game-bg hover:bg-game-peach hover:text-white transition-all rounded-3xl group cursor-pointer"
                >
                    <Mail className="mb-3 text-game-dim group-hover:text-white transition-colors" size={32} />
                    <span className="font-bold text-lg">Send Mail</span>
                    <span className="text-sm opacity-60 font-mono">{PERSONAL_INFO.email}</span>
                </motion.a>

                <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={`https://${PERSONAL_INFO.linkedin}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex flex-col items-center justify-center p-6 bg-game-bg hover:bg-game-mint hover:text-white transition-all rounded-3xl group cursor-pointer"
                >
                    <Linkedin className="mb-3 text-game-dim group-hover:text-white transition-colors" size={32} />
                    <span className="font-bold text-lg">LinkedIn</span>
                    <span className="text-sm opacity-60 font-mono">Connect</span>
                </motion.a>

                <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                        e.preventDefault();
                        if ((window as any).Calendly) {
                            (window as any).Calendly.initPopupWidget({url: 'https://calendly.com/ordavidone/30min'});
                        }
                    }}
                    className="flex flex-col items-center justify-center p-6 bg-game-bg hover:bg-game-yellow hover:text-game-text transition-all rounded-3xl group cursor-pointer"
                >
                    <Calendar className="mb-3 text-game-dim group-hover:text-game-text transition-colors" size={32} />
                    <span className="font-bold text-lg">Schedule</span>
                    <span className="text-sm opacity-60 font-mono">Talk Much?</span>
                </motion.button>
            </div>

            <div className="mt-10 text-center">
                 <button className="text-game-dim hover:text-game-mint font-bold text-sm flex items-center justify-center gap-2 mx-auto transition-colors">
                    <Github size={16} /> 
                    <span>VIEW SOURCE CODE</span>
                 </button>
            </div>
        </div>
    </motion.div>
  );

  return (
    <Layout>
      {viewState === ViewState.BOOT ? (
        renderBootScreen()
      ) : (
        <div className="flex h-screen overflow-hidden relative">
          {renderNav()}
          
          <main className="flex-1 h-full overflow-hidden relative md:pl-32">
            {/* Header / Breadcrumbs */}
            {viewState !== ViewState.HUB && (
               <div className="absolute top-4 left-4 md:left-0 z-30">
                   <button 
                    onClick={() => handleNav(ViewState.HUB)}
                    className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-game-dim font-bold hover:text-game-mint transition-colors"
                   >
                     <div className="w-6 h-6 bg-game-bg rounded-full flex items-center justify-center">
                        <X size={14} />
                     </div>
                     <span>EXIT LEVEL</span>
                   </button>
               </div>
            )}

            <div className="h-full relative z-10">
                <AnimatePresence mode="wait">
                    {viewState === ViewState.HUB && (
                        <motion.div key="hub" className="h-full" exit={{ opacity: 0, scale: 0.9 }}>
                            {renderHub()}
                        </motion.div>
                    )}
                    {viewState === ViewState.PROFILE && (
                        <motion.div key="profile" className="h-full" exit={{ opacity: 0, x: 100 }}>
                            {renderProfile()}
                        </motion.div>
                    )}
                    {viewState === ViewState.EXPERIENCE && (
                         <motion.div key="exp" className="h-full" exit={{ opacity: 0, x: 100 }}>
                            {renderExperience()}
                         </motion.div>
                    )}
                    {viewState === ViewState.PROJECTS && (
                         <motion.div key="projects" className="h-full" exit={{ opacity: 0, x: 100 }}>
                            {renderProjects()}
                         </motion.div>
                    )}
                    {viewState === ViewState.CONTACT && (
                         <motion.div key="contact" className="h-full" exit={{ opacity: 0, scale: 0.8 }}>
                            {renderContact()}
                         </motion.div>
                    )}
                </AnimatePresence>
            </div>
          </main>
        </div>
      )}
    </Layout>
  );
};

export default App;