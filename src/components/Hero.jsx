import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from "../hoc";
import { resume, space_man } from '../assets';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isMobile, setIsMobile] = useState(false);
  const [isHomeVisible, setIsHomeVisible] = useState(true);
  const roles = ["Frontend Developer", "UI Designer", "Web Creator"];
  const [currentRole, setCurrentRole] = useState(0);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track home section visibility
  useEffect(() => {
    const homeSection = document.getElementById('home');
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHomeVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1
      }
    );

    if (homeSection) {
      observer.observe(homeSection);
    }

    return () => {
      if (homeSection) {
        observer.unobserve(homeSection);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePointerMove = (e) => {
    if (isMobile || !isHomeVisible) return;
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    setMousePosition({
      x: clientX / window.innerWidth,
      y: clientY / window.innerHeight,
    });
  };

  // Modified touch handling to only prevent default on desktop
  const handleTouchMove = (e) => {
    if (!isMobile && isHomeVisible) {
      e.preventDefault();
      handlePointerMove(e);
    }
  };

  const socialLinks = [
    { href: "https://github.com/HKEV07", icon: "github", label: "GitHub" },
    { href: "https://www.linkedin.com/in/ismail-benaaitona", icon: "linkedin", label: "LinkedIn" },
    { href: "https://x.com/HKEV07", icon: "twitter", label: "Twitter" }
  ];

  return (
    <div 
      className={`relative bottom-20 min-h-screen w-full bg-gradient-to-br overflow-hidden ${!isMobile ? 'touch-none' : ''}`}
      onMouseMove={handlePointerMove}
      onTouchMove={handleTouchMove}
      onTouchStart={isMobile ? undefined : handleTouchMove}
    >
      <AnimatePresence>
        {isHomeVisible && (
          <motion.div 
            className="fixed inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="absolute w-[800px] h-[800px] bg-purple-200/10 rounded-full filter blur-[100px]"
              style={{ 
                left: isMobile ? '50%' : `${mousePosition.x * 100}%`,
                top: isMobile ? '50%' : `${mousePosition.y * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
              animate={!isMobile ? {
                x: mousePosition.x * window.innerWidth - window.innerWidth / 2,
                y: mousePosition.y * window.innerHeight - window.innerHeight / 2,
              } : {}}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 200
              }}
            />
            
            <motion.div 
              className="absolute w-[400px] h-[400px] bg-purple-300/30 rounded-full filter blur-[60px]"
              style={{ 
                left: isMobile ? '50%' : `${mousePosition.x * 100}%`,
                top: isMobile ? '50%' : `${mousePosition.y * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
              animate={!isMobile ? {
                x: mousePosition.x * window.innerWidth - window.innerWidth / 2,
                y: mousePosition.y * window.innerHeight - window.innerHeight / 2,
              } : {}}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 250
              }}
            />
            
            <motion.div 
              className="absolute w-[200px] h-[200px] bg-purple-400/40 rounded-full filter blur-[30px]"
              style={{ 
                left: isMobile ? '50%' : `${mousePosition.x * 100}%`,
                top: isMobile ? '50%' : `${mousePosition.y * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
              animate={!isMobile ? {
                x: mousePosition.x * window.innerWidth - window.innerWidth / 2,
                y: mousePosition.y * window.innerHeight - window.innerHeight / 2,
              } : {}}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 300
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <motion.div 
              className="inline-block bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-lg md:text-xl font-medium">Welcome to my portfolio</h2>
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                  ISMAIL BENAAITONA
                </span>
              </h1>
              
              <div className="h-12">
                <motion.p 
                  key={currentRole}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="text-xl sm:text-2xl text-gray-300"
                >
                  I'm a {roles[currentRole]}
                </motion.p>
              </div>
            </div>

            <p className="text-gray-400 text-base sm:text-lg max-w-lg">
              Crafting beautiful, responsive, and user-friendly web experiences 
              with modern technologies and creative design solutions.
            </p>

            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center group transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={`fa-brands fa-${link.icon} text-gray-400 group-hover:text-white transition-colors`} />
                </motion.a>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <motion.a
                onClick={() => window.open(resume, "_blank")}
                // download
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
               RESUME
              </motion.a>
              
              <motion.a
                href="#contact"
                className="px-6 sm:px-8 py-3 border border-purple-500 text-purple-500 rounded-lg font-medium hover:bg-purple-500/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            animate={{ 
              y: [-10, 10, -10],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              },
              rotate: {
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <div className="relative w-full aspect-square">
              <img
                src={space_man}
                alt="Spaceman illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-4 w-full flex justify-center">
        <a href="#about" aria-label="Scroll to About section">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#915EFF] flex justify-center items-start p-2">
            <motion.div 
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-3 h-3 rounded-full bg-[#915EFF]"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SectionWrapper(Hero, "home");