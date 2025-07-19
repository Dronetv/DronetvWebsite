import React from 'react';
import { Camera, Video, Settings, Users, Zap, Shield } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Camera size={32} />,
      title: 'Aerial Photography',
      description: 'Professional aerial photography for real estate, events, and commercial projects with high-resolution imagery.',
      features: ['4K Resolution', 'HDR Processing', 'Same-day Delivery']
    },
    {
      icon: <Video size={32} />,
      title: 'Drone Cinematography',
      description: 'Cinematic aerial footage for films, documentaries, and promotional content with smooth professional results.',
      features: ['Cinematic Quality', 'Color Grading', 'Motion Graphics']
    },
    {
      icon: <Settings size={32} />,
      title: 'UAV Development',
      description: 'Custom drone solutions and modifications for specialized applications and unique project requirements.',
      features: ['Custom Builds', 'Sensor Integration', 'Technical Support']
    },
    {
      icon: <Users size={32} />,
      title: 'Training & Consulting',
      description: 'Expert consultation and training for drone operations, safety protocols, and regulatory compliance.',
      features: ['Safety Training', 'License Prep', 'Compliance Audit']
    },
    {
      icon: <Zap size={32} />,
      title: 'Live Streaming',
      description: 'Real-time aerial broadcasting for events, sports, and live productions with professional quality.',
      features: ['HD Streaming', 'Multi-platform', 'Real-time Control']
    },
    {
      icon: <Shield size={32} />,
      title: 'Insurance & Safety',
      description: 'Comprehensive insurance coverage and safety protocols for all aerial operations and projects.',
      features: ['Full Coverage', 'Risk Assessment', 'Safety Protocols']
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#FFD400]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-black mb-4">
            My <span className="text-[#FF0000]">Services</span>
          </h2>
          <div data-aos="fade-up" data-aos-delay="200" className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p data-aos="fade-up" data-aos-delay="400" className="text-black/80 max-w-2xl mx-auto text-lg">
            Comprehensive drone services tailored to meet your specific needs and deliver exceptional results.
          </p>
        </div>

        {/* Zig-zag Layout */}
        <div className="max-w-6xl mx-auto space-y-16">
          {services.map((service, index) => (
            <div 
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 100}
              className={`flex items-center gap-12 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex-col lg:flex-row`}
            >
              {/* Content */}
              <div className="flex-1">
                <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#FF0000] rounded-2xl flex items-center justify-center text-white shadow-lg">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-black">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#FF0000] rounded-full"></div>
                        <span className="text-gray-600 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="mt-8 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                    Learn More →
                  </button>
                </div>
              </div>

              {/* Visual Element */}
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-black/10 rounded-full flex items-center justify-center">
                    <div className="w-48 h-48 bg-[#FF0000]/20 rounded-full flex items-center justify-center animate-pulse">
                      <div className="text-[#FF0000] transform scale-150">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FF0000] rounded-full animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-black rounded-full animate-bounce" style={{ animationDelay: `${index * 0.2 + 0.5}s` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;