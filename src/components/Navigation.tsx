import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
    { name: 'Videos', path: '/videos' },
    { name: 'Professionals', path: '/professionals' },
    { name: 'Companies', path: '/companies' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Events', path: '/events' },
    { name: 'News & Blogs', path: '/news' },
    { name: 'About Us', path: '/about' },
    { name: 'Partner With Us', path: '/partner' },
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
  <Link to="/">
    <h1 className="text-2xl font-bold text-black cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:text-gray-800">
      <img
        src="1.png"
        alt="Drone TV Logo"
        className="inline-block w-40 h-14 mr-0 -ml-4"  // Further adjust negative left margin
      />
    </h1>
  </Link>
</div>






          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group overflow-hidden ${location.pathname === item.path
                  ? 'text-gray-800 bg-black/10'
                  : 'text-black hover:text-gray-800'
                  }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-black/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
              </Link>
            ))}
          </div>

          {/* Search Icon */}
          <div className="hidden lg:flex items-center">
            <div className="relative group">
              <Search className="h-5 w-5 text-black hover:text-gray-800 cursor-pointer transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
              <div className="absolute -inset-2 bg-black/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
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
        <div className={`lg:hidden transition-all duration-500 ease-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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