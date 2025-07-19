import React from 'react';
import { Target, Eye, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const values = [
    {
      icon: <Target size={32} />,
      title: 'Mission',
      description: 'To revolutionize industries through innovative drone technology and exceptional service delivery.'
    },
    {
      icon: <Eye size={32} />,
      title: 'Vision',
      description: 'To be the leading provider of UAV solutions, enabling businesses to achieve new heights of efficiency.'
    },
    {
      icon: <Award size={32} />,
      title: 'Values',
      description: 'Innovation, reliability, and customer satisfaction drive everything we do in the drone industry.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div data-aos="fade-right">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Drone Technology"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#FFD400] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-black">5+</span>
              </div>
              <div className="absolute -bottom-2 -right-2 text-sm font-semibold text-black">
                Years Experience
              </div>
            </div>
          </div>

          {/* Content */}
          <div data-aos="fade-left">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                About <span className="text-[#FF0000]">DroneTech</span>
              </h2>
              <div className="w-24 h-1 bg-[#FFD400] mb-6"></div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                DroneTech is a pioneering company in the UAV industry, specializing in advanced drone solutions 
                for various sectors including agriculture, surveying, surveillance, and custom applications.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                With over 5 years of experience and a team of expert engineers, we deliver cutting-edge 
                drone technology that transforms how businesses operate and achieve their goals.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  data-aos="fade-up" 
                  data-aos-delay={index * 200}
                  className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-16 h-16 bg-[#FF0000] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;