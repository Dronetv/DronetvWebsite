import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Jennifer Martinez',
      position: 'Real Estate Developer',
      company: 'Skyline Properties',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Marcus delivered absolutely stunning aerial photography for our luxury development. His attention to detail and creative vision exceeded all our expectations.'
    },
    {
      id: 2,
      name: 'Robert Chen',
      position: 'Event Coordinator',
      company: 'Premier Events',
      image: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Professional, reliable, and incredibly talented. The aerial footage from our outdoor festival was breathtaking and really captured the energy of the event.'
    },
    {
      id: 3,
      name: 'Amanda Foster',
      position: 'Marketing Director',
      company: 'Coastal Tourism',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The drone cinematography for our tourism campaign was exceptional. Marcus has a unique ability to showcase landscapes in the most compelling way.'
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'Construction Manager',
      company: 'BuildRight Construction',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Outstanding time-lapse documentation of our construction project. The progress videos were invaluable for client presentations and project management.'
    },
    {
      id: 5,
      name: 'Sarah Williams',
      position: 'Film Producer',
      company: 'Indie Films Studio',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Marcus brought our documentary to life with incredible aerial shots. His technical expertise and creative eye made all the difference in our final production.'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client <span className="text-[#FFD400]">Testimonials</span>
          </h2>
          <div data-aos="fade-up" data-aos-delay="200" className="w-24 h-1 bg-[#FF0000] mx-auto mb-6"></div>
          <p data-aos="fade-up" data-aos-delay="400" className="text-gray-400 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients say about working with me.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="600" className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              bulletClass: 'swiper-pagination-bullet testimonial-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active testimonial-bullet-active'
            }}
            autoplay={{ 
              delay: 4000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="testimonials-swiper-2 pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="relative bg-gray-900 rounded-3xl p-8 h-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border border-[#FFD400]/20">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 left-8 w-8 h-8 bg-[#FF0000] rounded-full flex items-center justify-center">
                    <Quote size={16} className="text-white" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6 mt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-[#FFD400] fill-current" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-gray-300 mb-8 italic leading-relaxed text-lg">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Client Info */}
                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-800">
                    <div className="relative">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#FFD400]"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFD400]/20 to-[#FF0000]/20"></div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-white text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-[#FFD400] text-sm font-medium">
                        {testimonial.position}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Call to Action */}
        <div data-aos="fade-up" data-aos-delay="800" className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#FFD400] to-[#FFD400]/80 rounded-3xl p-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-black mb-4">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-black/80 mb-8 text-lg">
              Join these satisfied clients and let's bring your vision to life with stunning aerial content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonial-bullet {
          background: #FFD400 !important;
          opacity: 0.5 !important;
          width: 12px !important;
          height: 12px !important;
        }
        .testimonial-bullet-active {
          background: #FF0000 !important;
          opacity: 1 !important;
          transform: scale(1.2) !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;