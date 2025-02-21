import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const scrollProgress = (currentScroll / totalScroll) * 100;
      setProgress(scrollProgress);

      if (currentScroll > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const radius = 49;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={`fixed right-[20px] bottom-[20px] h-[46px] w-[46px] cursor-pointer block rounded-[50px] 
        shadow-[inset_0_0_0_2px_rgba(255,255,255,0.2)] z-[10000] 
        transition-all duration-200 ease-linear
        ${isVisible ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-[15px]'}
        hover:before:opacity-100 hover:after:opacity-0
        before:content-['↑'] before:absolute before:text-center before:leading-[46px] before:text-[24px]
        before:bg-gradient-to-r before:from-blue-600 before:to-[#45caf4]
        before:bg-clip-text before:text-transparent
        before:left-0 before:top-0 before:h-[46px] before:w-[46px]
        before:cursor-pointer before:block before:z-[2] before:opacity-0
        before:transition-all before:duration-200 before:ease-linear
        after:content-['↑'] after:absolute after:text-center after:leading-[46px]
        after:text-[24px] after:text-gray-500
        after:left-0 after:top-0 after:h-[46px] after:w-[46px]
        after:cursor-pointer after:block after:z-[1]
        after:transition-all after:duration-200 after:ease-linear`}
      onClick={scrollToTop}
    >
      <svg 
        className="w-full h-full"
        viewBox="-1 -1 102 102"
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          className="fill-none stroke-gray-500 stroke-[4]"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
            transition: 'stroke-dashoffset 200ms linear'
          }}
        />
      </svg>
    </div>
  );
};

export default ScrollProgress;