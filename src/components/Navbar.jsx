import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      

      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = navLinks.map(nav => {
        const element = document.getElementById(nav.id);
        if (!element) return { id: nav.id, top: 0, height: 0 };
        
        const rect = element.getBoundingClientRect();
        return {
          id: nav.id,
          top: rect.top + window.scrollY,
          height: rect.height,
        };
      });

      const currentSection = sections.find((section, index) => {
        const nextSection = sections[index + 1];
        
        if (!nextSection) {
          return scrollTop >= section.top - 100;
        }

        return scrollTop >= section.top - 100 && scrollTop < nextSection.top - 100;
      });

      if (currentSection) {
        const activeNav = navLinks.find(nav => nav.id === currentSection.id);
        if (activeNav) {
          setActive(activeNav.title);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` flex min-w-full justify-center items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className=' flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center h-5'>
          <div className="relative inline-block pl-4 pt-0 mt-0">
            <div
              className="h-[25px] w-[30px] relative z-10 cursor-pointer"
              onClick={() => setToggle(!toggle)}
            >
              <span className={`block h-[2px] w-[30px] bg-white mb-[7px] transition-all duration-200 ease-out
                ${toggle ? 'transform rotate-45 translate-y-[9px]' : ''}`}></span>
                  <span className={`block h-[2px] bg-white mb-[7px] transition-all duration-200 ease-out
                ${toggle ? 'w-0 opacity-0' : 'w-[16.5px]'} 
                hover:w-[30px]`}>

              </span>
                <span className={`block h-[2px] w-[16.5px] float-right bg-white transition-all duration-200 ease-out
                ${toggle ? 'w-[30px] transform -rotate-45 -translate-y-[9px]' : ''} hover:w-[30px]`}>
              </span>
            </div>
          </div>

          <div className={`fixed top-0 right-0 w-full h-full transition-all duration-800 ease-out 
            ${toggle ? 'visible' : 'invisible'}`}>
            <div className={`absolute top-5 right-[50px] w-0 h-0 bg-opacity-60  rounded-bl-[200%] transition-all duration-600 ease-[cubic-bezier(0.77,0,0.175,1)]
              ${toggle ? 'w-full h-full' : ''}`} />
            <div className={`absolute top-5 right-[50px] w-0 h-0 
              
              transition-all duration-600 delay-200 ease-[cubic-bezier(0.77,0,0.175,1)]
              ${toggle ? 'w-full h-full' : ''}`} /> 

              <div className={`fixed top-14 right-[30px] w-[220px] text-left
                bg-[#232366] 
                bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg')]
                bg-bottom bg-no-repeat bg-[length:300%]
                shadow-[6px_7px_28px_0_rgba(16,16,16,0.3)]
               rounded-lg
                ${toggle ? 'visible' : 'invisible'}`}>
                <ul className='list-none relative z-[2] p-0 m-0  '>
                  {navLinks.map((nav) => (
                    <li
                      key={nav.id}
                      className={`relative block opacity-0 text-right text-white overflow-hidden 
                      font-poppins text-[22px] leading-[1.2] tracking-[2px] my-[7px]
                      transform -translate-x-[30px] transition-all duration-200 ease-out
                      ${toggle ? 'opacity-100 translate-x-0' : ''}`}
                      onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                      }}
                    >
                    <a
                      href={`#${nav.id}`}
                      className={`relative no-underline cursor-pointer font-semibold z-[2] 
                    inline-block pr-10 py-[5px] transition-all duration-200
                    ${active === nav.title ? 'text-white' : 'text-white/60'}
                    hover:text-white
                    before:content-[''] before:absolute before:top-0 before:right-0 
                    before:w-[5px] before:h-0 before:opacity-0 before:bg-[#7655a8] 
                    before:z-[1] before:transition-all before:duration-200
                    hover:before:h-full hover:before:opacity-100 hover:before:top-0
                    ${active === nav.title ? 'before:h-full before:opacity-100 before:top-0' : ''}`}
                    >
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};



export default Navbar;
