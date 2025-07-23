import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star, MapPin, Phone, Mail, CheckCircle, Send, Building2, Zap as Drone, Brain, Map } from 'lucide-react';

// Mock data for services
const services= [
  {
    id: 1,
    title: "Advanced Drone Surveying",
    company: "IPage UM Services",
    description:
      "Efficient and accurate drone-based surveying solutions tailored for infrastructure, urban planning, and irrigation projects.",
    detailedDescription: `Our Advanced Drone Surveying service delivers high-resolution data for topographic mapping, corridor analysis, and volumetric studies. We use RTK-enabled drones and GCP-based workflows to ensure sub-centimeter accuracy. Ideal for construction, irrigation, smart city, and mining applications.

By replacing traditional ground surveying methods, our drone-based approach drastically reduces time, improves safety, and offers faster project execution timelines.`,
    images: [
      "/images/service1.1.webp",
      "/images/service2.jpg",
      "/images/service1.2.png"
    ],
    category: "Drone Technology",
    price: "$400/project",
    priceRange: "$400 - $1,500 per project",
    rating: 4.9,
    reviewCount: 118,
    location: "Hyderabad, India",
    features: [
      "Orthomosaic Generation",
      "Topographic Mapping",
      "Infrastructure Scanning",
      "High Accuracy GCP Integration",
      "Volumetric Calculation",
      "Red Zone Compliant"
    ],
    specifications: {
      "Coverage Area": "Up to 300 acres/day",
      "Accuracy": "±3cm horizontal/vertical",
      "Output Formats": "GeoTIFF, KMZ, DXF, PDF",
      "Equipment Used": "RTK Drones with 20MP cameras",
      "Delivery Time": "24-48 hours",
      "Platform Compatibility": "AutoCAD, QGIS, ArcGIS"
    },
    companyInfo: {
      name: "IPage UM Services",
      established: "2008",
      employees: "100+",
      projects: "1200+",
      certifications: ["DGCA Approved", "ISO 9001", "Govt Empanelled"],
      phone: "+91 7799100040",
      email: "bd@ipageums.com",
      website: "https://ipageums.com"
    },
    portfolio: [
    {
  title: "Tanuku Canal Project",
  description: "Red zone-compliant canal chainage mapping with overlays for the Tanuku region's irrigation canals.",
  image: "/images/service2.jpg",
     
},
{
  title: "Guduru Land Survey",
  description: "City-wide topographic survey with high-resolution orthophotos, focusing on land management in Guduru.",
  image: "/images/service2.1.jpg",
      
},
{
  title: "Gujarat Monument Survey",
  description: "Annual volumetric study of water retention areas and monument structures in Gujarat.",
  image: "/images/service2.2.jpg"
}

    ]
  },
  {
    id: 2,
    title: "AI-Driven Infrastructure Inspection",
    company: "IPage UM Services",
    description:
      "Automated inspections using drone-captured imagery with AI for crack detection, corrosion analysis, and structural health monitoring.",
    detailedDescription: `Our AI-Driven Infrastructure Inspection service leverages machine learning and computer vision to detect anomalies like cracks, corrosion, or structural defects in buildings, bridges, towers, and solar farms. The system processes drone-captured images and videos to generate reports with geotagged insights.

This dramatically reduces manual inspection time while enhancing accuracy, especially for hard-to-reach or hazardous sites.`,
    images: [
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6809664/pexels-photo-6809664.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1684166/pexels-photo-1684166.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    category: "AI & ML Solutions",
    price: "$1,000/month",
    priceRange: "$1,000 - $3,500/month",
    rating: 4.8,
    reviewCount: 106,
    location: "Singapore & India",
    features: [
      "AI Anomaly Detection",
      "Thermal Analysis",
      "Detailed Reports",
      "Cloud Integration",
      "Time Series Monitoring",
      "Multi-Asset Dashboard"
    ],
    specifications: {
      "Coverage": "50 structures/month",
      "Detection Accuracy": "95%+",
      "Thermal Sensitivity": "±2°C",
      "Report Formats": "PDF, JSON, Web Portal",
      "AI Models": "Custom Trained (YOLOv8)",
      "Integration": "AWS Cloud + Mobile Dashboard"
    },
    companyInfo: {
      name: "IPage UM Services",
      established: "2008",
      employees: "100+",
      projects: "1200+",
      certifications: ["DGCA Approved", "ISO 27001", "AI Registered IP"],
      phone: "+91 7799100040",
      email: "bd@ipageums.com",
      website: "https://ipageums.com"
    },
    portfolio: [
      {
        title: "Bridge Crack Inspection",
        description: "AI model detects micro-cracks in remote highway bridges",
        image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        title: "Solar Panel Heat Mapping",
        description: "Thermal scan detects faulty panels in 20MW solar plant",
        image: "https://images.pexels.com/photos/6809664/pexels-photo-6809664.jpeg?auto=compress&cs=tinysrgb&w=400"
      },
      {
        title: "Tower Corrosion Analytics",
        description: "Visual AI detects rust and bolt weakness in telecom towers",
        image: "https://images.pexels.com/photos/1684166/pexels-photo-1684166.jpeg?auto=compress&cs=tinysrgb&w=400"
      }
    ]
  },
  {
    id: 3,
    title: "GIS-based Precision Agriculture",
    company: "IPage UM Services",
    description:
      "Empowering agriculture with drone-enabled crop health monitoring, NDVI analytics, and precision spraying to boost yield and reduce resource waste.",
    detailedDescription: `Our GIS-based Precision Agriculture service uses drone technology combined with multispectral imaging and geospatial analytics to assess crop health, manage field zones, and guide precision spraying.

By leveraging NDVI, NDRE, and thermal imaging data, we help farmers identify stress zones, monitor growth stages, and apply inputs accurately. This data-driven approach reduces water, fertilizer, and pesticide usage, improving ROI and environmental sustainability.

Ideal for large farms, plantations, and contract-based agri-services. We provide end-to-end solutions—from field scanning to report generation and variable rate spraying.`,
    images: [
     "/images/service3.1.jpg",
      "/images/service3.2.jpg",
      "/images/service3.3.jpg"
  
    ],
    category: "GIS & Agriculture",
    price: "$250/acre",
    priceRange: "$250 - $500 per acre",
    rating: 4.7,
    reviewCount: 102,
    location: "Andhra Pradesh, India",
    features: [
      "NDVI & NDRE Index",
      "Field Zoning",
      "Real-time Crop Stress Detection",
      "Agriculture Analytics",
      "Variable Rate Spraying",
      "Post-Harvest Assessment"
    ],
    specifications: {
      "Coverage Rate": "100–150 acres/day",
      "Resolution": "Up to 5cm/pixel",
      "Sensors": "Multispectral, RGB, Thermal",
      "Output Formats": "NDVI Maps, Shapefiles, PDF Reports",
      "Platform Integration": "QGIS, Google Earth, Agri ERP",
      "Turnaround Time": "48 hours per mission"
    },
    companyInfo: {
      name: "IPage UM Services",
      established: "2008",
      employees: "100+",
      projects: "1200+",
      certifications: ["DGCA Approved", "ISO 9001", "AgriTech Certified"],
      phone: "+91 7799100040",
      email: "bd@ipageums.com",
      website: "https://ipageums.com"
    },
    portfolio: [
      {
        title: "Sugarcane Field Monitoring",
        description: "NDVI scan across 400 acres for early detection of crop stress",
        image:  "/images/service3.4.jpg"
      },
      {
        title: "Paddy Zoning in Krishna District",
        description: "GIS-based field segmentation and spraying map generation",
        image:  "/images/service3.jpg"
      },
      {
        title: "Mango Orchard Health Mapping",
        description: "Multispectral imagery used for canopy coverage and health scoring",
        image:  "/images/service3.1.jpg"
      }
    ]
  }
];

const ServiceDetailPage = () => {
  const { id } = useParams();
  const [service, setService] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('overview'); // Tab state
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
  const [isSubmitted, setIsSubmitted] = useState(false); // Define isSubmitted state
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const selectedService = services.find((s) => s.id === parseInt(id || '0'));
    setService(selectedService);
  }, [id]);

  if (!service) {
    return (
      <div className="py-24 text-center text-2xl font-semibold text-gray-700">
        Service not found.
      </div>
    );
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Drone Technology':
        return Drone;
      case 'AI Solutions':
        return Brain;
      case 'GIS Services':
        return Map;
      default:
        return Building2;
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const IconComponent = getCategoryIcon(service.category);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

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
                      className={`px-6 py-4 font-semibold capitalize transition-all duration-300 ${activeTab === tab
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
                      {service.portfolio.map((item, index) => (
                        <div key={index} className="bg-yellow-50 rounded-2xl overflow-hidden">
                          <div className="p-3">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-32 object-cover rounded-xl"
                            />
                          </div>
                          <div className="p-4">
                            <h4 className="font-bold text-black mb-2">{item.title}</h4>
                            <p className="text-gray-600 text-sm">{item.description}</p>
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

                      {/* Other form fields go here... */}

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
