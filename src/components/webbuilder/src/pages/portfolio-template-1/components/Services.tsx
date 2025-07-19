import React from 'react';
import { Camera, Video, Bone as Drone, Settings } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Camera size={32} />,
      title: 'Aerial Photography',
      description: 'Professional aerial photography for real estate, events, and commercial projects.',
      features: ['High-resolution images', '360° panoramas', 'HDR processing', 'Same-day delivery']
    },
    {
      icon: <Video size={32} />,
      title: 'Drone Cinematography',
      description: 'Cinematic aerial footage for films, documentaries, and promotional content.',
      features: ['4K video recording', 'Smooth gimbal shots', 'Color correction', 'Motion graphics']
    },
    {
      icon: <Drone size={32} />,
      title: 'UAV Development',
      description: 'Custom drone solutions and modifications for specialized applications.',
      features: ['Custom builds', 'Sensor integration', 'Flight testing', 'Technical support']
    },
    {
      icon: <Settings size={32} />,
      title: 'Consulting & Training',
      description: 'Expert consultation and training for drone operations and regulations.',
      features: ['Safety protocols', 'License preparation', 'Team training', 'Compliance audit']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            My <span className="text-[#FF0000]">Services</span>
          </h2>
          <div data-aos="fade-up" data-aos-delay="200" className="w-24 h-1 bg-[#FFD400] mx-auto mb-6"></div>
          <p data-aos="fade-up" data-aos-delay="400" className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive drone services tailored to meet your specific needs and deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              data-aos="fade-up" 
              data-aos-delay={index * 200}
              className="group bg-[#FFD400] rounded-2xl p-8 hover:bg-black transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-black group-hover:text-[#FF0000] transition-colors duration-300 mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-black group-hover:text-white transition-colors duration-300 mb-4">
                {service.title}
              </h3>
              
              <p className="text-black/80 group-hover:text-gray-300 transition-colors duration-300 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center gap-2 text-black group-hover:text-gray-300 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-[#FF0000] rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-black/20 group-hover:border-gray-700 transition-colors duration-300">
                <button className="text-black group-hover:text-[#FFD400] font-semibold hover:underline transition-colors duration-300">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;