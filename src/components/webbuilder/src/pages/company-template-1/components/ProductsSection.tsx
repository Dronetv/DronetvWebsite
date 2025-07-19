import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ProductsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Survey Drones', 'Agri Drones', 'Custom UAVs'];

  const products = [
    {
      id: 1,
      name: 'SurveyMaster Pro',
      category: 'Survey Drones',
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: 'RTK GPS, 4K Camera, 45min Flight Time',
      description: 'Professional surveying drone with centimeter-level accuracy for mapping and construction projects.'
    },
    {
      id: 2,
      name: 'AgriScout X1',
      category: 'Agri Drones',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: 'Multispectral Camera, NDVI Analysis, 60min Flight',
      description: 'Advanced agricultural monitoring drone for crop health analysis and precision farming applications.'
    },
    {
      id: 3,
      name: 'SecurityHawk Elite',
      category: 'Custom UAVs',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: 'Thermal Camera, Night Vision, Real-time Streaming',
      description: 'High-performance security drone with advanced surveillance capabilities for perimeter monitoring.'
    },
    {
      id: 4,
      name: 'MapperPro 3000',
      category: 'Survey Drones',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: 'LiDAR Sensor, PPK GPS, Weather Resistant',
      description: 'Industrial-grade mapping drone designed for large-scale surveying and topographic mapping projects.'
    },
    {
      id: 5,
      name: 'CropGuard Pro',
      category: 'Agri Drones',
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: 'Spray System, GPS Guidance, 40L Capacity',
      description: 'Precision spraying drone for efficient crop protection and fertilizer application in agriculture.'
    },
    {
      id: 6,
      name: 'CustomFlex UAV',
      category: 'Custom UAVs',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      specs: 'Modular Design, Custom Payload, Extended Range',
      description: 'Fully customizable drone platform designed for specialized applications and unique payload requirements.'
    }
  ];

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our <span className="text-[#FF0000]">Products</span>
          </h2>
          <div data-aos="fade-up" data-aos-delay="200" className="w-24 h-1 bg-[#FFD400] mx-auto mb-6"></div>
          <p data-aos="fade-up" data-aos-delay="400" className="text-gray-600 text-lg max-w-2xl mx-auto">
            Cutting-edge drone technology designed for professional applications across various industries.
          </p>
        </div>

        {/* Filter Buttons */}
        <div data-aos="fade-up" data-aos-delay="600" className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 p-2 bg-gray-100 rounded-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-[#FF0000] text-white shadow-lg transform scale-105'
                    : 'text-gray-700 hover:text-[#FF0000] hover:bg-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-[#FFD400] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#FFD400]/90 transition-colors">
                    View Details
                  </button>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-[#FF0000] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {product.category.split(' ')[0]}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#FF0000] transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-sm text-[#FFD400] font-semibold mb-3 bg-[#FFD400]/10 px-3 py-1 rounded-full inline-block">
                  {product.specs}
                </p>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <button className="group/btn flex items-center gap-2 text-[#FF0000] font-semibold hover:gap-3 transition-all duration-300">
                  <span>Know More</span>
                  <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;