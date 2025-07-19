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
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Profile" 
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#FFD400] text-black px-6 py-3 rounded-full font-bold shadow-lg">
              5+ Years Experience
            </div>
          </div>

          {/* Content */}
          <div data-aos="fade-left">
            <h3 className="text-3xl font-bold text-black dark:text-white mb-6">
              Creative Drone Pilot & Visual Storyteller
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate drone photographer and UAV developer with over 5 years of experience 
              capturing breathtaking aerial footage. My work combines technical expertise with 
              creative vision to deliver stunning visual narratives.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Specialized in commercial drone operations, cinematography, and custom UAV solutions. 
              I help brands and individuals tell their stories from unique perspectives.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Email:</span>
                  <p className="text-black dark:text-white font-semibold">alex.chen@dronetv.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Phone:</span>
                  <p className="text-black dark:text-white font-semibold">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Location:</span>
                  <p className="text-black dark:text-white font-semibold">Los Angeles, CA</p>
                </div>
              </div>
            </div>

            {/* Signature */}
            <div className="relative">
              <div className="text-4xl font-bold text-[#FFD400] opacity-50">
                Alex Chen
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;