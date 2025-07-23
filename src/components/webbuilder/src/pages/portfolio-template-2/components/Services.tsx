import React from 'react';
import {
  Home,
  Building,
  Camera,
  Image,
  Scissors,
  Video,
  UserCheck,
  GraduationCap,
  ClipboardList,
  Headphones
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Home size={32} />,
      title: 'Real Estate Appraisal',
      description: 'Accurate valuation of residential and commercial properties based on market trends and property features.',
      features: ['Market Analysis', 'Comparative Reports', 'Certified Valuation']
    },
    {
      icon: <Building size={32} />,
      title: 'Property Management',
      description: 'Complete management of rental properties ensuring smooth operations and tenant satisfaction.',
      features: ['Rent Collection', 'Maintenance Support', 'Tenant Screening']
    },
    {
      icon: <Camera size={32} />,
      title: 'Real Estate Photography',
      description: 'High-quality photography that highlights your property’s best features to attract buyers and renters.',
      features: ['Interior & Exterior', 'Wide-Angle Lenses', 'Fast Delivery']
    },
    {
      icon: <Image size={32} />,
      title: 'Stock Photography',
      description: 'A curated library and custom shoots for commercial, editorial, and digital stock photo needs.',
      features: ['Royalty-Free Licensing', 'High Resolution', 'Tailored Themes']
    },
    {
      icon: <Scissors size={32} />,
      title: 'Video Editing',
      description: 'Professional post-production for promotional, educational, and cinematic projects.',
      features: ['Transitions & Effects', 'Color Grading', 'Audio Sync']
    },
    {
      icon: <Video size={32} />,
      title: 'Videography',
      description: 'On-site video production services for events, businesses, and real estate.',
      features: ['4K Shooting', 'Stabilized Shots', 'Multi-angle Coverage']
    },
    {
      icon: <UserCheck size={32} />,
      title: 'Career Development Coaching',
      description: 'Guiding professionals in building career paths, setting goals, and maximizing potential.',
      features: ['1-on-1 Coaching', 'Skill Assessment', 'Career Roadmap']
    },
    {
      icon: <GraduationCap size={32} />,
      title: 'Training',
      description: 'Customized training sessions on tools, tech, productivity, and communication.',
      features: ['Online & Offline', 'Interactive Modules', 'Certificates']
    },
    {
      icon: <ClipboardList size={32} />,
      title: 'Project Management',
      description: 'Managing deliverables, resources, and timelines to ensure smooth project execution.',
      features: ['Task Planning', 'Progress Tracking', 'Stakeholder Updates']
    },
    {
      icon: <Headphones size={32} />,
      title: 'Virtual Assistance',
      description: 'Remote admin support for scheduling, communication, research, and more.',
      features: ['Email Management', 'Calendar Coordination', 'Task Automation']
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
            A wide range of professional services to support your business, property, content, and career development goals.
          </p>
        </div>

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
