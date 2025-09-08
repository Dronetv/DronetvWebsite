import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Photo <span className="text-[#FF0000]">Gallery</span>
          </h2>
          <div data-aos="fade-up" data-aos-delay="200" className="w-24 h-1 bg-[#FFD400] mx-auto mb-6"></div>
          <p data-aos="fade-up" data-aos-delay="400" className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A glimpse into hands-on drone training, field operations, and simulator sessions led by Sumit Krishnan.
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {['/images/sumit1.png', '/images/sumit2.png', '/images/sumit3.jpg', '/images/sumit4.jpg'].map((img, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105"
            >
              <img
                src={img}
                alt={`Sumit Training ${index + 1}`}
                className="w-full h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;