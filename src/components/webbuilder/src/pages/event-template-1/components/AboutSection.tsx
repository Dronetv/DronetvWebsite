import React from 'react';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const goals = [
    {
      icon: <Target size={32} />,
      title: 'Innovation Showcase',
      description: 'Discover the latest breakthroughs in drone technology and autonomous systems.'
    },
    {
      icon: <Users size={32} />,
      title: 'Networking',
      description: 'Connect with industry leaders, startups, and fellow drone enthusiasts.'
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Knowledge Sharing',
      description: 'Learn from expert speakers and hands-on workshops.'
    },
    {
      icon: <Award size={32} />,
      title: 'Competition',
      description: 'Witness exciting drone competitions and live demonstrations.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-black mb-4">
            About the <span className="text-[#FF0000]">Summit</span>
          </h2>
          <div data-aos="fade-up" data-aos-delay="200" className="w-24 h-1 bg-[#FFD400] mx-auto mb-6"></div>
          <p data-aos="fade-up" data-aos-delay="400" className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            The Drone Innovation Summit brings together the brightest minds in unmanned aerial systems, 
            featuring cutting-edge technology demonstrations, expert insights, and unparalleled networking opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Video/Image */}
          <div data-aos="fade-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Drone Summit"
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-[#FF0000] rounded-full flex items-center justify-center text-white hover:bg-[#FF0000]/90 transition-colors transform hover:scale-110">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div data-aos="fade-left">
            <h3 className="text-3xl font-bold text-black mb-6">
              Shaping the Future of <span className="text-[#FFD400]">Aerial Technology</span>
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Join us for an immersive experience featuring live demonstrations, expert panels, 
              and hands-on workshops. Whether you're a seasoned professional or just starting 
              your journey in drone technology, this summit offers valuable insights and connections.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#FF0000] rounded-full"></div>
                <span className="text-gray-700">50+ Industry Speakers</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#FF0000] rounded-full"></div>
                <span className="text-gray-700">Live Drone Demonstrations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#FF0000] rounded-full"></div>
                <span className="text-gray-700">Networking Sessions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#FF0000] rounded-full"></div>
                <span className="text-gray-700">Innovation Awards</span>
              </div>
            </div>
          </div>
        </div>

        {/* Goals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {goals.map((goal, index) => (
            <div 
              key={index}
              data-aos="fade-up" 
              data-aos-delay={index * 200}
              className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-[#FFD400] hover:text-black transition-all duration-300 group transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-[#FF0000] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-black transition-colors">
                <div className="text-white">
                  {goal.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{goal.title}</h3>
              <p className="text-gray-600 group-hover:text-black/80 transition-colors leading-relaxed">
                {goal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;