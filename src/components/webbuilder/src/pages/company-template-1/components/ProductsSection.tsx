import React from 'react';

type Product = {
  title: string;
  description: string;
  image: string;
  link: string;
};

interface ProductsSectionProps {
  productsTitle: string;
  productCategories: string;
  products: Product[];
}

const ProductsSection: React.FC<ProductsSectionProps> = ({
  productsTitle,
  productCategories,
  products,
}) => (
  <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#FFD400] rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#FF0000] rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#FFD400] rounded-full blur-3xl opacity-50"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 leading-tight">
          {productsTitle}
        </h2>
        
        {/* Decorative line */}
        <div className="flex items-center gap-3 mb-8 justify-center">
          <div className="h-1 w-20 bg-gradient-to-r from-[#FFD400] to-[#FFD400] rounded-full"></div>
          <div className="h-1 w-12 bg-gradient-to-r from-[#FF0000] to-[#FF0000] rounded-full"></div>
          <div className="h-1 w-6 bg-black rounded-full"></div>
        </div>

        <p className="text-lg md:text-xl lg:text-2xl text-black/80 max-w-4xl mx-auto leading-relaxed font-medium">
          {productCategories}
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {products.map((product, idx) => (
          <a
            key={product.title + idx}
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-3xl shadow-2xl border-4 border-transparent hover:border-[#FFD400] transition-all duration-500 overflow-hidden transform hover:-translate-y-3 hover:scale-105"
          >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD400]/10 to-[#FF0000]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Product Image */}
            <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden rounded-t-3xl">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              {/* Floating badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FFD400] to-[#FFD400] text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg transform translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                Featured
              </div>
            </div>

            {/* Product Content */}
            <div className="relative z-10 p-8 lg:p-10">
              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4 group-hover:text-[#FF0000] transition-colors duration-300">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed whitespace-pre-line mb-6">
                {product.description}
              </p>

              {/* CTA Button */}
              <div className="flex justify-end">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF0000] to-[#FF0000]/90 text-white px-6 py-3 rounded-full font-bold text-sm lg:text-base shadow-lg group-hover:shadow-2xl group-hover:from-[#FFD400] group-hover:to-[#FFD400] group-hover:text-black transition-all duration-500 transform group-hover:scale-110">
                  <span>Learn More</span>
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-[#FFD400] to-[#FF0000] rounded-br-2xl rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#FFD400] to-[#FF0000] group-hover:w-32 transition-all duration-500 rounded-full"></div>
          </a>
        ))}
      </div>

      {/* Bottom decorative element */}
      <div className="flex justify-center mt-16">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#FFD400] rounded-full"></div>
          <div className="w-2 h-2 bg-[#FF0000] rounded-full"></div>
          <div className="w-1 h-1 bg-black rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
);

export default ProductsSection;