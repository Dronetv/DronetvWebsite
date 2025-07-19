import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false); // To toggle language dropdown
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNavigation = (path) => {
    setIsMenuOpen(false);
    navigate(path);
    window.scrollTo(0, 0);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Companies', path: '/companies' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Professionals', path: '/professionals' },
    { name: 'Partner with us', path: '/partner' },
    { name: 'News', path: '/news' },
    { name: 'Videos', path: '/videos' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${isScrolled
      ? 'bg-yellow-400/95 backdrop-blur-lg shadow-2xl border-b border-yellow-500/20'
      : 'bg-yellow-400'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 group">
            <img
              src="/images/logo.png"
              alt="Drone TV Logo"
              className="w-40 h-14 mx-auto cursor-pointer group-hover:scale-110 transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 group overflow-hidden whitespace-nowrap ${location.pathname === item.path
                  ? 'text-gray-800 bg-black/10'
                  : 'text-black hover:text-gray-800'
                  }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-black/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
              </Link>
            ))}
            {/* Language Selector */}
            <div className="relative">
              <button onClick={() => setIsLanguageOpen(!isLanguageOpen)} className="text-black hover:text-gray-800 flex items-center space-x-2">
                <img src="/images/download.png" alt="Language" className="h-6 w-6 rounded-full" /> {/* Replace with actual flag image path */}
                <span className="text-sm">Language</span>
              </button>
              {isLanguageOpen && (
                <div className="absolute bg-white border-2 border-gray-200 rounded-lg shadow-lg mt-2">
                  <div className="p-2">
                    <ul>
                      {/* Add your language options here */}
                      <li className="px-4 py-2 cursor-pointer">English</li>


                      <li className="px-4 py-2 cursor-pointer">Hindi</li>
                      <li className="px-4 py-2 cursor-pointer">Bengali</li>
                      <li className="px-4 py-2 cursor-pointer">Telugu</li>

                      <li className="px-4 py-2 cursor-pointer">Tamil</li>
                      <li className="px-4 py-2 cursor-pointer">Kannada</li>
                      <li className="px-4 py-2 cursor-pointer">Odia</li>
                      <li className="px-4 py-2 cursor-pointer">Assamese</li>

                      <li className="px-4 py-2 cursor-pointer">Nepali</li>
                      <li className="px-4 py-2 cursor-pointer">Spanish</li>
                      <li className="px-4 py-2 cursor-pointer">French</li>
                      <li className="px-4 py-2 cursor-pointer">Chinese</li>

                      {/* Add more languages as needed */}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-gray-800 focus:outline-none focus:text-gray-800 transition-all duration-300 hover:scale-110"
            >
              <div className="relative w-6 h-6">
                <Menu className={`h-6 w-6 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                <X className={`h-6 w-6 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`xl:hidden transition-all duration-500 ease-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-yellow-400">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-black/10 transform hover:translate-x-2 ${location.pathname === item.path
                  ? 'text-gray-800 bg-black/10'
                  : 'text-black hover:text-gray-800'
                  }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                  opacity: isMenuOpen ? 1 : 0,
                  transition: `all 0.3s ease-out ${index * 50}ms`
                }}
              >
                {item.name}
              </button>
            ))}
            <div className="px-3 py-2">
              <Search className="h-5 w-5 text-black hover:text-gray-800 cursor-pointer transition-all duration-300 hover:scale-125" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
