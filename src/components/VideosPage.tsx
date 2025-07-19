import React, { useState, useEffect } from 'react';
import { Search, Filter, ChevronDown, Play, Eye, Clock, Star, TrendingUp, Calendar } from 'lucide-react';

const VideosPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('date');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 12;

  const categories = ['All', 'Drone', 'AI', 'GIS', 'Events', 'Reviews'];
  const sortOptions = [
    { value: 'date', label: 'Sort by Date' },
    { value: 'popularity', label: 'Sort by Popularity' },
    { value: 'views', label: 'Sort by Views' },
    { value: 'title', label: 'Sort by Title' }
  ];

  const allVideos = [
    {
      id: 1,
      title: "Advanced Drone AI Navigation Systems",
      description: "Explore cutting-edge AI algorithms that power autonomous drone flight systems and intelligent navigation.",
      videoUrl: "https://www.youtube.com/embed/hRt9Op9nD7M?si=-571QkovUUgty9du",
      category: "AI",
      views: "12.5K",
      duration: "8:42",
      rating: 4.8,
      featured: true
    },
    {
      id: 2,
      title: "GIS Mapping with Professional Drones",
      description: "Learn precision mapping and surveying techniques using advanced drone technology for geographic data collection.",
      videoUrl: "https://www.youtube.com/embed/W2kpIo1Xlj4?si=CA_zU6OekIF0FhQV",
      category: "GIS",
      views: "8.9K",
      duration: "12:15",
      rating: 4.6,
      featured: true
    },
    {
      id: 3,
      title: "Commercial Drone Applications in Industry",
      description: "Discover real-world use cases and applications of commercial drones across various industries and sectors.",
      videoUrl: "https://www.youtube.com/embed/7Emdg4-WgQo?si=KDbrdsf_h8PqxG52",
      category: "Drone",
      views: "15.2K",
      duration: "6:33",
      rating: 4.9,
      featured: true
    },
    {
      id: 4,
      title: "Drone Safety Regulations and Guidelines",
      description: "Essential safety guidelines and regulatory compliance for professional drone operators and enthusiasts.",
      videoUrl: "https://www.youtube.com/embed/bIOSkyj6xSk?si=lQx1xcuZNCkB4GEQ",
      category: "Drone",
      views: "9.7K",
      duration: "10:28",
      rating: 4.5
    },
    {
      id: 5,
      title: "Machine Learning in Drone Technology",
      description: "How machine learning algorithms are revolutionizing drone capabilities and autonomous decision-making.",
      videoUrl: "https://www.youtube.com/embed/9SUglQh93cQ?si=Uf-zR974YZT-6Vcy",
      category: "AI",
      views: "11.3K",
      duration: "14:07",
      rating: 4.7
    },
    {
      id: 6,
      title: "Precision Agriculture with Drone Technology",
      description: "Transforming modern farming practices with aerial technology and precision agriculture solutions.",
      videoUrl: "https://www.youtube.com/embed/ykgVmoq5UXc?si=y2jlhM_AbFaBzEp1",
      category: "GIS",
      views: "7.8K",
      duration: "9:51",
      rating: 4.4
    },
    {
      id: 7,
      title: "DroneWorld Conference 2024 Highlights",
      description: "Key highlights and insights from the biggest drone technology conference of the year.",
      videoUrl: "https://www.youtube.com/embed/Wd5tORrsZDY?si=OGLwflM-U_q-KIHh",
      category: "Events",
      views: "13.1K",
      duration: "18:22",
      rating: 4.8
    },
    {
      id: 8,
      title: "DJI Mavic Pro 3 Complete Review",
      description: "In-depth review of the latest DJI Mavic Pro 3 with performance tests and feature analysis.",
      videoUrl: "https://www.youtube.com/embed/D8yx7peXCtg?si=AkQDrvOUnIJTTk-k",
      category: "Reviews",
      views: "22.4K",
      duration: "16:45",
      rating: 4.9
    },
    {
      id: 9,
      title: "Computer Vision for Autonomous Drones",
      description: "Advanced computer vision techniques enabling drones to see, understand, and navigate complex environments.",
      videoUrl: "https://www.youtube.com/embed/K9ZIZtb0PNY?si=AVbW4ORLcUd6FoAG",
      category: "AI",
      views: "6.2K",
      duration: "11:33",
      rating: 4.6
    },
    {
      id: 10,
      title: "Environmental Monitoring with Drones",
      description: "Using drone technology for environmental research, wildlife monitoring, and conservation efforts.",
      videoUrl: "https://www.youtube.com/embed/q-3kYJJff3s?si=UICfEXiv3q2Ri2k7",
      category: "GIS",
      views: "5.9K",
      duration: "13:17",
      rating: 4.3
    },
    {
      id: 11,
      title: "Racing Drone Build Tutorial",
      description: "Step-by-step guide to building your own high-performance racing drone from scratch.",
      videoUrl: "https://www.youtube.com/embed/UTEOSIHf9G4?si=RtM0eBSHG_xSzRb4",
      category: "Drone",
      views: "18.7K",
      duration: "25:14",
      rating: 4.7
    },
    {
      id: 12,
      title: "AI Summit 2024 Keynote Presentation",
      description: "Keynote presentation on the future of AI in aviation and autonomous systems.",
      videoUrl: "https://www.youtube.com/embed/ctKVmhYssVw?si=WqFa2VGIYzPr-xN1",
      category: "Events",
      views: "14.8K",
      duration: "32:18",
      rating: 4.8
    }
  ];
  useEffect(() => {
    let filtered = allVideos;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(video => video.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(video =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort videos
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date) - new Date(a.date);
        case 'popularity':
          return b.rating - a.rating;
        case 'views':
          return parseFloat(b.views) - parseFloat(a.views);
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    setFilteredVideos(filtered);
    setCurrentPage(1);
  }, [selectedCategory, sortBy, searchQuery]);

  const featuredVideos = allVideos.filter(video => video.featured);
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = filteredVideos.slice(indexOfFirstVideo, indexOfLastVideo);
  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'AI': return 'bg-red-600';
      case 'GIS': return 'bg-black';
      case 'Drone': return 'bg-gray-800';
      case 'Events': return 'bg-red-800';
      case 'Reviews': return 'bg-gray-900';
      default: return 'bg-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-yellow-400 pt-16">
      {/* Hero Section */}

      {/* Filter Section */}
      <section className="py-6 bg-yellow-400 sticky top-16 z-40 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-2 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-xs">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black/60" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-black/20 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40 text-black placeholder-black/60 font-medium text-sm transition-all duration-300"
              />
            </div>

            {/* Filter and Sort Controls */}
            <div className="flex gap-3">
              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-white/80 backdrop-blur-sm border-2 border-black/20 rounded-lg px-4 py-2 text-black font-medium focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40 text-sm transition-all duration-300 w-64"  // width increased and height decreased with py-2
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'All' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black/60 pointer-events-none" />
              </div>


              {/* Sort Options */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white/80 backdrop-blur-sm border-2 border-black/20 rounded-lg px-3 py-2 text-black font-medium focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40 text-sm transition-all duration-300"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black/60 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          <div className="mt-3 flex flex-wrap gap-2">
            {selectedCategory !== 'All' && (
              <span className="bg-black text-yellow-400 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                Category: {selectedCategory}
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  ×
                </button>
              </span>
            )}
            {searchQuery && (
              <span className="bg-black text-yellow-400 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                Search: "{searchQuery}"
                <button
                  onClick={() => setSearchQuery('')}
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        </div>
      </section>


      {/* Featured Videos Section */}
      <section className="py-8 bg-gradient-to-b from-yellow-400 to-yellow-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVideos.map((video, index) => (
              <div
                key={video.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-105 hover:-rotate-1 border-2 border-black/20 hover:border-black/40"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: `fadeInUp 0.8s ease-out ${index * 200}ms both`
                }}
              >
                <div className="relative overflow-hidden">
                  {/* Embed the YouTube video */}
                  <iframe
                    src={video.videoUrl} // The URL of the YouTube video
                    title={video.title} // Set title for accessibility
                    className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 border-b-2 border-black/10"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>

                  <div className={`absolute top-4 right-4 ${getCategoryColor(video.category)} text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg`}>
                    {video.category}
                  </div>

                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {video.duration}
                  </div>

                  <div className="absolute top-4 left-4 bg-yellow-400 text-black px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    Featured
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-red-800 transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{video.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {video.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-current text-yellow-500" />
                        {video.rating}
                      </div>
                    </div>
                  </div>
                </div>


                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-red-800 transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{video.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {video.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-current text-yellow-500" />
                        {video.rating}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Grid Section */}
      <section className="py-16 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-black">
              All Videos ({filteredVideos.length})
            </h2>
            <div className="text-black/60">
              Page {currentPage} of {totalPages}
            </div>
          </div>

          {currentVideos.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 max-w-md mx-auto">
                <Search className="h-16 w-16 text-black/40 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-black mb-2">No videos found</h3>
                <p className="text-black/60">Try adjusting your filters or search terms</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {currentVideos.map((video, index) => (
                <div
                  key={video.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-105 border-2 border-black/20 hover:border-black/40"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: `fadeInUp 0.8s ease-out ${index * 100}ms both`
                  }}
                >
                  <div className="p-3">
                    <div className="relative overflow-hidden rounded-2xl">
                      {/* Embed the YouTube video */}
                      <iframe
                        src={video.videoUrl} // The URL of the YouTube video
                        title={video.title} // Set title for accessibility
                        className="w-full h-40 object-cover transition-all duration-700 group-hover:scale-110"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="bg-red-600 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-all duration-500 hover:bg-red-700 shadow-2xl">
                          <Play className="h-6 w-6 text-white" />
                        </div>
                      </div>

                      <div className={`absolute top-3 right-3 ${getCategoryColor(video.category)} text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg`}>
                        {video.category}
                      </div>

                      <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {video.duration}
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-bold text-black mb-2 group-hover:text-red-800 transition-colors duration-300 line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 mb-3 line-clamp-2 text-sm">{video.description}</p>

                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-3 text-gray-500">
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {video.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-current text-yellow-500" />
                          {video.rating}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400">
                        <Calendar className="h-3 w-3" />
                        {new Date(video.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-xl bg-white/80 backdrop-blur-sm border-2 border-black/20 text-black font-medium hover:bg-white hover:border-black/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Previous
                </button>

                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;
                  if (page === currentPage || page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${page === currentPage
                          ? 'bg-black text-yellow-400 border-2 border-black'
                          : 'bg-white/80 backdrop-blur-sm border-2 border-black/20 text-black hover:bg-white hover:border-black/40'
                          }`}
                      >
                        {page}
                      </button>
                    );
                  } else if (page === currentPage - 2 || page === currentPage + 2) {
                    return <span key={page} className="px-2 text-black/60">...</span>;
                  }
                  return null;
                })}

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-xl bg-white/80 backdrop-blur-sm border-2 border-black/20 text-black font-medium hover:bg-white hover:border-black/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default VideosPage;