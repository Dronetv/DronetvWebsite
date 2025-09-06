import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

const imagePaths = [
  '/images/dev.png',
  '/images/1.png',
  '/images/7.png',
  '/images/11.png',
  '/images/28.png',
  '/images/36.png',
];

const HeroSection: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings: [
          'Founder and CEO of IPage Group | IPage UM Services | India Drone Academy | DroneTv',
          'Voice‑over‑IP Systems Specialist',
          'Geospatial Innovation Advocate',
          'Drone Services Strategist'
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
      });
    }
    return () => typedInstance.current?.destroy();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imagePaths.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-white dark:bg-gray-900 flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-black dark:text-white leading-tight">
              Hello, I’m <br />
              <span className="inline-flex gap-2">
                <span className="text-[#FF0000]">Dev</span>
                <span className="text-[#FFD400]">R</span>
              </span>
            </h1>

            <div className="text-2xl lg:text-3xl font-medium text-black dark:text-white" data-aos="fade-right" data-aos-delay="600">
              <span ref={typedRef}></span>
            </div>
           <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed" data-aos="fade-right" data-aos-delay="900">
  Leading IPage UM Services since 2008 across Singapore and India—driving innovation in Drone Technology, GIS, AI, and custom IT solutions. From national-scale mapping to founding India Drone Academy and Drone TV, I’m committed to building scalable geospatial ecosystems that transform how data is captured, visualized, and acted upon.
</p>

          </div>

          <div className="relative flex items-center justify-center" data-aos="fade-left" data-aos-delay="400">
            {/* Wider static background circle */}
            <div className="relative w-[500px] h-[500px] rounded-[50%] bg-gradient-to-br from-yellow-100 to-red-100 flex items-center justify-center overflow-hidden shadow-md">
              <img
                src={imagePaths[currentImageIndex]}
                alt="Hero Slide"
                className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out rounded-[50%]"
              />

              {/* Decorative dots */}
              <div className="absolute top-5 left-5 w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="absolute bottom-5 left-10 w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="absolute top-5 right-5 w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="absolute bottom-5 right-5 w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
