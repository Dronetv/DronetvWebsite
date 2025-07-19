import React from 'react';
import { Camera, Zap, Shield, Settings } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Camera size={40} />,
      title: 'Aerial Surveying',
      description: 'High-precision mapping and surveying services using advanced drone technology for construction, mining, and land development projects.'
    },
    {
      icon: <Zap size={40} />,
      title: 'Agricultural Monitoring',
      description: 'Crop health monitoring, precision agriculture solutions, and yield optimization using specialized agricultural drones and sensors.'
    },
    {
      icon: <Shield size={40} />,
      title: 'Security & Surveillance',
      description: 'Advanced surveillance solutions for perimeter security, crowd monitoring, and emergency response with real-time data transmission.'
    },
    {
      icon: <Settings size={40} />,
      title: 'Custom UAV Solutions',
      description: 'Tailored drone systems designed for specific industry needs, including payload integration and specialized flight control systems.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#FFD400]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our <span className="text-[#FF0000]">Services</span>
          </h2>
          <div data-aos="fade-up" data-aos-delay="200" className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p data-aos="fade-up" data-aos-delay="400" className="text-black/80 text-lg max-w-2xl mx-auto">
            Comprehensive drone solutions tailored to meet the unique needs of various industries and applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              data-aos="fade-up" 
              data-aos-delay={index * 200}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:bg-black"
            >
              <div className="text-[#FF0000] group-hover:text-[#FFD400] transition-colors duration-300 mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-black group-hover:text-white transition-colors duration-300 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-6 pt-6 border-t border-gray-200 group-hover:border-gray-700 transition-colors duration-300">
                <button className="text-[#FF0000] group-hover:text-[#FFD400] font-semibold hover:underline transition-colors duration-300 flex items-center gap-2">
                  Learn More
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;