import React, { useState, useRef, useEffect } from 'react';
import { Play, Eye, Clock } from 'lucide-react';

const PopularVideos = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const observerRef = useRef(null);

  const videos = [
    {
      id: 1,
      title: "Advanced Drone AI Navigation",
      description: "Latest AI algorithms for autonomous flight",
      thumbnail: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "AI",
      views: "12.5K",
      duration: "8:42"
    },
    {
      id: 2,
      title: "GIS Mapping with Drones",
      description: "Precision mapping and surveying techniques",
      thumbnail: "https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "GIS",
      views: "8.9K",
      duration: "12:15"
    },
    {
      id: 3,
      title: "Commercial Drone Applications",
      description: "Real-world use cases in various industries",
      thumbnail: "https://images.pexels.com/photos/724712/pexels-photo-724712.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Drone",
      views: "15.2K",
      duration: "6:33"
    },
    {
      id: 4,
      title: "Drone Safety and Regulations",
      description: "Essential guidelines for drone operators",
      thumbnail: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Drone",
      views: "9.7K",
      duration: "10:28"
    },
    {
      id: 5,
      title: "Machine Learning in Drone Tech",
      description: "How ML is revolutionizing drone capabilities",
      thumbnail: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "AI",
      views: "11.3K",
      duration: "14:07"
    },
    {
      id: 6,
      title: "Precision Agriculture Drones",
      description: "Transforming farming with aerial technology",
      thumbnail: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "GIS",
      views: "7.8K",
      duration: "9:51"
    }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.dataset.id);
            setVisibleCards(prev => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('[data-id]');
    cards.forEach(card => observerRef.current.observe(card));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'AI': return 'bg-gradient-to-r from-red-600 to-red-800';
      case 'GIS': return 'bg-gradient-to-r from-black to-gray-800';
      case 'Drone': return 'bg-gradient-to-r from-red-800 to-black';
      default: return 'bg-gradient-to-r from-gray-800 to-black';
    }
  };

  return (
    <section className="py-20 bg-yellow-200 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #000000 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-4 tracking-tight">
            <span className="text-black">
              Popular Videos
            </span>

          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-black to-red-600 mx-auto rounded-full"></div>
        </div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
  {videos.map((video, index) => (
    <div
      key={video.id}
      data-id={video.id}
      className={`group bg-yellow-100 rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-105 hover:-rotate-1 ${visibleCards.has(video.id)
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-10'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="relative overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-40 sm:h-48 object-cover transition-all duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="bg-red-600 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-all duration-500 hover:bg-red-700 shadow-2xl">
            <Play className="h-8 w-8 text-white" />
          </div>
        </div>

        {/* Category Badge */}
        <div className={`absolute top-4 right-4 ${getCategoryColor(video.category)} text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg transform translate-x-full group-hover:translate-x-0 transition-transform duration-500`}>
          {video.category}
        </div>

        {/* Duration */}
        <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {video.duration}
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-black mb-2 group-hover:text-red-800 transition-colors duration-300">
          {video.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">{video.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm">
            <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
            {video.views} views
          </div>
          <div className="w-8 h-1 bg-gradient-to-r from-black to-red-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default PopularVideos;