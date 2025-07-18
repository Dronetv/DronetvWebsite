import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Truck, Shield, Award, Play, ChevronLeft, ChevronRight, Plus, Minus, Eye, Share2, MessageCircle } from 'lucide-react';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('description');

  // Mock product data - in real app, this would come from API
  const product = {
    id: 1,
    name: "DJI Mavic Air 2S Professional Drone",
    shortDescription: "Professional-grade drone with 1-inch CMOS sensor and 5.4K video recording capabilities",
    price: 999,
    originalPrice: 1299,
    discount: 23,
    rating: 4.8,
    reviewCount: 1247,
    inStock: true,
    images: [
      "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/724712/pexels-photo-724712.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    features: [
      { icon: "📹", text: "5.4K Ultra HD Video Recording" },
      { icon: "📷", text: "1-inch CMOS Sensor" },
      { icon: "⏱️", text: "34 Minutes Flight Time" },
      { icon: "📡", text: "12km Max Transmission Range" },
      { icon: "🛡️", text: "Advanced Obstacle Sensing" },
      { icon: "🎯", text: "ActiveTrack 4.0" }
    ],
    specifications: {
      "Weight": "595g",
      "Dimensions": "180×97×77mm (folded)",
      "Max Flight Time": "34 minutes",
      "Max Speed": "68.4 km/h",
      "Camera": "1-inch CMOS, 20MP",
      "Video Resolution": "5.4K/30fps, 4K/60fps",
      "Gimbal": "3-axis mechanical",
      "Storage": "8GB internal + microSD"
    },
    description: `The DJI Mavic Air 2S is a powerful and portable drone that delivers professional-quality results. With its 1-inch CMOS sensor, it captures stunning 20MP photos and records video in 5.4K resolution. The drone features advanced flight modes, intelligent obstacle sensing, and up to 34 minutes of flight time.

Perfect for content creators, photographers, and drone enthusiasts who demand the best in aerial imaging. The compact, foldable design makes it easy to take anywhere, while the advanced features ensure you capture every moment with cinematic quality.

Whether you're shooting landscapes, tracking subjects, or creating professional content, the Mavic Air 2S delivers exceptional performance in a compact package.`,
    shipping: {
      standard: "3-5 business days",
      express: "1-2 business days",
      free: "Free shipping on orders over $50"
    },
    warranty: "1 Year Manufacturer Warranty",
    category: "Drones"
  };

  const relatedProducts = [
    {
      id: 2,
      name: "DJI Mini 3 Pro",
      price: 759,
      image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7
    },
    {
      id: 3,
      name: "Professional Gimbal Camera",
      price: 1299,
      image: "https://images.pexels.com/photos/724712/pexels-photo-724712.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6
    },
    {
      id: 4,
      name: "Long-Range Battery Pack",
      price: 199,
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.5
    },
    {
      id: 5,
      name: "AI Flight Controller",
      price: 599,
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7
    }
  ];

  const reviews = [
    {
      id: 1,
      author: "Alex Johnson",
      rating: 5,
      title: "Exceptional Quality and Performance",
      text: "This drone exceeded my expectations. The image quality is outstanding, and the flight time is impressive. Perfect for professional photography work.",
      date: "2024-01-15",
      helpful: 24
    },
    {
      id: 2,
      author: "Sarah Chen",
      rating: 4,
      title: "Great drone, minor issues with app",
      text: "The hardware is fantastic, but the mobile app could use some improvements. Overall, very satisfied with the purchase.",
      date: "2024-01-10",
      helpful: 18
    },
    {
      id: 3,
      author: "Mike Rodriguez",
      rating: 5,
      title: "Perfect for content creation",
      text: "As a content creator, this drone has been a game-changer. The video quality is cinematic, and the intelligent flight modes make complex shots easy.",
      date: "2024-01-08",
      helpful: 31
    }
  ];

  const handleImageHover = (e) => {
    if (!showZoom) return;
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-yellow-400 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex items-center space-x-2 text-sm text-black/70">
            <a href="/" className="hover:text-black transition-colors">Home</a>
            <span>/</span>
            <a href="/products" className="hover:text-black transition-colors">Products</a>
            <span>/</span>
            <span className="text-black font-medium">{product.category}</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Product Images Section */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg">
              <div 
                className="relative aspect-square cursor-zoom-in"
                onMouseEnter={() => setShowZoom(true)}
                onMouseLeave={() => setShowZoom(false)}
                onMouseMove={handleImageHover}
              >
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
                
                {/* Zoom Overlay */}
                {showZoom && (
                  <div 
                    className="absolute inset-0 bg-no-repeat pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"
                    style={{
                      backgroundImage: `url(${product.images[selectedImage]})`,
                      backgroundSize: '200%',
                      backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`
                    }}
                  />
                )}

                {/* Image Navigation */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setSelectedImage(prev => prev === 0 ? product.images.length - 1 : prev - 1)}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setSelectedImage(prev => prev === product.images.length - 1 ? 0 : prev + 1)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}

                {/* Discount Badge */}
                {product.discount > 0 && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{product.discount}%
                  </div>
                )}
              </div>
            </div>

            {/* Image Thumbnails */}
            <div className="flex space-x-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index 
                      ? 'border-black shadow-lg' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="space-y-6">
            
            {/* Product Title and Rating */}
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-black mb-4 leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {renderStars(product.rating)}
                  <span className="ml-2 text-black font-semibold">{product.rating}</span>
                </div>
                <span className="text-black/70">({product.reviewCount} reviews)</span>
              </div>

              <p className="text-lg text-black/80 leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            {/* Price Section */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-black text-black">${product.price}</span>
                {product.originalPrice > product.price && (
                  <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                )}
                {product.discount > 0 && (
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-bold">
                    Save ${product.originalPrice - product.price}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 text-green-600 mb-4">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">In Stock - Ready to Ship</span>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-black font-semibold">Quantity:</span>
                  <div className="flex items-center border-2 border-gray-300 rounded-xl">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-2 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 py-2 font-semibold">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-2 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-black text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </button>
                  
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`px-4 py-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                      isWishlisted 
                        ? 'bg-red-50 border-red-300 text-red-600' 
                        : 'bg-white border-gray-300 text-gray-600 hover:border-gray-400'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>

                  <button className="px-4 py-4 rounded-xl border-2 border-gray-300 text-gray-600 hover:border-gray-400 transition-all duration-300 transform hover:scale-105">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-black mb-4">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-yellow-50 rounded-xl">
                    <span className="text-xl">{feature.icon}</span>
                    <span className="text-black font-medium text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-black mb-4">Shipping & Returns</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-green-600" />
                  <span className="text-black">{product.shipping.free}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="text-black">{product.warranty}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-yellow-600" />
                  <span className="text-black">30-day return policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-16">
          <div className="border-b border-gray-200">
            <nav className="flex">
              {['description', 'specifications', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 font-semibold capitalize transition-all duration-300 ${
                    activeTab === tab
                      ? 'text-black border-b-2 border-black bg-yellow-50'
                      : 'text-gray-600 hover:text-black hover:bg-gray-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold text-black mb-4">Product Description</h3>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  {product.description.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center p-4 bg-yellow-50 rounded-xl">
                      <span className="font-semibold text-black">{key}:</span>
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-black">Customer Reviews</h3>
                  <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Write a Review
                  </button>
                </div>

                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="font-bold text-gray-600">{review.author[0]}</span>
                          </div>
                          <div>
                            <div className="font-semibold text-black">{review.author}</div>
                            <div className="text-sm text-gray-500">{review.date}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <h4 className="font-semibold text-black mb-2">{review.title}</h4>
                      <p className="text-gray-700 mb-3">{review.text}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <button className="hover:text-black transition-colors">
                          Helpful ({review.helpful})
                        </button>
                        <button className="hover:text-black transition-colors">
                          Reply
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-8 text-center">
            Related Products
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct, index) => (
              <div
                key={relatedProduct.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-105"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: `fadeInUp 0.8s ease-out ${index * 100}ms both`
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold shadow-2xl transform scale-0 group-hover:scale-100 transition-all duration-500 hover:bg-yellow-300">
                      View Details
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold text-black mb-2 group-hover:text-gray-800 transition-colors duration-300 line-clamp-2">
                    {relatedProduct.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {renderStars(relatedProduct.rating)}
                      <span className="text-sm text-gray-600 ml-1">{relatedProduct.rating}</span>
                    </div>
                    <div className="text-xl font-bold text-black">${relatedProduct.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;