import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star, MapPin, Phone, Mail, Users, Award, CheckCircle, Send, Building2, Clock, DollarSign, Zap as Drone, Brain, Map } from 'lucide-react';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Mock service data - in real app, this would come from API
  const service = {
    id: 1,
    title: "Professional Aerial Surveying",
    company: "AeroTech Solutions",
    description: "High-precision aerial surveying services using advanced drone technology for construction, mining, and infrastructure projects. Our team of certified professionals delivers accurate, detailed surveys with fast turnaround times.",
    detailedDescription: `Our Professional Aerial Surveying service combines cutting-edge drone technology with expert analysis to deliver comprehensive surveying solutions. We specialize in large-scale mapping, topographic surveys, volumetric calculations, and progress monitoring for construction and mining projects.

Our certified pilots and surveyors use the latest drone technology equipped with high-resolution cameras, LiDAR sensors, and GPS systems to capture precise data. All surveys are processed using advanced photogrammetry software to ensure accuracy and reliability.

We serve various industries including construction, mining, agriculture, real estate, and infrastructure development. Our services help clients save time, reduce costs, and improve safety by eliminating the need for traditional ground-based surveying methods.`,
    images: [
      "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/724712/pexels-photo-724712.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "Drone Technology",
    price: "$500/day",
    priceRange: "$500 - $2,000 per day",
    rating: 4.9,
    reviewCount: 127,
    location: "San Francisco, CA",
    features: [
      "High-Resolution Mapping",
      "3D Modeling",
      "Real-time Data Processing",
      "Professional Reports",
      "GPS Accuracy",
      "Fast Turnaround"
    ],
    specifications: {
      "Coverage Area": "Up to 500 acres per day",
      "Accuracy": "±2cm horizontal, ±3cm vertical",
      "Resolution": "1-2cm ground sampling distance",
      "Delivery Time": "24-48 hours",
      "File Formats": "GeoTIFF, DXF, PDF, KML",
      "Equipment": "Professional grade drones with RTK GPS"
    },
    companyInfo: {
      name: "AeroTech Solutions",
      established: "2018",
      employees: "50+",
      projects: "500+",
      certifications: ["FAA Part 107", "ISO 9001", "OSHA Certified"],
      phone: "+1 (555) 123-4567",
      email: "info@aerotechsolutions.com",
      website: "www.aerotechsolutions.com"
    },
    portfolio: [
      {
        title: "Highway Construction Survey",
        description: "25-mile highway construction progress monitoring",
        image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        title: "Mining Site Mapping",
        description: "Volumetric analysis for large mining operation",
        image: "https://images.pexels.com/photos/724712/pexels-photo-724712.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        title: "Urban Development Planning",
        description: "Comprehensive site survey for new development",
        image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400"
      }
    ]
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      timeline: '',
      message: ''
    });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Drone Technology': return Drone;
      case 'AI Solutions': return Brain;
      case 'GIS Services': return Map;
      default: return Building2;
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const IconComponent = getCategoryIcon(service.category);

  return (
    <div className="min-h-screen bg-yellow-400 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex items-center space-x-2 text-sm text-black/70">
            <a href="/" className="hover:text-black transition-colors">Home</a>
            <span>/</span>
            <a href="/services" className="hover:text-black transition-colors">Services</a>
            <span>/</span>
            <span className="text-black font-medium">{service.category}</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Service Details Section */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Main Service Info */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-black/20">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-yellow-400 rounded-full p-3">
                      <IconComponent className="h-6 w-6 text-black" />
                    </div>
                    <span className="bg-black text-yellow-400 px-3 py-1 rounded-full text-sm font-bold">
                      {service.category}
                    </span>
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl font-black text-black mb-2">
                    {service.title}
                  </h1>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      {renderStars(service.rating)}
                      <span className="ml-2 text-black font-semibold">{service.rating}</span>
                    </div>
                    <span className="text-black/70">({service.reviewCount} reviews)</span>
                  </div>

                  <div className="flex items-center gap-4 text-black/70 mb-4">
                    <div className="flex items-center gap-1">
                      <Building2 className="h-4 w-4" />
                      {service.company}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {service.location}
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-3xl font-black text-black mb-1">{service.price}</div>
                  <div className="text-sm text-black/70">{service.priceRange}</div>
                </div>
              </div>

              <p className="text-lg text-black/80 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-yellow-50 rounded-xl">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-black font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Images */}
            <div className="bg-white rounded-3xl p-4 shadow-lg border-2 border-black/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {service.images.map((image, index) => (
                  <div key={index} className="relative overflow-hidden rounded-2xl">
                    <img
                      src={image}
                      alt={`${service.title} ${index + 1}`}
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs Section */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border-2 border-black/20">
              <div className="border-b border-gray-200">
                <nav className="flex">
                  {['overview', 'specifications', 'portfolio'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-4 font-semibold capitalize transition-all duration-300 ${
                        activeTab === tab
                          ? 'text-black border-b-2 border-black bg-yellow-50'
                          : 'text-gray-600 hover:text-black hover:bg-gray-50'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-8">
                {activeTab === 'overview' && (
                  <div className="prose max-w-none">
                    <h3 className="text-2xl font-bold text-black mb-4">Service Overview</h3>
                    <div className="text-gray-700 leading-relaxed space-y-4">
                      {service.detailedDescription.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'specifications' && (
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-6">Service Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(service.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center p-4 bg-yellow-50 rounded-xl">
                          <span className="font-semibold text-black">{key}:</span>
                          <span className="text-gray-700">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'portfolio' && (
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-6">Recent Projects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {service.portfolio.map((project, index) => (
                        <div key={index} className="bg-yellow-50 rounded-2xl overflow-hidden">
                          <div className="p-3">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-32 object-cover rounded-xl"
                            />
                          </div>
                          <div className="p-4">
                            <h4 className="font-bold text-black mb-2">{project.title}</h4>
                            <p className="text-gray-600 text-sm">{project.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quotation Form Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-black/20">
                {!isSubmitted ? (
                  <>
                    <h2 className="text-2xl font-black text-black mb-6">Request Quote</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-black mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-black placeholder-gray-500 transition-all duration-300"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-black mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-black placeholder-gray-500 transition-all duration-300"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-black mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-black placeholder-gray-500 transition-all duration-300"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-bold text-black mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Enter your company name"
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-black placeholder-gray-500 transition-all duration-300"
                        />
                      </div>

                      <div>
                        <label htmlFor="projectType" className="block text-sm font-bold text-black mb-2">
                          Project Type *
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-black transition-all duration-300"
                          required
                        >
                          <option value="">Select project type</option>
                          <option value="construction">Construction Survey</option>
                          <option value="mining">Mining Operations</option>
                          <option value="agriculture">Agriculture Mapping</option>
                          <option value="infrastructure">Infrastructure Inspection</option>
                          <option value="real-estate">Real Estate</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-sm font-bold text-black mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-black transition-all duration-300"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-1k">Under $1,000</option>
                          <option value="1k-5k">$1,000 - $5,000</option>
                          <option value="5k-10k">$5,000 - $10,000</option>
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value="over-25k">Over $25,000</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="timeline" className="block text-sm font-bold text-black mb-2">
                          Project Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-black transition-all duration-300"
                        >
                          <option value="">Select timeline</option>
                          <option value="asap">ASAP</option>
                          <option value="1-week">Within 1 week</option>
                          <option value="1-month">Within 1 month</option>
                          <option value="3-months">Within 3 months</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-bold text-black mb-2">
                          Project Details *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Describe your project requirements..."
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-black placeholder-gray-500 transition-all duration-300 resize-none"
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-black text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg"
                      >
                        {isLoading ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                          <Send className="h-5 w-5" />
                        )}
                        <span>{isLoading ? 'Sending...' : 'Request Quote'}</span>
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="bg-green-500 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                      <CheckCircle className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-4">Quote Requested!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for your interest! {service.company} will contact you within 24 hours with a detailed quote.
                    </p>
                    <div className="text-sm text-gray-500">
                      <p>Need immediate assistance?</p>
                      <p className="font-semibold">Call {service.companyInfo.phone}</p>
                    </div>
                  </div>
                )}

                {/* Company Contact Info */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-black mb-4">Contact {service.company}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-yellow-600" />
                      <span className="text-black">{service.companyInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-yellow-600" />
                      <span className="text-black">{service.companyInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-yellow-600" />
                      <span className="text-black">{service.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;