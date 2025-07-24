import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Truck, Shield, Award, Play, ChevronLeft, ChevronRight, Plus, Minus, Eye, Share2, MessageCircle, Globe2, SatelliteDish, ScanLine, ShieldCheck, Timer, Zap } from 'lucide-react';
import { Droplet, Wrench, BatteryCharging, Radar, LineChart, Ruler, Plane, Settings } from 'lucide-react';


const ProductDetailPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('description');

  // Mock product data - in real app, this would come from API
  const products = [
    {
      id: 1,
      name: "AGRIBOT A5",
      shortDescription: "India’s 1st Type Certified Agriculture Drone, approved by DGCA.",
      price: 1999,
      originalPrice: 2499,
      discount: 20,
      rating: 5.0,
      reviewCount: 234,
      inStock: true,
      images: [
        "/images/product1.png",
        "/images/service1.jpg",
        "/images/product1.1.webp"
      ],
     features: [
  { icon: <Plane className="h-5 w-5 text-yellow-700" />, text: "1 Acre Spray in 7 Minutes" },
  { icon: <Droplet className="h-5 w-5 text-blue-600" />, text: "Water Usage: 8-10 Liters per Acre" },
  { icon: <Wrench className="h-5 w-5 text-gray-700" />, text: "3 in 1 Agri Drone: Spray, Broadcast, Crop Health Monitoring" },
  { icon: <BatteryCharging className="h-5 w-5 text-green-700" />, text: "Smart Battery Fail-Safe" },
  { icon: <Radar className="h-5 w-5 text-indigo-600" />, text: "Radar-Based Collision Detection" },
  { icon: <LineChart className="h-5 w-5 text-red-600" />, text: "Proven Results: Tested for 6 Years in Indian Conditions" }
],


      specifications: {
        "Structure": "Hexacopter Structure",
        "Flight Modes": "Autonomous & Loiter Mode",
        "Return to Launch": "Empty Tank, Battery Drained, Mission Complete",
        "Spraying Capacity": "Up to 6 acres/hour, 25 acres/day with multiple battery sets",
        "Battery Flight Time": "Up to 20 minutes per battery set",
        "Safety Modes": "Brake & RTL",
        "Flying Range": "Up to 2km (LOS)",
        "Smart Battery Fail Safe": "Continuously checks voltage left to return back to home",
        "Resume Mission": "Autonomous resume mission with 50cm accuracy",
        "Live Video Streaming": "2MP FPV Camera"
      },
      description: `AGRIBOT A5 is India's first Type Certified Agriculture Drone, approved by DGCA. Equipped with smart features like Radar-Based Collision Detection and Avoidance, Terrain Following, and Smart Battery Fail-Safe, it ensures maximum safety and performance. It can quickly spray 1 acre in just 7 minutes and only uses 8-10 liters of water per acre. 

With the ability to spray, broadcast, and monitor crop health, AGRIBOT A5 is a versatile tool for modern farming. Its proven performance over 6 years in Indian conditions makes it a trusted solution for farmers. It’s not just a drone, it’s a farming revolution!`,
      shipping: {
        standard: "5-7 business days",
        express: "2-3 business days",
        free: "Free shipping"
      },
      warranty: "1 Year Manufacturer Warranty",
      category: "Agriculture Drones"
    },
    {
      id: 2,
      name: "AGRIBOT A6",
      shortDescription: "Advanced Agriculture Drone with DGCA Certification.",
      price: 2499,
      originalPrice: 2999,
      discount: 17,
      rating: 4.9,
      reviewCount: 198,
      inStock: true,
      images: [
        "/images/product2.png",
        "/images/product2.2.jpg",
        "/images/product2.3.jpg"
      ],
      features: [
  { icon: <Plane className="h-5 w-5 text-yellow-700" />, text: "1 Acre Spray in 7 Minutes" },
  { icon: <Droplet className="h-5 w-5 text-blue-600" />, text: "Water Usage: 8-10 Liters per Acre" },
  { icon: <ShieldCheck className="h-5 w-5 text-green-600" />, text: "Safe for Farmers & Crops" },
  { icon: <BatteryCharging className="h-5 w-5 text-yellow-600" />, text: "Smart Battery Fail-Safe" },
  { icon: <Radar className="h-5 w-5 text-indigo-700" />, text: "Radar-Based Collision Detection" },
  { icon: <LineChart className="h-5 w-5 text-purple-700" />, text: "Fleet Management Dashboard" },
]
,
      specifications: {
        "Structure": "Hexacopter Structure",
        "Flight Modes": "Autonomous & Loiter Mode",
        "Return to Launch": "Empty Tank, Battery Drained, Mission Complete",
        "Spraying Capacity": "Up to 6 acres/hour, 25 acres/day with multiple battery sets",
        "Battery Flight Time": "Up to 20 minutes per battery set",
        "Safety Modes": "Brake & RTL",
        "Flying Range": "Up to 2km (LOS)",
        "Smart Battery Fail Safe": "Continuously checks voltage left to return back to home",
        "Resume Mission": "Autonomous resume mission with 50cm accuracy",
        "Live Video Streaming": "2MP FPV Camera",
        "Transportation": "Backpack or Bike Back Carriage"
      },
      description: `AGRIBOT A6 is a top-of-the-line agricultural drone with DGCA approval, featuring RADAR-based collision avoidance and terrain following. This drone guarantees safety for both the operator and crops, with features like smart battery fail-safe and fleet management capabilities. Spray 1 acre in just 7 minutes, with minimal water usage of 8-10 liters per acre. 

With a foldable design and transport options like backpack or bike back carriage, AGRIBOT A6 is built for convenience and ease of use for farmers everywhere.`,
      shipping: {
        standard: "5-7 business days",
        express: "2-3 business days",
        free: "Free shipping"
      },
      warranty: "1 Year Manufacturer Warranty",
      category: "Agriculture Drones"
    },
    {
      id: 3,
      name: "Surveybot",
      shortDescription: "Advanced drone for aerial surveys with 16-channel LiDAR for accurate data collection.",
      price: 3500,
      originalPrice: 4000,
      discount: 12,
      rating: 4.8,
      reviewCount: 320,
      inStock: true,
      images: [
        "/images/product3.png",
        "/images/product3.1.jpg",
        "/images/product3.2.jpg"
      ],
        features: [
      { icon: <ScanLine className="h-5 w-5 text-indigo-700" />, text: "16-Channel LiDAR for Precision" },
      { icon: <Zap className="h-5 w-5 text-yellow-600" />, text: "360° 3D High-Speed Scanning" },
      { icon: <Timer className="h-5 w-5 text-orange-500" />, text: "Flight Time: 25 to 180 Minutes" },
      { icon: <BatteryCharging className="h-5 w-5 text-green-700" />, text: "Battery and Engine Powered" },
      { icon: <Globe2 className="h-5 w-5 text-blue-700" />, text: "Terrain Compatibility" },
      { icon: <SatelliteDish className="h-5 w-5 text-purple-600" />, text: "Data Collection & Processing" }
    ],
      specifications: {
        "Structure": "Fixed-Wing",
        "Flight Modes": "Autonomous, Loiter Mode",
        "Maximum Speed": "150 km/h",
        "Flight Time": "25 to 180 Minutes",
        "LiDAR": "16-Channel LiDAR",
        "Power Source": "Battery and Engine",
        "Weight": "2.5kg",
        "Live Video Streaming": "Yes"
      },
      description: `Surveybot is a high-performance drone designed specifically for aerial surveys. Equipped with 16-channel LiDAR, it delivers precision mapping with the ability to scan 360° in 3D at high speed. With a flight time ranging from 25 to 180 minutes, Surveybot is ideal for large-scale survey projects, capturing the most accurate and detailed data. 

Perfect for professionals in surveying and mapping, it ensures accurate terrain compatibility and optimal data collection across various environments.`,
      shipping: {
        standard: "5-7 business days",
        express: "2-3 business days",
        free: "Free shipping"
      },
      warranty: "1 Year Manufacturer Warranty",
      category: "Survey Drones"
    }
  ];

  const product = products.find(p => p.id === parseInt(id)); // Retrieve product details based on id

  if (!product) {
    return <div>Product not found.</div>;
  }

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg">
              <div
                className="relative w-full h-[500px] cursor-zoom-in bg-white rounded-xl"
                onMouseEnter={() => setShowZoom(true)}
                onMouseLeave={() => setShowZoom(false)}
                onMouseMove={handleImageHover}
              >
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-300"
                />

                {showZoom && (
                  <div
                    className="absolute inset-0 bg-no-repeat pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"
                    style={{
                      backgroundImage: `url(${product.images[selectedImage]})`,
                      backgroundSize: '200%',
                      backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`
                    }}
                  />
                )}
              </div>

            </div>
            <div className="flex space-x-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${selectedImage === index ? 'border-black shadow-lg' : 'border-gray-300 hover:border-gray-400'}`}
                >
                  <img src={image} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-black mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {renderStars(product.rating)}
                  <span className="ml-2 text-black font-semibold">{product.rating}</span>
                </div>
                <span className="text-black/70">({product.reviewCount} reviews)</span>
              </div>
              <p className="text-lg text-black/80">{product.shortDescription}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-black text-black">${product.price}</span>
                {product.originalPrice > product.price && (
                  <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                )}
                {product.discount > 0 && (
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-bold">Save ${product.originalPrice - product.price}</span>
                )}
              </div>
              <div className="flex items-center gap-2 text-green-600 mb-4">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">In Stock - Ready to Ship</span>
              </div>

              {/* Quantity Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-black font-semibold">Quantity:</span>
                  <div className="flex items-center border-2 border-gray-300 rounded-xl">
                    <button onClick={() => handleQuantityChange(-1)} className="p-2 hover:bg-gray-100">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 py-2 font-semibold">{quantity}</span>
                    <button onClick={() => handleQuantityChange(1)} className="p-2 hover:bg-gray-100">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-black text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-gray-800">
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`px-4 py-4 rounded-xl border-2 transition-all ${isWishlisted ? 'bg-red-50 border-red-300 text-red-600' : 'bg-white border-gray-300 text-gray-600'}`}
                  >
                    <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                  <button className="px-4 py-4 rounded-xl border-2 border-gray-300 text-gray-600">
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
      {feature.icon}
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
              {['description', 'specifications'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 font-semibold capitalize transition-all ${activeTab === tab ? 'text-black border-b-2 border-black bg-yellow-50' : 'text-gray-600 hover:text-black hover:bg-gray-50'}`}
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

            {/* {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-black">Customer Reviews</h3>
                  <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all flex items-center gap-2">
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
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
