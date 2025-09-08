import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            About <span className="text-[#FF0000]">Me</span>
          </h2>
          <div data-aos="fade-up" data-aos-delay="200" className="w-24 h-1 bg-[#FFD400] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div data-aos="fade-right" className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <img 
                src="/images/sumit.jpg" 
                alt="Sumit Krishnan" 
                className="w-full h-98 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#FFD400] text-black px-6 py-3 rounded-full font-bold shadow-lg">
              11+ Years Experience
            </div>
          </div>

          {/* Content */}
          <div data-aos="fade-left">
            <h3 className="text-3xl font-bold text-black dark:text-white mb-6">
              DGCA RPAS Instructor & Aerospace Educator
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I am a DGCA-certified Remotely Piloted Aircraft Instructor (Medium & Small Class) with over 11 years of combined experience in drone operations and aerospace education. I currently train drone pilots at India Drone Academy, Hyderabad.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Previously an Assistant Professor of Aerospace Engineering, I've authored a book titled <i>Fundamentals of Propulsion</i>, published 7 research papers, and organized ICASAS-2019. I specialize in drone pilot training, flight dynamics, and UAV curriculum development.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Email:</span>
                  <p className="text-black dark:text-white font-semibold">sumit@indiadroneacademy.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Phone:</span>
                  <p className="text-black dark:text-white font-semibold">+91-9580120509</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Location:</span>
                  <p className="text-black dark:text-white font-semibold">Hyderabad, Telangana</p>
                </div>
              </div>
            </div>

            {/* Signature */}
            <div className="relative">
              <div className="text-4xl font-bold text-[#FFD400] opacity-50">
                Sumit Krishnan
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;