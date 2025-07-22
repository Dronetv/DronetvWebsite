import React, { useState } from 'react';
import { Building2, Star, Users, TrendingUp, MapPin, Calendar, Award, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FeaturedCompanies = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();
  const companies = [
    {
      id: 1,
      name: "AeroTech Solutions",
      logo: Building2,
      description: "Leading drone manufacturing and AI integration specialists revolutionizing autonomous flight systems",
      industry: "Manufacturing",
      rating: 4.9,
      employees: "500+",
      growth: "+45%",
      location: "San Francisco, CA",
      founded: "2018",
      specialties: ["Autonomous Flight", "AI Integration", "Commercial Drones", "Fleet Management"],
      achievements: ["Industry Leader 2023", "Innovation Award", "Top Employer"],
      image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600",
      revenue: "$50M+",
      clients: "200+"
    },
    {
      id: 2,
      name: "SkyMap Technologies",
      logo: Building2,
      description: "GIS mapping and precision surveying industry pioneers with cutting-edge aerial data solutions",
      industry: "GIS & Mapping",
      rating: 4.8,
      employees: "250+",
      growth: "+38%",
      location: "Austin, TX",
      founded: "2019",
      specialties: ["3D Mapping", "Aerial Surveying", "Data Analytics", "Environmental Monitoring"],
      achievements: ["GIS Excellence Award", "Sustainability Leader", "Tech Innovation"],
      image: "https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=600",
      revenue: "$25M+",
      clients: "150+"
    },
    {
      id: 3,
      name: "DroneAI Systems",
      logo: Building2,
      description: "Advanced AI algorithms for autonomous flight systems and intelligent decision-making platforms",
      industry: "Artificial Intelligence",
      rating: 4.9,
      employees: "180+",
      growth: "+52%",
      location: "Seattle, WA",
      founded: "2020",
      specialties: ["Machine Learning", "Computer Vision", "Neural Networks", "Edge Computing"],
      achievements: ["AI Innovation Award", "Best Startup 2023", "Tech Pioneer"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      revenue: "$35M+",
      clients: "100+"
    },
    {
      id: 4,
      name: "CloudNav Industries",
      logo: Building2,
      description: "Cloud-based drone fleet management solutions with real-time monitoring and analytics",
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
      description: "Professional drone services and consulting experts for enterprise and government clients",
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
      description: "Next-generation drone propulsion and energy systems for extended flight capabilities",
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
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-yellow-300 via-yellow-300 to-yellow-300 relative overflow-hidden min-h-screen">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #FFEB3B 25%, transparent 25%), linear-gradient(-45deg, #FDD835 25%, transparent 25%)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-200/20 rounded-full animate-pulse blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-400/20 rounded-full animate-pulse blur-2xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-yellow-500/30 rotate-45 animate-bounce" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              Featured Companies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Industry leaders shaping the future of drone technology, artificial intelligence, and geospatial solutions with innovative products and groundbreaking research
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {companies.map((company, index) => {
            const LogoComponent = company.logo;
            const isHovered = hoveredCard === company.id;

            return (
              <div
                key={company.id}
                data-id={company.id}
                className={`group relative bg-[#f1ee8e] rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-105 hover:-rotate-1 opacity-100 translate-y-0`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                  animation: `fadeInUp 0.8s ease-out ${index * 150}ms both`
                }}
                onMouseEnter={() => setHoveredCard(company.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Company Image Header */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={company.image}
                    alt={company.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  {/* Black overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/75 to-black/80 transition-all duration-500"></div>

                  {/* Logo Overlay */}
                  <div className="absolute top-4 left-4">
                    <div className="relative bg-yellow-400/20 backdrop-blur-sm rounded-2xl p-3 border border-yellow-400/30 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-yellow-400/30 transition-all duration-500">
                      <LogoComponent className="h-6 w-6 text-yellow-400" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-yellow-400/20 backdrop-blur-sm px-3 py-1 rounded-full border border-yellow-400/30">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-bold text-yellow-400">{company.rating}</span>
                  </div>

                  {/* Industry Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-yellow-400/20 backdrop-blur-sm text-yellow-400 px-3 py-1 rounded-full text-sm font-bold border border-yellow-400/30">
                      {company.industry}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  {/* Company Header */}
                  <div className="mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors duration-300">
                      {company.name}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 flex-shrink-0" />
                        {company.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 flex-shrink-0" />
                        Est. {company.founded}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm line-clamp-3">
                    {company.description}
                  </p>

                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                    {/* Employees */}
                    <div className="text-center p-2 sm:p-3 bg-yellow-200 rounded-lg sm:rounded-xl group-hover:bg-yellow-300 transition-colors duration-300">
                      <Users className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-800 mx-auto mb-1 transition-colors duration-300" />
                      <div className="text-xs sm:text-sm font-bold text-yellow-800">{company.employees}</div>
                      <div className="text-xs text-yellow-700">Employees</div>
                    </div>

                    {/* Growth */}
                    <div className="text-center p-2 sm:p-3 bg-yellow-200 rounded-lg sm:rounded-xl group-hover:bg-yellow-300 transition-colors duration-300">
                      <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-900 mx-auto mb-1" />
                      <div className="text-xs sm:text-sm font-bold text-yellow-900">{company.growth}</div>
                      <div className="text-xs text-yellow-800">Growth</div>
                    </div>
                  </div>

                  {/* Revenue & Clients */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                    {/* Revenue */}
                    <div className="text-center p-2 sm:p-3 bg-yellow-200 rounded-lg sm:rounded-xl group-hover:bg-yellow-300 transition-colors duration-300">
                      <div className="text-xs sm:text-sm font-bold text-yellow-900">{company.revenue}</div>
                      <div className="text-xs text-yellow-700">Revenue</div>
                    </div>

                    {/* Clients */}
                    <div className="text-center p-2 sm:p-3 bg-yellow-300 rounded-lg sm:rounded-xl group-hover:bg-yellow-400 transition-colors duration-300">
                      <div className="text-xs sm:text-sm font-bold text-yellow-900">{company.clients}</div>
                      <div className="text-xs text-yellow-800">Clients</div>
                    </div>
                  </div>


                  {/* Specialties */}
                  <div className="mb-3 sm:mb-4">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {company.specialties.slice(0, 3).map((specialty, idx) => (
                        <span
                          key={specialty}
                          className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium group-hover:bg-yellow-400 transition-colors duration-300"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          {specialty}
                        </span>
                      ))}
                      {company.specialties.length > 3 && (
                        <span className="bg-yellow-200 text-gray-600 px-2 py-1 rounded-full text-xs font-medium group-hover:bg-yellow-400 transition-colors duration-300">
                          +{company.specialties.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-3 sm:mb-4">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-2 flex items-center gap-1">
                      <Award className="h-3 w-3 flex-shrink-0" />
                      Recent Achievements:
                    </h4>
                    <div className="space-y-1">
                      {company.achievements.slice(0, 2).map((achievement, idx) => (
                        <div
                          key={achievement}
                          className="text-xs text-gray-600 flex items-start gap-1"
                        >
                          <div className="w-1 h-1 bg-yellow-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex justify-center pt-2">
                    <button
                      onClick={() => navigate('/list/company-template-1')} // Trigger navigation to the specific route on click
                      className="group/btn bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
                    >
                      <span>View Profile</span>
                      <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

                {/* Yellow Glow Border on Hover */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-yellow-400/30 group-hover:shadow-lg group-hover:shadow-yellow-400/20 transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-black mb-4">Want to be featured?</h3>
            <p className="text-black/80 mb-6 max-w-2xl mx-auto">
              Join our network of innovative companies shaping the future of drone technology and reach thousands of industry professionals.
            </p>
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg
">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompanies;