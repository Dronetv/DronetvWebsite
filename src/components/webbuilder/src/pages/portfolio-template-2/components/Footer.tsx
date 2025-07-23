import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
  Heart,
  X
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://www.facebook.com/dronetv.in',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/dronetv.in/',
      color: 'hover:text-pink-600'
    },
    {
      name: 'Twitter',
      icon: X,
      href: 'https://x.com/indiadronetv',
      color: 'hover:text-blue-400'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: 'https://www.youtube.com/@indiadronetv',
      color: 'hover:text-red-600'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'News', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23FFD400\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4">
              Drone<span className="text-[#FFD400]">TV</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              The global voice of drone innovation. Explore aerial stories, GIS mapping,
              tech insights, and creative visual media across India and beyond.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#FFD400]">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#FFD400] transition-colors duration-300 hover:translate-x-2 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#FFD400]">Get In Touch</h3>
            <div className="space-y-3 text-gray-400">
              <p>bd@ipageums.com</p>
              <p>+91 7799100040</p>
              <p>Hyderabad | Singapore | India</p>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold text-white mb-2">We Cover:</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Aerial Photography & Inspections</li>
                <li>• Drone Training & Simulation</li>
                <li>• Broadcast & Events Coverage</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gray-900 rounded-3xl p-8 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Stay Connected with <span className="text-[#FFD400]">DroneTV</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Get the latest on drone tech, aerial footage trends, exclusive interviews,
              and coverage of major drone expos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 bg-gray-800 border border-gray-700 rounded-full focus:ring-2 focus:ring-[#FF0000] focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
              />
              <button className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center gap-2">
              © 2025 DroneTV | Built with
              
              by IPAGEUM Services / Drone TV Team
            </div>
            <div className="flex items-center gap-6">
              <div className="flex gap-4 text-sm text-gray-400">
                <a href="#" className="hover:text-[#FFD400] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[#FFD400] transition-colors">Terms of Service</a>
              </div>
              <button
                onClick={scrollToTop}
                className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center text-white hover:bg-[#FF0000]/90 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
