import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Download, MessageCircle, Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings: ['UAV Expert', 'Creative Drone Pilot', 'Video Editor', 'Aerial Photographer'],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
      });
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen bg-white dark:bg-gray-900 flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div data-aos="fade-right" data-aos-delay="300">
              <h1 className="text-5xl lg:text-7xl font-bold text-black dark:text-white leading-tight">
                Hi, I'm <br />
                <span className="text-[#FF0000]">Marcus</span> <br />
                <span className="text-[#FFD400]">Johnson</span>
              </h1>
            </div>

            <div data-aos="fade-right" data-aos-delay="600" className="text-2xl lg:text-3xl font-medium text-black dark:text-white">
              I'm a <span ref={typedRef} className="text-[#FF0000]"></span>
            </div>

            <div data-aos="fade-right" data-aos-delay="900">
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                Transforming perspectives through cutting-edge drone technology. 
                I create stunning aerial content that tells compelling stories from above.
              </p>
            </div>

            <div data-aos="fade-right" data-aos-delay="1200" className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-[#FF0000] hover:bg-[#FF0000]/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <MessageCircle size={20} />
                Let's Work Together
                <div className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-300"></div>
              </button>

              <button className="group border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105">
                <Download size={20} />
                Download Resume
              </button>
            </div>

            <div data-aos="fade-right" data-aos-delay="1500" className="flex items-center gap-6 pt-8">
              <button className="group flex items-center gap-3 text-black dark:text-white hover:text-[#FF0000] transition-colors">
                <div className="w-12 h-12 border-2 border-current rounded-full flex items-center justify-center group-hover:border-[#FF0000] transition-colors">
                  <Play size={16} />
                </div>
                <span className="font-medium">Watch My Work</span>
              </button>
            </div>
          </div>

          {/* Right Content - Animated Drone Illustration */}
          <div className="relative" data-aos="fade-left" data-aos-delay="400">
            <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD400]/10 to-[#FF0000]/10 rounded-full animate-pulse"></div>
              
              {/* Floating Drone SVG */}
              <div className="relative z-10 animate-float">
                <svg width="300" height="200" viewBox="0 0 300 200" className="text-black dark:text-white">
                  {/* Drone Body */}
                  <rect x="130" y="90" width="40" height="20" rx="10" fill="currentColor" />
                  
                  {/* Propellers */}
                  <circle cx="110" cy="70" r="25" fill="none" stroke="currentColor" strokeWidth="2" className="animate-spin" style={{ animationDuration: '0.1s' }} />
                  <circle cx="190" cy="70" r="25" fill="none" stroke="currentColor" strokeWidth="2" className="animate-spin" style={{ animationDuration: '0.1s' }} />
                  <circle cx="110" cy="130" r="25" fill="none" stroke="currentColor" strokeWidth="2" className="animate-spin" style={{ animationDuration: '0.1s' }} />
                  <circle cx="190" cy="130" r="25" fill="none" stroke="currentColor" strokeWidth="2" className="animate-spin" style={{ animationDuration: '0.1s' }} />
                  
                  {/* Arms */}
                  <line x1="130" y1="100" x2="110" y2="70" stroke="currentColor" strokeWidth="3" />
                  <line x1="170" y1="100" x2="190" y2="70" stroke="currentColor" strokeWidth="3" />
                  <line x1="130" y1="100" x2="110" y2="130" stroke="currentColor" strokeWidth="3" />
                  <line x1="170" y1="100" x2="190" y2="130" stroke="currentColor" strokeWidth="3" />
                  
                  {/* Camera */}
                  <circle cx="150" cy="110" r="8" fill="#FF0000" />
                  <circle cx="150" cy="110" r="4" fill="white" />
                </svg>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 left-10 w-3 h-3 bg-[#FFD400] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="absolute top-20 right-20 w-2 h-2 bg-[#FF0000] rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-20 left-20 w-4 h-4 bg-[#FFD400] rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-10 right-10 w-2 h-2 bg-[#FF0000] rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;