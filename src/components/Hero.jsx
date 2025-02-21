import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from "../hoc";
import { space_man } from '../assets';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const roles = ["Frontend Developer", "UI Designer", "Web Creator"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    });
  };

  const socialLinks = [
    { href: "https://github.com/HKEV07", icon: "github", label: "GitHub" },
    { href: "https://www.linkedin.com/in/ismail-benaaitona", icon: "linkedin", label: "LinkedIn" },
    { href: "https://x.com/HKEV07", icon: "twitter", label: "Twitter" }
  ];

  return (
    <div 
      className="relative bottom-20 min-h-screen w-full bg-gradient-to-br  overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" 
          style={{ 
            left: `${mousePosition.x * 100}%`,
            top: `${mousePosition.y * 100}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div 
              className="inline-block bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-medium">Welcome to my portfolio</h2>
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
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
                  className="text-2xl text-gray-300"
                >
                  I'm a {roles[currentRole]}
                </motion.p>
              </div>
            </div>

            <p className="text-gray-400 text-lg max-w-lg">
              Crafting beautiful, responsive, and user-friendly web experiences 
              with modern technologies and creative design solutions.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center group transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={`fa-brands fa-${link.icon} text-gray-400 group-hover:text-white transition-colors`} />
                </motion.a>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/resume.pdf"
                download
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
               RESUME
              </motion.a>
              
              <motion.a
                href="#contact"
                className="px-8 py-3 border border-purple-500 text-purple-500 rounded-lg font-medium hover:bg-purple-500/10 transition-colors"
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
              
              {/* Floating particles */}
              {/* {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-purple-500 rounded-full"
                  animate={{
                    y: [-20, 20],
                    x: [-20, 20],
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: `${30 + (i * 10)}%`,
                    top: `${20 + (i * 10)}%`
                  }}
                />
              ))} */}
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

// export default Hero;

export default SectionWrapper(Hero, "home");