import React, { useState, useEffect } from 'react';
import { Search, Filter, ChevronDown, Building2, MapPin, Users, TrendingUp, Star, ExternalLink, Award, Calendar } from 'lucide-react';

const CompaniesPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const companiesPerPage = 12;

  const industries = ['All', 'Drone Manufacturing', 'AI Systems', 'GIS Mapping', 'Software & Cloud', 'Professional Services', 'Energy & Propulsion', 'Startups'];
  const sortOptions = [
    { value: 'name', label: 'Sort by Name' },
    { value: 'rating', label: 'Sort by Rating' },
    { value: 'employees', label: 'Sort by Size' },
    { value: 'founded', label: 'Sort by Founded' }
  ];

  const allCompanies = [
    {
      id: 1,
      name: "AeroTech Solutions",
      logo: Building2,
      description: "Leading drone manufacturing and AI integration specialists revolutionizing autonomous flight systems with cutting-edge technology.",
      industry: "Drone Manufacturing",
      rating: 4.9,
      employees: "500+",
      growth: "+45%",
      location: "San Francisco, CA",
      founded: "2018",
      specialties: ["Autonomous Flight", "AI Integration", "Commercial Drones", "Fleet Management"],
      achievements: ["Industry Leader 2023", "Innovation Award", "Top Employer"],
      image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600",
      revenue: "$50M+",
      clients: "200+",
      featured: true
    },
    {
      id: 2,
      name: "SkyMap Technologies",
      logo: Building2,
      description: "GIS mapping and precision surveying industry pioneers with cutting-edge aerial data solutions for enterprise clients.",
      industry: "GIS Mapping",
      rating: 4.8,
      employees: "250+",
      growth: "+38%",
      location: "Austin, TX",
      founded: "2019",
      specialties: ["3D Mapping", "Aerial Surveying", "Data Analytics", "Environmental Monitoring"],
      achievements: ["GIS Excellence Award", "Sustainability Leader", "Tech Innovation"],
      image: "https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=600",
      revenue: "$25M+",
      clients: "150+",
      featured: true
    },
    {
      id: 3,
      name: "DroneAI Systems",
      logo: Building2,
      description: "Advanced AI algorithms for autonomous flight systems and intelligent decision-making platforms in aviation technology.",
      industry: "AI Systems",
      rating: 4.9,
      employees: "180+",
      growth: "+52%",
      location: "Seattle, WA",
      founded: "2020",
      specialties: ["Machine Learning", "Computer Vision", "Neural Networks", "Edge Computing"],
      achievements: ["AI Innovation Award", "Best Startup 2023", "Tech Pioneer"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      revenue: "$35M+",
      clients: "100+",
      featured: true
    },
    {
      id: 4,
      name: "CloudNav Industries",
      logo: Building2,
      description: "Cloud-based drone fleet management solutions with real-time monitoring and analytics for enterprise operations.",
      industry: "Software & Cloud",
      rating: 4.7,
      employees: "320+",
      growth: "+41%",
      location: "Denver, CO",
      founded: "2017",
      specialties: ["Fleet Management", "Cloud Computing", "Real-time Analytics", "IoT Integration"],
      achievements: ["Cloud Excellence", "Enterprise Solution", "Security Certified"],
      image: "https://images.pexels.com/photos/724712/pexels-photo-724712.jpeg?auto=compress&cs=tinysrgb&w=600",
      revenue: "$40M+",
      clients: "300+"
    },
    {
      id: 5,
      name: "Precision Aerial",
      logo: Building2,
      description: "Professional drone services and consulting experts for enterprise and government clients worldwide.",
      industry: "Professional Services",
      rating: 4.8,
      employees: "150+",
      growth: "+35%",
      location: "Miami, FL",
      founded: "2016",
      specialties: ["Consulting", "Training", "Compliance", "Custom Solutions"],
      achievements: ["Service Excellence", "Government Partner", "Training Leader"],
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600",
      revenue: "$20M+",
      clients: "250+"
    },
    {
      id: 6,
      name: "FutureFlight Corp",
      logo: Building2,
      description: "Next-generation drone propulsion and energy systems for extended flight capabilities and sustainable aviation.",
      industry: "Energy & Propulsion",
      rating: 4.9,
      employees: "400+",
      growth: "+48%",
      location: "Boston, MA",
      founded: "2015",
      specialties: ["Battery Technology", "Propulsion Systems", "Energy Efficiency", "R&D"],
      achievements: ["Innovation Leader", "Patent Portfolio", "Green Technology"],
      image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600",
      revenue: "$60M+",
      clients: "180+"
    },
    {
      id: 7,
      name: "NanoFly Innovations",
      logo: Building2,
      description: "Cutting-edge micro-drone technology and miniaturization solutions for specialized applications and research.",
      industry: "Startups",
      rating: 4.6,
      employees: "45+",
      growth: "+85%",
      location: "Palo Alto, CA",
      founded: "2022",
      specialties: ["Micro Drones", "Miniaturization", "Research", "Prototyping"],
      achievements: ["Startup of the Year", "Innovation Grant", "Tech Accelerator"],
      image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600",
      revenue: "$5M+",
      clients: "50+"
    },
    {
      id: 8,
      name: "AeroVision Systems",
      logo: Building2,
      description: "Advanced computer vision and image processing solutions for drone-based surveillance and monitoring systems.",
      industry: "AI Systems",
      rating: 4.7,
      employees: "120+",
      growth: "+42%",
      location: "Portland, OR",
      founded: "2019",
      specialties: ["Computer Vision", "Image Processing", "Surveillance", "Monitoring"],
      achievements: ["Vision Tech Award", "Security Partner", "AI Excellence"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      revenue: "$18M+",
      clients: "80+"
    },
    {
      id: 9,
      name: "TerraMap Solutions",
      logo: Building2,
      description: "Comprehensive terrain mapping and geographic analysis services using advanced drone surveying technology.",
      industry: "GIS Mapping",
      rating: 4.5,
      employees: "200+",
      growth: "+32%",
      location: "Phoenix, AZ",
      founded: "2018",
      specialties: ["Terrain Mapping", "Geographic Analysis", "Surveying", "Land Management"],
      achievements: ["Mapping Excellence", "Environmental Award", "Industry Recognition"],
      image: "https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=600",
      revenue: "$22M+",
      clients: "120+"
    },
    {
      id: 10,
      name: "SkyForge Manufacturing",
      logo: Building2,
      description: "Industrial-grade drone manufacturing with focus on durability, performance, and custom enterprise solutions.",
      industry: "Drone Manufacturing",
      rating: 4.8,
      employees: "380+",
      growth: "+39%",
      location: "Detroit, MI",
      founded: "2016",
      specialties: ["Industrial Drones", "Manufacturing", "Custom Solutions", "Enterprise"],
      achievements: ["Manufacturing Excellence", "Quality Award", "Industry Leader"],
      image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600",
      revenue: "$45M+",
      clients: "180+"
    },
    {
      id: 11,
      name: "FlightPath Analytics",
      logo: Building2,
      description: "Data analytics and flight optimization software for commercial drone operations and fleet management.",
      industry: "Software & Cloud",
      rating: 4.6,
      employees: "90+",
      growth: "+55%",
      location: "Chicago, IL",
      founded: "2020",
      specialties: ["Data Analytics", "Flight Optimization", "Software", "Fleet Management"],
      achievements: ["Analytics Award", "Software Innovation", "Growth Leader"],
      image: "https://images.pexels.com/photos/724712/pexels-photo-724712.jpeg?auto=compress&cs=tinysrgb&w=600",
      revenue: "$12M+",
      clients: "90+"
    },
    {
      id: 12,
      name: "DroneGuard Security",
      logo: Building2,
      description: "Specialized security and surveillance drone services for critical infrastructure and event protection.",
      industry: "Professional Services",
      rating: 4.7,
      employees: "160+",
      growth: "+43%",
      location: "Las Vegas, NV",
      founded: "2017",
      specialties: ["Security", "Surveillance", "Infrastructure", "Event Protection"],
      achievements: ["Security Excellence", "Government Contract", "Safety Award"],
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600",
      revenue: "$28M+",
      clients: "140+"
    }
  ];

  useEffect(() => {
    let filtered = allCompanies;

    // Filter by industry
    if (selectedIndustry !== 'All') {
      filtered = filtered.filter(company => company.industry === selectedIndustry);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(company =>
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.specialties.some(specialty =>
          specialty.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    // Sort companies
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rating':
          return b.rating - a.rating;
        case 'employees':
          return parseInt(b.employees) - parseInt(a.employees);
        case 'founded':
          return parseInt(b.founded) - parseInt(a.founded);
        default:
          return 0;
      }
    });

    setFilteredCompanies(filtered);
    setCurrentPage(1);
  }, [selectedIndustry, sortBy, searchQuery]);

  const featuredCompanies = allCompanies.filter(company => company.featured);
  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = filteredCompanies.slice(indexOfFirstCompany, indexOfLastCompany);
  const totalPages = Math.ceil(filteredCompanies.length / companiesPerPage);

  const getIndustryColor = (industry) => {
    switch (industry) {
      case 'Drone Manufacturing': return 'bg-black';
      case 'AI Systems': return 'bg-gray-900';
      case 'GIS Mapping': return 'bg-gray-800';
      case 'Software & Cloud': return 'bg-gray-700';
      case 'Professional Services': return 'bg-gray-600';
      case 'Energy & Propulsion': return 'bg-black';
      case 'Startups': return 'bg-gray-900';
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
            Companies Directory
          </h1>
          <p className="text-xl text-black/80 max-w-2xl mx-auto mb-4">
            Explore top companies leading drone, AI, and geospatial tech.
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
          placeholder="Search companies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-black/20 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40 text-black placeholder-black/60 font-medium text-sm transition-all duration-300"
        />
      </div>

      {/* Filter and Sort Controls */}
      <div className="flex gap-3">
        {/* Industry Filter */}
        <div className="relative">
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="appearance-none bg-white/80 backdrop-blur-sm border-2 border-black/20 rounded-lg px-3 py-2 text-black font-medium focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40 text-sm transition-all duration-300 w-48"
          >
            {industries.map(industry => (
              <option key={industry} value={industry}>
                {industry === 'All' ? 'All Industries' : industry}
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
            className="appearance-none bg-white/80 backdrop-blur-sm border-2 border-black/20 rounded-lg px-3 py-2 text-black font-medium focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40 text-sm transition-all duration-300 w-48"
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
      {selectedIndustry !== 'All' && (
        <span className="bg-black text-yellow-400 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
          Industry: {selectedIndustry}
          <button onClick={() => setSelectedIndustry('All')} className="hover:text-white transition-colors duration-200 text-sm">×</button>
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




      {/* Featured Companies Section */}
      <section className="py-4 bg-gradient-to-b from-yellow-400 to-yellow-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCompanies.map((company, index) => {
              const LogoComponent = company.logo;

              return (
                <div
                  key={company.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-105 hover:-rotate-1"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animation: `fadeInUp 0.8s ease-out ${index * 200}ms both`
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={company.image}
                      alt={company.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/75 to-black/80 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-yellow-600/10 opacity-60 group-hover:opacity-80 transition-all duration-500"></div>

                    <div className="absolute top-4 left-4">
                      <div className="relative bg-yellow-400/20 backdrop-blur-sm rounded-2xl p-3 border border-yellow-400/30 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-yellow-400/30 transition-all duration-500">
                        <LogoComponent className="h-6 w-6 text-yellow-400" />
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-yellow-400/20 backdrop-blur-sm px-3 py-1 rounded-full border border-yellow-400/30">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-bold text-yellow-400">{company.rating}</span>
                    </div>

                    <div className="absolute bottom-4 left-4">
                      <span className={`${getIndustryColor(company.industry)} text-yellow-400 px-3 py-1 rounded-full text-sm font-bold border border-yellow-400/30`}>
                        {company.industry}
                      </span>
                    </div>

                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current" />
                      Featured
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors duration-300">
                      {company.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {company.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center p-3 bg-yellow-50 rounded-xl group-hover:bg-yellow-100 transition-colors duration-300">
                        <Users className="h-4 w-4 text-gray-600 group-hover:text-yellow-600 mx-auto mb-1 transition-colors duration-300" />
                        <div className="text-sm font-bold text-gray-800">{company.employees}</div>
                        <div className="text-xs text-gray-500">Employees</div>
                      </div>

                      <div className="text-center p-3 bg-yellow-50 rounded-xl group-hover:bg-yellow-100 transition-colors duration-300">
                        <TrendingUp className="h-4 w-4 text-yellow-600 mx-auto mb-1" />
                        <div className="text-sm font-bold text-yellow-600">{company.growth}</div>
                        <div className="text-xs text-gray-500">Growth</div>
                      </div>
                    </div>

                    <div className="flex justify-center pt-2">
                      <button className="group/btn bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg">
                        <span>View Profile</span>
                        <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Companies Grid Section */}
      <section className="py-16 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-black">
              All Companies ({filteredCompanies.length})
            </h2>
            <div className="text-black/60">
              Page {currentPage} of {totalPages}
            </div>
          </div>

          {currentCompanies.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 max-w-md mx-auto">
                <Search className="h-16 w-16 text-black/40 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-black mb-2">No companies found</h3>
                <p className="text-black/60">Try adjusting your filters or search terms</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {currentCompanies.map((company, index) => {
                const LogoComponent = company.logo;

                return (
                  <div
                    key={company.id}
                    className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-105"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: `fadeInUp 0.8s ease-out ${index * 100}ms both`
                    }}
                  >
                    {/* Logo Section */}
                    <div className="relative p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 group-hover:from-yellow-100 group-hover:to-yellow-200 transition-all duration-500">
                      <div className="flex justify-center mb-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl scale-150 group-hover:scale-200 transition-all duration-700"></div>
                          <div className="relative bg-yellow-400/20 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 transition-all duration-500 border border-yellow-400/30 group-hover:shadow-lg group-hover:shadow-yellow-400/30">
                            <LogoComponent className="h-12 w-12 text-black group-hover:text-gray-800 transition-colors duration-300" />
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors duration-300">
                          {company.name}
                        </h3>
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-2">
                          <MapPin className="h-3 w-3" />
                          {company.location}
                        </div>
                        <div className={`${getIndustryColor(company.industry)} text-yellow-400 px-3 py-1 rounded-full text-xs font-bold inline-block`}>
                          {company.industry}
                        </div>
                      </div>

                      {/* Hover Details */}
                      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm rounded-t-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 flex flex-col justify-center">
                        <div className="text-center text-yellow-400">
                          <div className="flex items-center justify-center gap-1 mb-2">
                            <Star className="h-4 w-4 fill-current" />
                            <span className="font-bold">{company.rating}</span>
                          </div>
                          <div className="text-sm mb-2">{company.employees} employees</div>
                          <div className="text-sm text-yellow-300">{company.growth} growth</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">
                        {company.description}
                      </p>

                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="text-center p-2 bg-yellow-50 rounded-lg group-hover:bg-yellow-100 transition-colors duration-300">
                          <div className="text-sm font-bold text-black">{company.revenue}</div>
                          <div className="text-xs text-gray-600">Revenue</div>
                        </div>
                        <div className="text-center p-2 bg-yellow-100 rounded-lg group-hover:bg-yellow-200 transition-colors duration-300">
                          <div className="text-sm font-bold text-yellow-700">{company.clients}</div>
                          <div className="text-xs text-yellow-600">Clients</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {company.specialties.slice(0, 2).map((specialty, idx) => (
                            <span
                              key={specialty}
                              className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium group-hover:bg-yellow-200 transition-colors duration-300"
                            >
                              {specialty}
                            </span>
                          ))}
                          {company.specialties.length > 2 && (
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium group-hover:bg-gray-200 transition-colors duration-300">
                              +{company.specialties.length - 2}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <button className="group/btn bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-xl font-semibold text-sm hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg">
                          <span>View Profile</span>
                          <ExternalLink className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </button>
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

export default CompaniesPage;