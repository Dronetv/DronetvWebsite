import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Download, MessageCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings: ['Drone Photographer', 'UAV Developer', 'Creative Director', 'Visual Storyteller'],
        typeSpeed: 50,
        backSpeed: 30,
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFD400] via-[#FFD400]/90 to-[#FFD400]/80">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div data-aos="fade-up" data-aos-delay="300">
            <h1 className="text-6xl md:text-8xl font-bold text-black mb-6 leading-tight">
              Alex <span className="text-[#FF0000]">Chen</span>
            </h1>
          </div>

          <div data-aos="fade-up" data-aos-delay="600" className="mb-8">
            <div className="text-2xl md:text-3xl font-semibold text-black">
              I'm a <span ref={typedRef} className="text-[#FF0000]"></span>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="900" className="mb-12">
            <p className="text-lg md:text-xl text-black/80 max-w-2xl mx-auto leading-relaxed">
              Capturing the world from above with cutting-edge drone technology.
              Transforming aerial perspectives into stunning visual narratives.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="1200" className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative bg-[#FF0000] hover:bg-[#FF0000]/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
              <MessageCircle size={20} />
              Hire Me
              <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </button>

            <button className="group relative bg-black hover:bg-black/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
              <Download size={20} />
              Download CV
              <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div data-aos="fade-up" data-aos-delay="1500" className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
              <div className="w-1 h-3 bg-black rounded-full animate-bounce mt-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#FF0000] rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-black rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#FF0000] rounded-full animate-bounce"></div>
    </section>
  );
};

export default HeroSection;
