import React, { useState } from "react";
import { MapPin, Phone, Mail, Github, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';
import { SectionWrapper } from "../hoc";
import { user_icon } from "../assets";
import { reactjs,javascript,css,html,docker,git,tailwind } from "../assets";
const TechIcon = ({ name, icon }) => (
  <div className="flex flex-col items-center justify-center p-2 transition-all duration-300 hover:scale-110">
    <div className="w-6 h-6  rounded-lg bg-blue-500/10 flex items-center justify-center mb-1">
      <img src={icon} alt="" />
    </div>
    <span className="text-xs text-gray-400">{name}</span>
  </div>
);

const About = () => {
  const [activeSection, setActiveSection] = useState('#abouts');
  const isActive = activeSection !== '#abouts';

  const techStack = [
    { name: "React", icon: reactjs },
    { name: "JavaScript", icon: javascript },
    { name: "Docker", icon: docker },
    { name: "Tailwind", icon: tailwind },
    { name: "Git", icon: git },
    { name: "CSS", icon: css},
    { name: "HTML", icon: html },
  ];

  return (
    <section className="min-h-screen w-full p-4 flex items-center justify-center bg-gradient-to-b">
      <div className="w-full  max-w-4xl mx-auto">
        <div className={` relative bg-[#1d1836] rounded-xl shadow-2xl transition-all duration-300
          ${activeSection === '#abouts' ? 'min-h-[600px]' : 'min-h-[500px]'}
          overflow-hidden backdrop-blur-lg border border-white/10`}>
          
          <header className={`relative transition-all duration-300 bg-gradient-to-b from-blue-600/20 to-transparent
            ${isActive ? 'h-24' : 'h-[260px]'}`}>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-400/10 to-transparent" />
            
            <img
              src={user_icon}
              alt="Profile"
              className={`shadow-xl border-4 border-white/10 rounded-full object-cover transition-all duration-300
                ${isActive 
                  ? 'w-20 h-20 absolute left-6 top-12' 
                  : 'w-32 h-32 absolute left-1/2 top-20 -translate-x-1/2'}`}
            />
            
            <div className={`transition-all duration-300 ${isActive ? 'absolute left-32 top-14' : 'absolute left-1/2 -translate-x-1/2 top-56 text-center'}`}>
              <h1 className="text-2xl font-bold text-white">ISMAIL BENAAITONA</h1>
              <h2 className="text-sm text-blue-200/80 font-medium mt-1">FRONT-END DEVELOPER</h2>
            </div>
          </header>

          <main className="relative px-6 pt-16">
            <section className={`${activeSection === '#abouts' ? 'block' : 'hidden'} animate-fadeIn`}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">About Me</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Passionate front-end developer with a keen eye for creating responsive, user-friendly web applications. 
                    Specialized in modern JavaScript frameworks and UI/UX best practices. Always eager to learn and implement 
                    new technologies to build better digital experiences.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Tech Stack</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                    {techStack.map((tech) => (
                      <TechIcon key={tech.name} {...tech} />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Connect With Me</h3>
                  <div className="flex space-x-4">
                    {[
                      { Icon: Github, href: "https://github.com/HKEV07", color: "hover:text-gray-400" },
                      { Icon: Linkedin, href: "https://www.linkedin.com/in/ismail-benaaitona/", color: "hover:text-blue-400" },
                      { Icon: Twitter, href: "https://x.com/HKEV07", color: "hover:text-green-400" },
                      // { Icon: Facebook, href: "#", color: "hover:text-blue-600" },
                      // { Icon: Instagram, href: "#", color: "hover:text-pink-400" }
                    ].map(({ Icon, href, color }) => (
                      <a
                        key={color}
                        href={href}
                        className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center transition-all duration-300 ${color} hover:bg-white/10`}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className={`${activeSection === '#contact' ? 'block' : 'hidden'} animate-fadeIn snap-center`}>
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white mb-3">Contact Information</h3>
                <div className="space-y-10">
                  {[
                    { Icon: MapPin, text: "Mail central, Bâtiment B, 25000 Khouribga, MOROCCO" },
                    { Icon: Phone, text: "(+212) 642317474" },
                    { Icon: Mail, text: "benaaitona@gmail.com" }
                  ].map(({ Icon, text }) => (
                    <div key={text} className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors duration-300">
                      <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </main>

          <nav className="sticky bottom-0 left-0 right-0 mt-8 bg-white/5 backdrop-blur-md border-t border-white/10">
            <div className="flex">
              {[
                { id: '#abouts', label: 'ABOUT' },
                { id: '#contact', label: 'CONTACT INFO' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveSection(id)}
                  className={`flex-1 py-4 text-sm font-medium transition-all duration-300
                    ${activeSection === id 
                      ? 'text-white border-b-2 border-blue-400 bg-white/5' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "About");