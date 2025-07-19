import React from 'react';
import { Mail, Phone, MapPin, Award } from 'lucide-react';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Profile Card */}
          <div data-aos="fade-up" className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
            {/* Header with Profile Photo */}
            <div className="relative bg-gradient-to-r from-[#FFD400] to-[#FFD400]/80 p-12 text-center">
              <div className="relative inline-block">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto group">
                  <img 
                    src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Marcus Johnson" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#FF0000] rounded-full flex items-center justify-center">
                  <Award size={16} className="text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-black mt-6 mb-2">Marcus Johnson</h2>
              <p className="text-black/80 text-lg font-medium">Professional Drone Pilot & Content Creator</p>
            </div>

            {/* Content */}
            <div className="p-12">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Bio */}
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-6">About Me</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    I'm a passionate drone pilot and visual storyteller with over 6 years of experience 
                    in aerial photography and cinematography. My work spans across real estate, 
                    events, documentaries, and commercial projects.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                    I specialize in creating compelling aerial content that captures unique perspectives 
                    and tells powerful stories. From breathtaking landscapes to dynamic action shots, 
                    I bring creativity and technical expertise to every project.
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#FF0000]">150+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#FF0000]">6+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Years</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#FF0000]">50+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Clients</div>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-6">Get In Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Email</div>
                        <div className="text-black dark:text-white font-semibold">marcus@dronetv.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Phone</div>
                        <div className="text-black dark:text-white font-semibold">+1 (555) 987-6543</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MapPin size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Location</div>
                        <div className="text-black dark:text-white font-semibold">San Francisco, CA</div>
                      </div>
                    </div>
                  </div>

                  {/* Signature */}
                  <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-3xl font-bold text-[#FFD400] opacity-60 transform -rotate-2">
                      Marcus Johnson
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      "Capturing the world from above"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;