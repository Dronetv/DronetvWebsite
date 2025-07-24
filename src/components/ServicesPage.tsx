import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ChevronDown, Zap as Drone, Brain, Map, Star, Users, MapPin, Phone, Mail, ArrowRight, Building2 } from 'lucide-react';

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popularity');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredServices, setFilteredServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 12;

  const categories = ['All', 'Drone Technology', 'AI Solutions', 'GIS Services', 'Consulting', 'Training', 'Maintenance'];
  const sortOptions = [
    { value: 'popularity', label: 'Sort by Popularity' },
    { value: 'rating', label: 'Sort by Rating' },
    { value: 'price', label: 'Sort by Price' },
    { value: 'company', label: 'Sort by Company' }
  ];

  const allServices = [
  {
    id: 1,
    title: "Advanced Drone Surveying",
    company: "IPage UM Services",
    description:
      "Efficient and accurate drone-based surveying solutions tailored for infrastructure, urban planning, and irrigation projects.",
    image:
      "/images/drone.png",
    category: "Drone Technology",
    price: "₹22,000/KM",
    rating: 4.9,
    popularity: 96,
    location: "Hyderabad, India",
    features: [
      "Orthomosaic Generation",
      "Topographic Mapping",
      "Infrastructure Scanning",
      "High Accuracy GCP Integration",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "AI-Driven Infrastructure Inspection",
    company: "IPage UM Services",
    description:
      "Automated inspections using drone-captured imagery with AI for crack detection, corrosion analysis, and structural health monitoring.",
    image:
      "/images/ai.png",
    category: "AI & ML Solutions",
    price: "₹48,000/KM",
    rating: 4.8,
    popularity: 93,
    location: "Singapore & India",
    features: [
      "AI Anomaly Detection",
      "Thermal Analysis",
      "Detailed Reports",
      "Cloud Integration",
    ],
    featured: true,
  },
  {
    id: 3,
    title: "GIS-based Precision Agriculture",
    company: "IPage UM Services",
    description:
      "Empowering farmers with drone-enabled crop health monitoring, NDVI mapping, and variable rate spraying through GIS analytics.",
    image:
      "/images/GIS.png",
    category: "GIS & Agriculture",
    price: "₹38,000/KM",
    rating: 4.7,
    popularity: 90,
    location: "Andhra Pradesh, India",
    features: [
      "NDVI & NDRE Index",
      "Field Zoning",
      "Real-time Crop Stress Detection",
      "Agriculture Analytics",
    ],
    featured: true,
  },

    {
      id: 4,
      title: "Drone Pilot Training Program",
      company: "Precision Aerial",
      description: "Comprehensive drone pilot training and certification programs for commercial and recreational operators.",
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Training",
      price: "₹45,000",
      rating: 4.6,
      popularity: 85,
      location: "Hyderabad, TS",
      features: ["FAA Certification", "Hands-on Training", "Safety Protocols", "Equipment Included"]
    },
    {
      id: 5,
      title: "Industrial Inspection Services",
      company: "CloudNav Industries",
      description: "Professional drone inspection services for industrial facilities, power lines, and infrastructure assets.",
      image: "https://images.pexels.com/photos/724712/pexels-photo-724712.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Drone Technology",
      price: "₹1,50,000/KM",
      rating: 4.8,
      popularity: 90,
      location: "Hyderabad,TS",
      features: ["Thermal Imaging", "Detailed Reports", "Safety Compliance", "Quick Turnaround"]
    },
    {
      id: 6,
      title: "Machine Learning Consulting",
      company: "FutureFlight Corp",
      description: "Expert consulting services for implementing machine learning solutions in drone operations and data analysis.",
      image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Consulting",
      price: "₹12,000/KM",
      rating: 4.9,
      popularity: 87,
      location: "Boston, MA",
      features: ["Custom Solutions", "Expert Team", "Implementation Support", "Training Included"]
    },
    {
      id: 7,
      title: "Environmental Monitoring",
      company: "EcoSky Solutions",
      description: "Comprehensive environmental monitoring services using drone technology for wildlife, forestry, and conservation projects.",
      image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "GIS Services",
      price: "₹28,000/KM",
      rating: 4.5,
      popularity: 82,
      location: "Hyderabad, TS",
      features: ["Wildlife Tracking", "Forest Health", "Water Quality", "Conservation Reports"]
    },
    {
      id: 8,
      title: "Autonomous Flight Systems",
      company: "AutoFly Technologies",
      description: "Development and implementation of autonomous flight systems for commercial drone operations.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "AI Solutions",
      price: "₹2,50,000/Project",
      rating: 4.7,
      popularity: 89,
      location: "Hyderabad, TS",
      features: ["Autonomous Navigation", "Obstacle Avoidance", "Mission Planning", "Safety Systems"]
    },
    {
      id: 9,
      title: "Drone Maintenance Services",
      company: "IPAGEUMS",
      description: "Professional maintenance and repair services for all types of commercial and industrial drones.",
      image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Maintenance",
      price: "₹18,000/Service",
      rating: 4.4,
      popularity: 78,
      location: "Hyderabad, TS",
      features: ["Preventive Maintenance", "Emergency Repairs", "Parts Replacement", "Performance Testing"]
    },
    {
      id: 10,
      title: "Urban Planning GIS",
      company: "IPAGEUMS",
      description: "Specialized GIS services for urban planning, smart city development, and municipal infrastructure management.",
      image: "https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "GIS Services",
      price: "₹60,000/KM",
      rating: 4.6,
      popularity: 84,
      location: "Hyderabad, TS",
      features: ["Urban Analysis", "Traffic Planning", "Infrastructure Mapping", "Population Studies"]
    },
    {
      id: 11,
      title: "Search and Rescue Operations",
      company: "IPAGEUMS",
      description: "Emergency search and rescue operations using advanced drone technology and thermal imaging systems.",
      image: "https://images.pexels.com/photos/724712/pexels-photo-724712.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Drone Technology",
      price: "₹26,000/KM",
      rating: 4.9,
      popularity: 91,
      location: "Hyderabad, TS",
      features: ["24/7 Availability", "Thermal Imaging", "GPS Tracking", "Emergency Response"]
    },
    {
      id: 12,
      title: "AI Data Analytics Platform",
      company: "IPAGEUMS",
      description: "Cloud-based AI platform for analyzing drone-collected data with advanced machine learning algorithms.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "AI Solutions",
      price: "Depends Upon product",
      rating: 4.8,
      popularity: 86,
      location: "Hyderabad, TS",
      features: ["Cloud Processing", "Custom Dashboards", "API Access", "Real-time Analytics"]
    }
  ];

  useEffect(() => {
    let filtered = allServices;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.features.some(feature =>
          feature.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return b.popularity - a.popularity;
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'company':
          return a.company.localeCompare(b.company);
        default:
          return 0;
      }
    });

    setFilteredServices(filtered);
    setCurrentPage(1);
  }, [selectedCategory, sortBy, searchQuery]);

  const featuredServices = allServices.filter(service => service.featured);
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = filteredServices.slice(indexOfFirstService, indexOfLastService);
  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Drone Technology': return Drone;
      case 'AI Solutions': return Brain;
      case 'GIS Services': return Map;
      case 'Consulting': return Users;
      case 'Training': return Building2;
      case 'Maintenance': return Building2;
      default: return Building2;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Drone Technology': return 'bg-black';
      case 'AI Solutions': return 'bg-gray-900';
      case 'GIS Services': return 'bg-gray-800';
      case 'Consulting': return 'bg-gray-700';
      case 'Training': return 'bg-gray-600';
      case 'Maintenance': return 'bg-black';
      default: return 'bg-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-yellow-400 pt-16">
      {/* Hero Section */}
      <section className="py-3 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200/30 rounded-full animate-pulse blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-600/20 rounded-full animate-pulse blur-2xl" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-2xl md:text-5xl font-black text-black mb-2 tracking-tight">
            Services Directory

          </h1>
          <p className="text-xl text-black/80 max-w-2xl mx-auto mb-4">
            Explore top services in Drone Tech, AI, and GIS.
          </p>
          <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-3 bg-yellow-400 sticky top-16 z-40 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-2 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-xs">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black/60" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-black/20 bg-yellow-200 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40 text-black placeholder-black/60 font-medium text-sm transition-all duration-300"
              />
            </div>

            {/* Filter and Sort Controls */}
            <div className="flex gap-3">
              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-yellow-200 backdrop-blur-sm border-2 border-black/20 rounded-lg px-3 py-2 text-black font-medium focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40 text-sm transition-all duration-300 w-44"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'All' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black/60 pointer-events-none" />
              </div>

              {/* Sort Options */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-yellow-200 backdrop-blur-sm border-2 border-black/20 rounded-lg px-3 py-2 text-black font-medium focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40 text-sm transition-all duration-300 w-44"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black/60 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          <div className="mt-2 flex flex-wrap gap-2">
            {selectedCategory !== 'All' && (
              <span className="bg-black text-yellow-400 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                Category: {selectedCategory}
                <button onClick={() => setSelectedCategory('All')} className="hover:text-white transition-colors duration-200 text-sm">×</button>
              </span>
            )}
            {searchQuery && (
              <span className="bg-black text-yellow-400 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                Search: "{searchQuery}"
                <button onClick={() => setSearchQuery('')} className="hover:text-white transition-colors duration-200 text-sm">×</button>
              </span>
            )}
          </div>
        </div>
      </section>


      {/* Featured Services Section */}
      <section className="py-4 bg-gradient-to-b from-yellow-400 to-yellow-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => {
              const IconComponent = getCategoryIcon(service.category);

              return (
                <div
                  key={service.id}
                  className="group bg-[#f1ee8e] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-105 hover:-rotate-1 border-2 border-black/20 hover:border-black/40"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animation: `fadeInUp 0.8s ease-out ${index * 200}ms both`
                  }}
                >
                  <div className="p-4">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <Link
                          to={`/service/${service.id}`}
                          className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold shadow-2xl transform scale-0 group-hover:scale-100 transition-all duration-500 hover:bg-yellow-300"
                        >
                          View Details
                        </Link>
                      </div>

                      <div className={`absolute top-4 right-4 ${getCategoryColor(service.category)} text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1`}>
                        <IconComponent className="h-3 w-3" />
                        {service.category}
                      </div>

                      <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded-lg text-xs font-medium">
                        {service.price}
                      </div>

                      <div className="absolute top-4 left-4 bg-yellow-400 text-black px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                        <Star className="h-3 w-3 fill-current" />
                        Featured
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-2 font-semibold text-sm">{service.company}</p>
                    <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-gray-500 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-current text-yellow-500" />
                          {service.rating}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {service.location}
                        </div>
                      </div>
                      <div className="text-lg font-bold text-black">{service.price}</div>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={feature}
                            className="bg-yellow-300 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 3 && (
                          <span className="bg-yellow-300 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                            +{service.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-black">
              All Services ({filteredServices.length})
            </h2>
            <div className="text-black/60">
              Page {currentPage} of {totalPages}
            </div>
          </div>

          {currentServices.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 max-w-md mx-auto">
                <Search className="h-16 w-16 text-black/40 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-black mb-2">No services found</h3>
                <p className="text-black/60">Try adjusting your filters or search terms</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {currentServices.map((service, index) => {
                const IconComponent = getCategoryIcon(service.category);

                return (
                  <div
                    key={service.id}
                    className="group bg-[#f1ee8e] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-105 border-2 border-black/20 hover:border-black/40"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: `fadeInUp 0.8s ease-out ${index * 100}ms both`
                    }}
                  >
                    <div className="p-3">
                      <div className="relative overflow-hidden rounded-2xl">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-40 object-cover transition-all duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <Link
                            to={`/service/${service.id}`}
                            className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold shadow-2xl transform scale-0 group-hover:scale-100 transition-all duration-500 hover:bg-yellow-300"
                          >
                            View Details
                          </Link>
                        </div>

                        <div className={`absolute top-3 right-3 ${getCategoryColor(service.category)} text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1`}>
                          <IconComponent className="h-3 w-3" />
                          {service.category}
                        </div>

                        <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded-lg text-xs font-medium">
                          {service.price}
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="text-lg font-bold text-black mb-1 group-hover:text-gray-800 transition-colors duration-300 line-clamp-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-2 font-semibold text-sm">{service.company}</p>
                      <p className="text-gray-600 mb-3 line-clamp-2 text-sm">{service.description}</p>

                      <div className="flex items-center justify-between text-xs mb-3">
                        <div className="flex items-center gap-3 text-gray-500">
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-current text-yellow-500" />
                            {service.rating}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {service.location.split(',')[0]}
                          </div>
                        </div>
                        <div className="text-sm font-bold text-black">{service.price}</div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {service.features.slice(0, 2).map((feature, idx) => (
                          <span
                            key={feature}
                            className="bg-yellow-300 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 2 && (
                          <span className="bg-yellow-300 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                            +{service.features.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-xl bg-white/80 backdrop-blur-sm border-2 border-black/20 text-black font-medium hover:bg-white hover:border-black/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Previous
                </button>

                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;
                  if (page === currentPage || page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${page === currentPage
                            ? 'bg-black text-yellow-400 border-2 border-black'
                            : 'bg-white/80 backdrop-blur-sm border-2 border-black/20 text-black hover:bg-white hover:border-black/40'
                          }`}
                      >
                        {page}
                      </button>
                    );
                  } else if (page === currentPage - 2 || page === currentPage + 2) {
                    return <span key={page} className="px-2 text-black/60">...</span>;
                  }
                  return null;
                })}

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-xl bg-white/80 backdrop-blur-sm border-2 border-black/20 text-black font-medium hover:bg-white hover:border-black/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;