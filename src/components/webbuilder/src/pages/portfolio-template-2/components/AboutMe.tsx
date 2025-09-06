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
                    src="/images/dev.png"
                    alt="Dev R"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#FF0000] rounded-full flex items-center justify-center">
                  <Award size={16} className="text-white" />
                </div>
              </div>

              <h2 className="text-3xl font-bold text-black mt-6 mb-2">Dev R</h2>
              <p className="text-black/80 text-lg font-medium text-center">
                Founder & CEO — IPage UM Services (Singapore & India)<br />India Drone Academy | Drone TV
              </p>
              <p className="text-black/70 text-base mt-2">
                Driving Innovation in Drone Technology | GIS | AI | IT Solutions
              </p>
            </div>

            {/* Content */}
            <div className="p-12">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Bio */}
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-6">About Me</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    As the Founder & CEO of IPage UM Services Pte Ltd (Singapore) and IPage UM Services Pvt Ltd (India), I bring over 16 years of expertise across UAV technology, GIS, AI, and IT solutions. In India, I led national-scale projects like Amaravati with Surbana Jurong and infrastructure initiatives like Polavaram and Kaleshwaram, using drones and geospatial analytics for smarter governance. I also established India Drone Academy, a DGCA-certified training institute, and created DroneTV to broadcast global drone innovations and insights. Our platforms now power real-time mapping, smart data portals, and immersive UAV learning ecosystems.
                  </p>
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
                        <div className="text-black dark:text-white font-semibold">bd@ipageums.com</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">WhatsApp</div>
                        <div className="text-black dark:text-white font-semibold">+65 9006 2901</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MapPin size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Location</div>
                        <div className="text-black dark:text-white font-semibold">Singapore & Hyderabad, India</div>
                      </div>
                    </div>
                  </div>

                  {/* Signature */}
                  <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-3xl font-bold text-[#FFD400] opacity-60 transform -rotate-2">
                      Dev R
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      "Broadcasting the future of drones — one innovation, one story at a time."
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