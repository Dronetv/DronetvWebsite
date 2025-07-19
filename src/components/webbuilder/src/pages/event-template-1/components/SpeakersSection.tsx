import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Linkedin, Twitter } from 'lucide-react';

const SpeakersSection: React.FC = () => {
  const speakers = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      title: 'Chief Technology Officer',
      company: 'AeroTech Industries',
      topic: 'The Future of Autonomous Flight Systems',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      title: 'Lead Engineer',
      company: 'DroneVision Corp',
      topic: 'AI-Powered Navigation Systems',
      image: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: 3,
      name: 'Dr. Emily Watson',
      title: 'Research Director',
      company: 'Aerospace Innovation Lab',
      topic: 'Sustainable Drone Technology',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: 4,
      name: 'James Park',
      title: 'Founder & CEO',
      company: 'SkyTech Solutions',
      topic: 'Commercial Drone Applications',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: 5,
      name: 'Dr. Lisa Kumar',
      title: 'Head of R&D',
      company: 'Future Flight Systems',
      topic: 'Drone Swarm Intelligence',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      twitter: '#'
    }
  ];

  return (
    <section id="speakers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-black mb-4">
            Featured <span className="text-[#FF0000]">Speakers</span>
          </h2>
          <div data-aos="fade-up" data-aos-delay="200" className="w-24 h-1 bg-[#FFD400] mx-auto mb-6"></div>
          <p data-aos="fade-up" data-aos-delay="400" className="text-gray-600 text-lg max-w-2xl mx-auto">
            Learn from industry pioneers and thought leaders who are shaping the future of drone technology.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="600">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 }
            }}
            className="speakers-swiper"
          >
            {speakers.map((speaker) => (
              <SwiperSlide key={speaker.id}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Social Links */}
                    <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a 
                        href={speaker.linkedin}
                        className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition-colors"
                      >
                        <Linkedin size={16} />
                      </a>
                      <a 
                        href={speaker.twitter}
                        className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition-colors"
                      >
                        <Twitter size={16} />
                      </a>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#FF0000] transition-colors">
                      {speaker.name}
                    </h3>
                    <p className="text-sm text-[#FFD400] font-semibold mb-1">{speaker.title}</p>
                    <p className="text-sm text-gray-500 mb-4">{speaker.company}</p>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-sm text-gray-600 font-medium">Topic:</p>
                      <p className="text-sm text-black">{speaker.topic}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        .speakers-swiper .swiper-button-next,
        .speakers-swiper .swiper-button-prev {
          color: #FF0000;
        }
        .speakers-swiper .swiper-pagination-bullet {
          background: #FFD400;
          opacity: 0.5;
        }
        .speakers-swiper .swiper-pagination-bullet-active {
          background: #FF0000;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default SpeakersSection;