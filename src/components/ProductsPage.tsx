import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ChevronDown, Package, Star, Eye, DollarSign, Calendar, Zap, Shield, Cpu } from 'lucide-react';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popularity');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const categories = ['All', 'Drones', 'Sensors', 'Accessories', 'Software', 'Batteries', 'Cameras'];
  const sortOptions = [
    { value: 'popularity', label: 'Sort by Popularity' },
    { value: 'price', label: 'Sort by Price' },
    { value: 'name', label: 'Sort by Name' },
    { value: 'rating', label: 'Sort by Rating' }
  ];

  const allProducts = [
     {
    id: 1,
    name: "AGRIBOT A5",
    description: "India’s 1st Type Certified Agriculture Drone, approved by DGCA.",
    image: "/images/product1.png",
    category: "Agriculture Drones",
    price: "₹4,50,000",
    rating: 5.0,
    popularity: 95,
    features: ["1 Acre Spray in 7 Minutes", "Water Usage: 8-10 Liters per Acre", "3 in 1 Agri Drone: Spray, Broadcast, Crop Health Monitoring"],
    featured: true
  },
  {
    id: 2,
    name: "AGRIBOT A6",
    description: "Advanced Agriculture Drone with DGCA Certification.",
    image: "/images/product2.png",
    category: "Agriculture Drones",
    price: "₹5,50,000",
    rating: 4.9,
    popularity: 90,
    features: ["1 Acre Spray in 7 Minutes", "Water Usage: 8-10 Liters per Acre", "Radar-Based Collision Detection", "Fleet Management Dashboard"],
    featured: true
  },
  {
    id: 3,
    name: "Surveybot",
    description: "Advanced drone for aerial surveys with 16-channel LiDAR for accurate data collection.",
    image: "/images/product3.png",
    category: "Survey Drones",
    price: "₹6,50,000",
    rating: 4.8,
    popularity: 89,
    features: ["16-Channel LiDAR for Precision", "360° 3D High-Speed Scanning", "Battery and Engine Powered", "Terrain Compatibility"],
    featured: true
  },
    {
      id: 4,
      name: "Professional Gimbal Camera",
      description: "3-axis stabilized camera with 4K recording and professional-grade image quality.",
      image: "https://images.pexels.com/photos/724712/pexels-photo-724712.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Cameras",
      price: "$1,299",
      rating: 4.6,
      popularity: 85,
      features: ["3-axis Stabilization", "4K Recording", "Professional Quality"]
    },
    {
      id: 5,
      name: "Long-Range Battery Pack",
      description: "Extended flight time battery with intelligent power management and fast charging.",
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Batteries",
      price: "$199",
      rating: 4.5,
      popularity: 78,
      features: ["60min Flight Time", "Fast Charging", "Smart Management"]
    },
    {
      id: 6,
      name: "Drone Fleet Management Software",
      description: "Comprehensive software solution for managing multiple drones and flight operations.",
      image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Software",
      price: "$299/month",
      rating: 4.8,
      popularity: 90,
      features: ["Fleet Management", "Real-time Monitoring", "Analytics Dashboard"]
    },
    {
      id: 7,
      name: "Thermal Imaging Camera",
      description: "High-resolution thermal camera for search and rescue, inspection, and surveillance applications.",
      image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Cameras",
      price: "$3,999",
      rating: 4.9,
      popularity: 82,
      features: ["Thermal Imaging", "High Resolution", "Multiple Applications"]
    },
    {
      id: 8,
      name: "Precision Landing Pad",
      description: "Smart landing pad with LED guidance system and automatic drone positioning.",
      image: "https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Accessories",
      price: "$399",
      rating: 4.4,
      popularity: 75,
      features: ["LED Guidance", "Auto Positioning", "Weather Resistant"]
    },
    {
      id: 9,
      name: "Racing Drone Kit",
      description: "High-performance racing drone kit with carbon fiber frame and FPV system.",
      image: "https://images.pexels.com/photos/724712/pexels-photo-724712.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Drones",
      price: "$799",
      rating: 4.7,
      popularity: 88,
      features: ["Carbon Fiber", "FPV System", "High Performance"]
    },
    {
      id: 10,
      name: "Multi-Spectral Sensor",
      description: "Advanced multi-spectral imaging sensor for precision agriculture and environmental monitoring.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Sensors",
      price: "$4,999",
      rating: 4.8,
      popularity: 79,
      features: ["Multi-Spectral", "Agriculture Ready", "Environmental Monitoring"]
    },
    {
      id: 11,
      name: "Drone Carrying Case",
      description: "Professional-grade carrying case with custom foam inserts and weather protection.",
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Accessories",
      price: "$149",
      rating: 4.3,
      popularity: 70,
      features: ["Weather Protection", "Custom Foam", "Professional Grade"]
    },
    {
      id: 12,
      name: "Smart Battery Charger",
      description: "Intelligent multi-battery charger with safety features and fast charging capabilities.",
      image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Batteries",
      price: "$299",
      rating: 4.6,
      popularity: 83,
      features: ["Multi-Battery", "Safety Features", "Fast Charging"]
    }
  ];

  useEffect(() => {
    let filtered = allProducts;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.features.some(feature =>
          feature.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return b.popularity - a.popularity;
        case 'price':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [selectedCategory, sortBy, searchQuery]);

  const featuredProducts = allProducts.filter(product => product.featured);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Drones': return Zap;
      case 'Sensors': return Cpu;
      case 'Accessories': return Package;
      case 'Software': return Shield;
      case 'Batteries': return Zap;
      case 'Cameras': return Eye;
      default: return Package;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Drones': return 'bg-black';
      case 'Sensors': return 'bg-gray-900';
      case 'Accessories': return 'bg-gray-800';
      case 'Software': return 'bg-gray-700';
      case 'Batteries': return 'bg-gray-600';
      case 'Cameras': return 'bg-black';
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
            Products Catalog
          </h1>
          <p className="text-xl text-black/80 max-w-2xl mx-auto mb-4">
            Explore advanced drones, sensors, and accessories for professionals.
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
                placeholder="Search products..."
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


      {/* Featured Products Section */}
      <section className="py-4 bg-gradient-to-b from-yellow-400 to-yellow-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => {
              const IconComponent = getCategoryIcon(product.category);

              return (
                <div
                  key={product.id}
                  className="group bg-[#f1ee8e] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-105 hover:-rotate-1 border-2 border-black/20 hover:border-black/40"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animation: `fadeInUp 0.8s ease-out ${index * 200}ms both`
                  }}
                >
                  <div className="p-3">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 border-b-2 border-black/10"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <Link
                          to={`/product/${product.id}`}
                          className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold shadow-2xl transform scale-0 group-hover:scale-100 transition-all duration-500 hover:bg-yellow-300"
                        >
                          View Details
                        </Link>
                      </div>

                      <div className={`absolute top-4 right-4 ${getCategoryColor(product.category)} text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1`}>
                        <IconComponent className="h-3 w-3" />
                        {product.category}
                      </div>

                      <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1">
                        {/* <DollarSign className="h-3 w-3" /> */}
                        {product.price}
                      </div>

                      <div className="absolute top-4 left-4 bg-yellow-400 text-black px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                        <Star className="h-3 w-3 fill-current" />
                        Featured
                      </div>
                    </div>

                    <div className="p-6">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors duration-300 cursor-pointer">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4 text-gray-500 text-sm">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-current text-yellow-500" />
                            {product.rating}
                          </div>
                        </div>
                        <div className="text-xl font-bold text-black">{product.price}</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={feature}
                            className="bg-yellow-300 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-16 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-black">
              All Products ({filteredProducts.length})
            </h2>
            <div className="text-black/60">
              Page {currentPage} of {totalPages}
            </div>
          </div>

          {currentProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 max-w-md mx-auto">
                <Search className="h-16 w-16 text-black/40 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-black mb-2">No products found</h3>
                <p className="text-black/60">Try adjusting your filters or search terms</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {currentProducts.map((product, index) => {
                const IconComponent = getCategoryIcon(product.category);

                return (
                  <div
                    key={product.id}
                    className="group bg-[#f1ee8e] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-105 border-2 border-black/20 hover:border-black/40"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: `fadeInUp 0.8s ease-out ${index * 100}ms both`
                    }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-40 object-cover transition-all duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <Link
                          to={`/product/${product.id}`}
                          className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold shadow-2xl transform scale-0 group-hover:scale-100 transition-all duration-500 hover:bg-yellow-300"
                        >
                          View Details
                        </Link>
                      </div>

                      <div className={`absolute top-3 right-3 ${getCategoryColor(product.category)} text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1`}>
                        <IconComponent className="h-3 w-3" />
                        {product.category}
                      </div>

                      <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1">
                        
                        {product.price}
                      </div>
                    </div>

                    <div className="p-4">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="text-lg font-bold text-black mb-2 group-hover:text-gray-800 transition-colors duration-300 line-clamp-2 cursor-pointer">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mb-3 line-clamp-2 text-sm">{product.description}</p>

                      <div className="flex items-center justify-between text-xs mb-3">
                        <div className="flex items-center gap-1 text-gray-500">
                          <Star className="h-3 w-3 fill-current text-yellow-600" />
                          {product.rating}
                        </div>
                        <div className="text-lg font-bold text-black">{product.price}</div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {product.features.slice(0, 2).map((feature, idx) => (
                          <span
                            key={feature}
                            className="bg-yellow-300 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {feature}
                          </span>
                        ))}
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

export default ProductsPage;