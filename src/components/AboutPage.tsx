import React, { useState } from 'react';
import { Target, Eye, Heart, Users, Calendar, Award, Lightbulb, Globe, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const AboutPage = () => {
  const [hoveredTeamMember, setHoveredTeamMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Visionary leader with 15+ years in drone technology and AI innovation.",
      funFact: "Licensed pilot who has flown over 50 different drone models!"
    },
    {
      id: 2,
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "AI researcher and former NASA engineer specializing in autonomous systems.",
      funFact: "Published 40+ research papers on drone AI and machine learning."
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Head of Content",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Award-winning journalist covering technology and innovation for 12 years.",
      funFact: "Has interviewed over 200 tech industry leaders and innovators."
    },
    {
      id: 4,
      name: "Jennifer Park",
      role: "Head of Partnerships",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Business development expert with extensive network in drone industry.",
      funFact: "Speaks 5 languages and has worked in 15+ countries."
    },
    {
      id: 5,
      name: "Dr. James Liu",
      role: "Lead Data Scientist",
      image: "https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Machine learning expert focused on drone data analytics and insights.",
      funFact: "Built his first drone from scratch at age 16!"
    },
    {
      id: 6,
      name: "Emma Foster",
      role: "UX/UI Designer",
      image: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Creative designer passionate about user experience and interface design.",
      funFact: "Won 3 international design awards for tech platform interfaces."
    }
  ];

  const timelineEvents = [
    {
      year: "2020",
      title: "Drone TV Founded",
      description: "Alex Johnson launches Drone TV with a vision to democratize drone technology knowledge.",
      icon: Lightbulb
    },
    {
      year: "2021",
      title: "First 1,000 Videos",
      description: "Platform reaches milestone of 1,000 educational videos covering all aspects of drone technology.",
      icon: Target
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Drone TV expands internationally, partnering with companies and experts from 25+ countries.",
      icon: Globe
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Launch of AI-powered content recommendations and personalized learning paths for users.",
      icon: Award
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as the leading platform for drone technology education with 100K+ active users.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-yellow-400 pt-16">
      {/* Hero Section */}
  <section className="py-1 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 relative overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200/30 rounded-full animate-pulse blur-2xl"></div>
    <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-600/20 rounded-full animate-pulse blur-2xl" style={{ animationDelay: '2s' }}></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
    <h1 className="text-2xl md:text-5xl font-black text-black mb-2 tracking-tight">
      About Drone TV
    </h1>
    <p className="text-xl text-black/80 max-w-2xl mx-auto mb-4">
     Driving the future of drones through education and innovation.
    </p>
    <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
  </div>
</section>


      {/* Mission and Vision Section */}
      <section className="py-12 bg-gradient-to-b from-yellow-400 to-yellow-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-400 rounded-full p-4 mr-4">
                    <Target className="h-8 w-8 text-black" />
                  </div>
                  <h2 className="text-3xl font-black text-black">Our Mission</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To democratize access to drone technology knowledge and create a global community where enthusiasts, professionals, and innovators can learn, share, and advance the future of autonomous flight systems.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-400 rounded-full p-4 mr-4">
                    <Eye className="h-8 w-8 text-black" />
                  </div>
                  <h2 className="text-3xl font-black text-black">Our Vision</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To become the world's leading platform for drone technology education, fostering innovation and responsible development of autonomous systems that benefit humanity and advance technological progress.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Drone Technology" 
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-black mb-4">Shaping Tomorrow's Technology</h3>
                  <p className="text-gray-600 mb-6">
                    Through comprehensive education and industry partnerships, we're building the foundation for the next generation of drone innovations.
                  </p>
                  <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Alex Johnson - Founder" 
                    className="w-64 h-64 object-cover rounded-full mx-auto shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-yellow-400 rounded-full p-4 shadow-lg">
                    <Heart className="h-8 w-8 text-black" />
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
                  A Message from Our Founder
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    "When I started Drone TV in 2020, I had a simple yet ambitious vision: to create a platform where anyone, anywhere, could access world-class education about drone technology and artificial intelligence."
                  </p>
                  <p className="text-lg">
                    "Having worked in the aerospace industry for over 15 years, I witnessed firsthand how rapidly drone technology was evolving, yet how difficult it was for enthusiasts and professionals to stay current with the latest developments."
                  </p>
                  <p className="text-lg">
                    "Today, Drone TV has grown into a global community of innovators, educators, and dreamers who share a common passion for pushing the boundaries of what's possible with autonomous flight systems."
                  </p>
                  <p className="text-lg font-semibold text-black">
                    "Together, we're not just learning about the future – we're building it."
                  </p>
                </div>
                <div className="mt-8">
                  <div className="text-xl font-bold text-black">Alex Johnson</div>
                  <div className="text-gray-600">Founder & CEO, Drone TV</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-gradient-to-b from-yellow-400 to-yellow-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-black/80 max-w-2xl mx-auto">
              The passionate individuals behind Drone TV's mission to democratize drone technology education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-105"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animation: `fadeInUp 0.8s ease-out ${index * 150}ms both`
                }}
                onMouseEnter={() => setHoveredTeamMember(member.id)}
                onMouseLeave={() => setHoveredTeamMember(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-500 ${
                    hoveredTeamMember === member.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="font-bold mb-2">Fun Fact:</h4>
                      <p className="text-sm">{member.funFact}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-1 group-hover:text-gray-800 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="text-yellow-600 font-semibold mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-black/80 max-w-2xl mx-auto">
              Key milestones in Drone TV's evolution from startup to industry leader
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-black/20 rounded-full"></div>

            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const IconComponent = event.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div
                    key={event.year}
                    className={`relative flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}
                    style={{ 
                      animationDelay: `${index * 200}ms`,
                      animation: `fadeInUp 0.8s ease-out ${index * 200}ms both`
                    }}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-yellow-400 flex items-center justify-center shadow-lg z-10">
                      <IconComponent className="h-8 w-8 text-black" />
                    </div>

                    {/* Content Card */}
                    <div className={`w-5/12 ${isEven ? 'pr-8' : 'pl-8'}`}>
                      <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                        <div className="flex items-center mb-4">
                          <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold mr-4">
                            {event.year}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-black mb-3">{event.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-b from-yellow-400 to-yellow-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're a drone enthusiast, industry professional, or technology innovator, we'd love to connect with you and explore how we can work together.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3 text-gray-700">
                <Mail className="h-5 w-5 text-yellow-600" />
                <span>hello@dronetv.com</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-700">
                <Phone className="h-5 w-5 text-yellow-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-700">
                <MapPin className="h-5 w-5 text-yellow-600" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center">
                <span>Get In Touch</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="bg-black text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;