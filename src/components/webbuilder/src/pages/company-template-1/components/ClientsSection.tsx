import React from 'react';
import { Star } from 'lucide-react';

const ClientsSection: React.FC = () => {
  const clients = [
    {
      name: 'TechCorp Industries',
      logo: 'https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&w=200',
      industry: 'Technology'
    },
    {
      name: 'AgriGrow Solutions',
      logo: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=200',
      industry: 'Agriculture'
    },
    {
      name: 'BuildMax Construction',
      logo: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=200',
      industry: 'Construction'
    },
    {
      name: 'SecureGuard Systems',
      logo: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
      industry: 'Security'
    },
    {
      name: 'GeoSurvey Pro',
      logo: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=200',
      industry: 'Surveying'
    },
    {
      name: 'EnergyFlow Corp',
      logo: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=200',
      industry: 'Energy'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'Project Manager',
      company: 'BuildMax Construction',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'DroneTech\'s surveying solutions have revolutionized our construction projects. The accuracy and efficiency are unmatched.'
    },
    {
      name: 'Priya Sharma',
      position: 'Agricultural Consultant',
      company: 'AgriGrow Solutions',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The agricultural monitoring drones have helped our farmers increase crop yields by 30%. Exceptional technology and support.'
    },
    {
      name: 'Amit Patel',
      position: 'Security Director',
      company: 'SecureGuard Systems',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Outstanding surveillance capabilities. The real-time monitoring and alert systems have significantly enhanced our security operations.'
    }
  ];

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Clients Section */}
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-black mb-4">
            Trusted by <span className="text-[#FF0000]">Leading Brands</span>
          </h2>
          <div data-aos="fade-up" data-aos-delay="200" className="w-24 h-1 bg-[#FFD400] mx-auto mb-6"></div>
          <p data-aos="fade-up" data-aos-delay="400" className="text-gray-600 text-lg">
            Partnering with industry leaders across India to deliver exceptional drone solutions.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {clients.map((client, index) => (
            <div 
              key={index}
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              className="group flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 overflow-hidden group-hover:ring-4 group-hover:ring-[#FFD400]/30 transition-all">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm font-semibold text-black text-center mb-1">{client.name}</h3>
              <p className="text-xs text-gray-500">{client.industry}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-12">
          <h3 data-aos="fade-up" className="text-3xl font-bold text-black mb-4">
            What Our <span className="text-[#FF0000]">Clients Say</span>
          </h3>
          <div data-aos="fade-up" data-aos-delay="200" className="w-16 h-1 bg-[#FFD400] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              data-aos="fade-up" 
              data-aos-delay={index * 200}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#FFD400] fill-current" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Client Info */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-black">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                  <p className="text-xs text-[#FF0000] font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;