import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-yellow-400 min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background YouTube Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
         <iframe
  className="w-full h-full object-cover"
  src="https://www.youtube.com/embed/F2jm1Uk2UCk?autoplay=1&mute=1&controls=0&loop=1&playlist=F2jm1Uk2UCk
"
  title="Drone Background"
  frameBorder="0"
  allow="autoplay; encrypted-media"
  allowFullScreen
></iframe>


          {/* Gradient from left to right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
        </div>

      {/* Animated Background Bubbles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-600/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-yellow-500/40 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-yellow-300/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-600/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative max-w-6xl mx-auto text-center z-20 w-full">
        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-black mb-6 sm:mb-8 leading-tight tracking-tight">
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent animate-shimmer bg-size-200">Explore</span>
            </span>{' '}
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent animate-shimmer bg-size-200">the</span>
            </span>{' '}
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent animate-shimmer bg-size-200">Future</span>
            </span>
            <br />
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent animate-shimmer bg-size-200">of</span>
            </span>{' '}
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent animate-shimmer bg-size-200">Drone</span>
            </span>{' '}
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent animate-shimmer bg-size-200">Technology</span>
            </span>
          </h1>
        </div>

        {/* Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.5s' }}>
          <button className="group relative bg-black text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-black/25 w-full sm:w-auto max-w-xs sm:max-w-none">
            <span className="relative z-10 transition-all duration-300 group-hover:text-red-400">Watch Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <div className="absolute inset-0 bg-red-600 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-2xl opacity-20"></div>
          </button>

          <button className="group relative bg-transparent border-3 border-black text-black px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-black/25 w-full sm:w-auto max-w-xs sm:max-w-none">
            <span className="relative z-10 transition-all duration-300 group-hover:text-white">Browse Categories</span>
            <div className="absolute inset-0 bg-gradient-to-r from-black to-red-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right rounded-2xl"></div>
          </button>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-black/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
