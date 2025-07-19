import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1920")'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 
            data-aos="fade-up" 
            data-aos-delay="300"
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Advanced <span className="text-[#FFD400]">Drone</span> Solutions
          </h1>
          
          <p 
            data-aos="fade-up" 
            data-aos-delay="600"
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Pioneering the future of aerial technology with cutting-edge UAV systems for surveying, agriculture, surveillance, and custom applications.
          </p>

          <div 
            data-aos="fade-up" 
            data-aos-delay="900"
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button className="group bg-[#FFD400] hover:bg-[#FFD400]/90 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span>Explore Services</span>
              <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="group border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105">
              <span>Contact Us</span>
              <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="1200"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button 
            onClick={scrollToNext}
            className="flex flex-col items-center text-white hover:text-[#FFD400] transition-colors group"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown size={24} className="animate-bounce group-hover:text-[#FFD400]" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#FFD400] rounded-full animate-ping opacity-75"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#FF0000] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#FFD400] rounded-full animate-bounce"></div>
    </section>
  );
};

export default HeroSection;