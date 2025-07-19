import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const eventDate = new Date('2025-06-15T09:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
            Drone <span className="text-[#FFD400]">Innovation</span> Summit 2025
          </h1>
          
          <div 
            data-aos="fade-up" 
            data-aos-delay="600"
            className="flex flex-wrap justify-center gap-6 mb-8 text-white"
          >
            <div className="flex items-center gap-2">
              <Calendar size={20} className="text-[#FFD400]" />
              <span>June 15-16, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-[#FFD400]" />
              <span>9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-[#FFD400]" />
              <span>Tech Convention Center, San Francisco</span>
            </div>
          </div>

          <p 
            data-aos="fade-up" 
            data-aos-delay="900"
            className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Join industry leaders, innovators, and drone enthusiasts for two days of cutting-edge technology, 
            networking, and the future of unmanned aerial systems.
          </p>

          {/* Countdown Timer */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="1200"
            className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-12"
          >
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-[#FFD400]/30">
                <div className="text-2xl font-bold text-[#FFD400]">{item.value.toString().padStart(2, '0')}</div>
                <div className="text-sm text-gray-300">{item.label}</div>
              </div>
            ))}
          </div>

          <div 
            data-aos="fade-up" 
            data-aos-delay="1500"
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button className="group bg-[#FFD400] hover:bg-[#FFD400]/90 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span>Register Now</span>
              <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="group border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105">
              <span>View Agenda</span>
              <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;