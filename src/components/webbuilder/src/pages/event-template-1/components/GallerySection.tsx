import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Play } from 'lucide-react';

const GallerySection: React.FC = () => {
  const galleryItems = [
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Drone Demonstrations'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Expert Presentations'
    },
    {
      type: 'video',
      src: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Innovation Showcase'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Networking Sessions'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Technology Exhibits'
    },
    {
      type: 'video',
      src: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Competition Highlights'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-black mb-4">
            Event <span className="text-[#FF0000]">Gallery</span>
          </h2>
          <div data-aos="fade-up" data-aos-delay="200" className="w-24 h-1 bg-[#FFD400] mx-auto mb-6"></div>
          <p data-aos="fade-up" data-aos-delay="400" className="text-gray-600 text-lg max-w-2xl mx-auto">
            Relive the excitement from previous summits and get a glimpse of what awaits you.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="600">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 }
            }}
            className="gallery-swiper"
          >
            {galleryItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                      {item.type === 'video' && (
                        <div className="flex items-center gap-2 text-[#FFD400]">
                          <Play size={16} />
                          <span className="text-sm">Watch Video</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Video Play Button */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-16 h-16 bg-[#FF0000] rounded-full flex items-center justify-center text-white hover:bg-[#FF0000]/90 transition-colors transform hover:scale-110">
                        <Play size={24} />
                      </button>
                    </div>
                  )}

                  {/* Type Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      item.type === 'video' 
                        ? 'bg-[#FF0000] text-white' 
                        : 'bg-[#FFD400] text-black'
                    }`}>
                      {item.type === 'video' ? 'Video' : 'Photo'}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View More Button */}
        <div data-aos="fade-up" data-aos-delay="800" className="text-center mt-12">
          <button className="bg-[#FFD400] hover:bg-[#FFD400]/90 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            View Full Gallery
          </button>
        </div>
      </div>

      <style jsx>{`
        .gallery-swiper .swiper-button-next,
        .gallery-swiper .swiper-button-prev {
          color: #FF0000;
        }
        .gallery-swiper .swiper-pagination-bullet {
          background: #FFD400;
          opacity: 0.5;
        }
        .gallery-swiper .swiper-pagination-bullet-active {
          background: #FF0000;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;