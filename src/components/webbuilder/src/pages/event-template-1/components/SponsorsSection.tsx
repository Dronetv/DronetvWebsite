import React from 'react';

const SponsorsSection: React.FC = () => {
  const sponsors = {
    platinum: [
      {
        name: 'AeroTech Industries',
        logo: 'https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&w=200',
        website: '#'
      },
      {
        name: 'SkyVision Corp',
        logo: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=200',
        website: '#'
      }
    ],
    gold: [
      {
        name: 'DroneFlow Systems',
        logo: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=200',
        website: '#'
      },
      {
        name: 'FlightTech Solutions',
        logo: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
        website: '#'
      },
      {
        name: 'AirSpace Dynamics',
        logo: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=200',
        website: '#'
      }
    ],
    silver: [
      {
        name: 'PropTech Innovations',
        logo: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=200',
        website: '#'
      },
      {
        name: 'CloudNav Systems',
        logo: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=200',
        website: '#'
      },
      {
        name: 'AutoPilot Pro',
        logo: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
        website: '#'
      },
      {
        name: 'SensorMax Tech',
        logo: 'https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&w=200',
        website: '#'
      }
    ]
  };

  const getSponsorSize = (tier: string) => {
    switch (tier) {
      case 'platinum': return 'w-48 h-24';
      case 'gold': return 'w-40 h-20';
      case 'silver': return 'w-32 h-16';
      default: return 'w-32 h-16';
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'platinum': return 'text-gray-400';
      case 'gold': return 'text-[#FFD400]';
      case 'silver': return 'text-gray-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <section id="sponsors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our <span className="text-[#FF0000]">Sponsors</span>
          </h2>
          <div data-aos="fade-up" data-aos-delay="200" className="w-24 h-1 bg-[#FFD400] mx-auto mb-6"></div>
          <p data-aos="fade-up" data-aos-delay="400" className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're grateful to our sponsors who make this event possible and support innovation in drone technology.
          </p>
        </div>

        <div className="space-y-16">
          {/* Platinum Sponsors */}
          <div data-aos="fade-up" data-aos-delay="600">
            <h3 className={`text-2xl font-bold text-center mb-8 ${getTierColor('platinum')}`}>
              Platinum Sponsors
            </h3>
            <div className="flex justify-center items-center gap-12 flex-wrap">
              {sponsors.platinum.map((sponsor, index) => (
                <a
                  key={index}
                  href={sponsor.website}
                  className="group block"
                >
                  <div className={`${getSponsorSize('platinum')} bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6 flex items-center justify-center grayscale hover:grayscale-0`}>
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div data-aos="fade-up" data-aos-delay="800">
            <h3 className={`text-xl font-bold text-center mb-8 ${getTierColor('gold')}`}>
              Gold Sponsors
            </h3>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {sponsors.gold.map((sponsor, index) => (
                <a
                  key={index}
                  href={sponsor.website}
                  className="group block"
                >
                  <div className={`${getSponsorSize('gold')} bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-4 flex items-center justify-center grayscale hover:grayscale-0`}>
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div data-aos="fade-up" data-aos-delay="1000">
            <h3 className={`text-lg font-bold text-center mb-8 ${getTierColor('silver')}`}>
              Silver Sponsors
            </h3>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              {sponsors.silver.map((sponsor, index) => (
                <a
                  key={index}
                  href={sponsor.website}
                  className="group block"
                >
                  <div className={`${getSponsorSize('silver')} bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-3 flex items-center justify-center grayscale hover:grayscale-0`}>
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div data-aos="fade-up" data-aos-delay="1200" className="text-center mt-16">
          <div className="bg-[#FFD400] rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">
              Become a Sponsor
            </h3>
            <p className="text-black/80 mb-6">
              Join our community of innovators and showcase your brand to industry leaders.
            </p>
            <button className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Sponsorship Packages
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;