import React, { useState, useEffect } from 'react';
import { Search, Filter, ChevronDown, X, ChevronLeft, ChevronRight, Download, Share2, Heart, Calendar, MapPin, Users } from 'lucide-react';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredImages, setFilteredImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const imagesPerPage = 24;

  const categories = ['All', 'Events', 'Collaborations', 'Conferences', 'Interviews', 'Product Launches', 'Team Photos'];

  const allImages = [
    {
      id: 1,
      src: "/images/1.png",
      title: "DroneWorld Conference 2024 Opening Ceremony",
      category: "Collaborations",
      date: "March 15, 2024",
      location: "San Francisco, CA",
      attendees: "2,500+",
      description: "Grand opening ceremony of the largest drone technology conference with industry leaders.",
      tags: ["Teja","Dev"]
    },
    {
      id: 2,
      src: "/images/2.png",
      title: "AI Partnership Announcement",
      category: "Interviews",
      date: "February 20, 2024",
      location: "Seattle, WA",
      attendees: "150+",
      description: "Strategic partnership announcement with leading AI technology companies.",
      tags: ["Dev"]
    },
    {
      id: 3,
      src: "/images/3.png",
      title: "GIS Mapping Workshop Session",
      category: "Interviews",
      date: "January 28, 2024",
      location: "Austin, TX",
      attendees: "200+",
      description: "Hands-on workshop demonstrating advanced GIS mapping techniques.",
      
    },
    {
      id: 4,
      src: "/images/4.png",
      title: "Drone Technology Exhibition",
      category: "Interviews",
      date: "March 16, 2024",
      location: "San Francisco, CA",
      attendees: "3,000+",
      description: "Latest drone technology showcase with live demonstrations.",
     tags: ["Gosharpener"]
    },
    {
      id: 5,
      src: "/images/5.png",
      title: "Industry Leaders Panel Discussion",
      category: "Interviews",
      date: "March 17, 2024",
      location: "San Francisco, CA",
      attendees: "1,500+",
      description: "Panel discussion with top executives from leading drone companies."
    },
    {
      id: 6,
      src: "/images/6.png",
      title: "New Product Launch Event",
      category: "Interviews",
      date: "February 10, 2024",
      location: "Los Angeles, CA",
      attendees: "800+",
      description: "Exclusive launch event for the latest drone technology innovations."
    },
    {
      id: 7,
      src: "/images/7.png",
      title: "Team Building Retreat",
      category: "Team Photos",
      date: "January 15, 2024",
      location: "Napa Valley, CA",
      attendees: "50+",
      description: "Annual team building retreat with outdoor activities and team bonding.",
       tags: ["Dev","Pushpak"]
    },
    {
      id: 8,
      src: "/images/8.png",
      title: "University Partnership Signing",
      category: "Events",
      date: "December 20, 2023",
      location: "Boston, MA",
      attendees: "100+",
      description: "Partnership agreement signing with leading universities for research collaboration.",
       tags: ["Vamsi","Pushpak"]
    },
    {
      id: 9,
      src: "/images/9.png",
      title: "Drone Safety Training Workshop",
      category: "Events",
      date: "November 30, 2023",
      location: "Denver, CO",
      attendees: "300+",
      description: "Comprehensive safety training workshop for drone operators and pilots.",
       tags: ["Dev","Sandeep","Ramesh"]
    },
    {
      id: 10,
      src: "/images/10.png",
      title: "International Drone Summit",
      category: "Events",
      date: "October 25, 2023",
      location: "New York, NY",
      attendees: "2,000+",
      description: "Global summit bringing together international drone technology experts.",
       tags: ["Dev"]
    },
    {
      id: 11,
      src: "/images/11.png",
      title: "Startup Collaboration Meetup",
      category: "Collaborations",
      date: "September 15, 2023",
      location: "Silicon Valley, CA",
      attendees: "250+",
      description: "Networking event connecting startups with established drone companies.",
       tags: ["Dev","Pranay"]
    },
    {
      id: 12,
      src: "/images/12.png",
      title: "Annual Company Celebration",
      category: "Interviews",
      date: "August 20, 2023",
      location: "San Francisco, CA",
      attendees: "200+",
      description: "Annual company celebration recognizing achievements and milestones.",

    },
    {
      id: 13,
      src: "/images/13.png",
      title: "Environmental Monitoring Conference",
      category: "Events",
      date: "July 18, 2023",
      location: "Portland, OR",
      attendees: "900+",
      description: "Conference focused on drone applications in environmental monitoring.",
       tags: ["Dev","Pallavi",]
    },
    {
      id: 14,
      src: "/images/14.png",
      title: "Racing Drone Championship",
      category: "Collaborations",
      date: "June 25, 2023",
      location: "Las Vegas, NV",
      attendees: "5,000+",
      description: "International drone racing championship with live competitions.",
        tags: ["Dev","Gowrav Reddy",]
    },
    {
      id: 15,
      src: "/images/15.png",
      title: "AI Research Collaboration",
      category: "Team Photos",
      date: "May 30, 2023",
      location: "Cambridge, MA",
      attendees: "75+",
      description: "Research collaboration announcement with MIT AI Lab.",
       tags: ["Dev"]
    },
    {
      id: 16,
      src: "/images/16.png",
      title: "Precision Agriculture Workshop",
      category: "Interviews",
      date: "April 22, 2023",
      location: "Iowa City, IA",
      attendees: "180+",
      description: "Workshop on precision agriculture applications using drone technology.",
      tags: ["Sakthivelan"]
    },
    {
      id: 17,
      src: "/images/17.png",
      title: "Drone Delivery Demo Day",
      category: "Interviews",
      date: "March 28, 2023",
      location: "Phoenix, AZ",
      attendees: "600+",
      description: "Live demonstration of autonomous drone delivery systems.",
     
      tags: ["Dr. Nirranjan Kumar Gupta"]
    },
    {
      id: 18,
      src: "/images/18.png",
      title: "Holiday Team Party",
      category: "Team Photos",
      date: "December 15, 2022",
      location: "San Francisco, CA",
      attendees: "120+",
      description: "Annual holiday celebration with the entire Drone TV team.",
       tags: ["Dr. Nirranjan Kumar Gupta","Dev"]
    },
    {
      id: 19,
      src: "/images/19.png",
      title: "Government Partnership Forum",
      category: "Events",
      date: "November 10, 2022",
      location: "Washington, DC",
      attendees: "300+",
      description: "Forum discussing government partnerships in drone technology."
    },
    {
      id: 20,
      src: "/images/20.png",
      title: "Advanced Pilot Training",
      category: "Collaborations",
      date: "October 5, 2022",
      location: "Miami, FL",
      attendees: "150+",
      description: "Advanced pilot training program for commercial drone operators.",
       tags: ["Dev","Ajitha Surabhi"]
    },
    {
      id: 21,
      src: "/images/21.png",
      title: "Tech Innovation Showcase",
      category: "Events",
      date: "September 20, 2022",
      location: "Austin, TX",
      attendees: "1,800+",
      description: "Showcase of the latest innovations in drone and AI technology.",
       tags: ["Dev","Payal","vamsi"]
    },
    {
      id: 22,
      src: "/images/22.png",
      title: "European Expansion Launch",
      category: "Conferences",
      date: "August 15, 2022",
      location: "London, UK",
      attendees: "400+",
      description: "Official launch of Drone TV's expansion into European markets.",
       tags: ["Dev","Rini Bansal"]
    },
    {
      id: 23,
      src: "/images/23.png",
      title: "Mapping Technology Conference",
      category: "Interviews",
      date: "July 8, 2022",
      location: "Denver, CO",
      attendees: "1,200+",
      description: "Conference focused on advances in drone mapping technology.",
       tags: ["Dev","MGR"]
    },
    {
      id: 24,
      src: "/images/25.png",
      title: "Company Milestone Celebration",
      category: "Interviews",
      date: "June 1, 2022",
      location: "San Francisco, CA",
      attendees: "80+",
      description: "Celebrating major company milestones and achievements.",
     tags: ["Rini Bansal"]
    },
  //   {
  //   "id": 25,
  //   "src": "/images/28.png",
  //   "title": "Event Title 25",
  //   "category": "Team Photos",
  //   "date": "June 2025",
  //   "location": "TBD",
  //   "attendees": "250+",
  //   "description": "Description for event 25.",
  //   "tags": ["Dev", "kamala","Purvik"]
  // },
  // {
  //   "id": 26,
  //   "src": "/images/29.png",
  //   "title": "Event Title 26",
  //   "category": "Team Photos",
  //   "date": "June 2025",
  //   "location": "TBD",
  //   "attendees": "260+",
  //   "description": "Description for event 26."
    
  // },
  // {
  //   "id": 27,
  //   "src": "/images/30.png",
  //   "title": "Event Title 27",
  //   "category": "Events",
  //   "date": "June 2025",
  //   "location": "TBD",
  //   "attendees": "270+",
  //   "description": "Description for event 27.",
  //   "tags": ["Dev", "Team"]
  // },
  // {
  //   "id": 28,
  //   "src": "/images/31.png",
  //   "title": "Event Title 28",
  //   "category": "Events",
  //   "date": "June 2025",
  //   "location": "TBD",
  //   "attendees": "280+",
  //   "description": "Description for event 28.",
  //   "tags": ["Dev", "Team"]
  // },
  // {
  //   "id": 29,
  //   "src": "/images/32.png",
  //   "title": "Event Title 29",
  //   "category": "Events",
  //   "date": "June 2025",
  //   "location": "TBD",
  //   "attendees": "290+",
  //   "description": "Description for event 29.",
  //   "tags": ["Dev", "Team"]
  // },
  // {
  //   "id": 30,
  //   "src": "/images/33.png",
  //   "title": "Event Title 30",
  //   "category": "Events",
  //   "date": "June 2025",
  //   "location": "TBD",
  //   "attendees": "300+",
  //   "description": "Description for event 30.",
  //   "tags": ["Dev", "Team"]
  // },
  // {
  //   "id": 31,
  //   "src": "/images/34.png",
  //   "title": "Event Title 31",
  //   "category": "Events",
  //   "date": "June 2025",
  //   "location": "TBD",
  //   "attendees": "310+",
  //   "description": "Description for event 31.",
  //   "tags": ["Dev", "Team"]
  // },
  // {
  //   "id": 32,
  //   "src": "/images/35.png",
  //   "title": "Event Title 32",
  //   "category": "Events",
  //   "date": "June 2025",
  //   "location": "TBD",
  //   "attendees": "320+",
  //   "description": "Description for event 32.",
  //   "tags": ["Dev", "Team"]
  // },
  // {
  //   "id": 33,
  //   "src": "/images/36.png",
  //   "title": "Event Title 33",
  //   "category": "Events",
  //   "date": "June 2025",
  //   "location": "TBD",
  //   "attendees": "330+",
  //   "description": "Description for event 33.",
  //   "tags": ["Dev", "Team"]
  // },
  // {
  //   "id": 34,
  //   "src": "/images/37.png",
  //   "title": "Event Title 34",
  //   "category": "Events",
  //   "date": "June 2025",
  //   "location": "TBD",
  //   "attendees": "340+",
  //   "description": "Description for event 34.",
  //   "tags": ["Dev", "Team"]
  // },
  // {
  //   "id": 35,
  //   "src": "/images/38.png",
  //   "title": "Event Title 35",
  //   "category": "Events",
  //   "date": "June 2025",
  //   "location": "TBD",
  //   "attendees": "350+",
  //   "description": "Description for event 35.",
  //   "tags": ["Dev", "Team"]
  // },
  // {
  //   "id": 36,
  //   "src": "/images/39.png",
  //   "title": "Event Title 36",
  //   "category": "Events",
  //   "date": "June 2025",
  //   "location": "TBD",
  //   "attendees": "360+",
  //   "description": "Description for event 36.",
  //   "tags": ["Dev", "Team"]
  // },
  // {
  //   "id": 37,
  //   "src": "/images/40.png",
  //   "title": "Event Title 37",
  //   "category": "Events",
  //   "date": "June 2025",
  //   "location": "TBD",
  //   "attendees": "370+",
  //   "description": "Description for event 37.",
  //   "tags": ["Dev", "Team"]
  // },
  // {
  //   "id": 38,
  //   "src": "/images/41.png",
  //   "title": "Event Title 38",
  //   "category": "Events",
  //   "date": "June 2025",
  //   "location": "TBD",
  //   "attendees": "380+",
  //   "description": "Description for event 38.",
  //   "tags": ["Dev", "Team"]
  // },
  // {
  //   "id": 39,
  //   "src": "/images/42.png",
  //   "title": "Event Title 39",
  //   "category": "Events",
  //   "date": "June 2025",
  //   "location": "TBD",
  //   "attendees": "390+",
  //   "description": "Description for event 39.",
  //   "tags": ["Dev", "Team"]
  // },
  // {
  //   "id": 40,
  //   "src": "/images/43.png",
  //   "title": "Event Title 40",
  //   "category": "Events",
  //   "date": "June 2025",
  //   "location": "TBD",
  //   "attendees": "400+",
  //   "description": "Description for event 40.",
  //   "tags": ["Dev", "Team"]
  // },
  // {
  //   "id": 41,
  //   "src": "/images/44.png",
  //   "title": "Event Title 41",
  //   "category": "Events",
  //   "date": "June 2025",
  //   "location": "TBD",
  //   "attendees": "410+",
  //   "description": "Description for event 41.",
  //   "tags": ["Dev", "Team"]
  // },
  // {
  //   "id": 42,
  //   "src": "/images/45.png",
  //   "title": "Event Title 42",
  //   "category": "Events",
  //   "date": "June 2025",
  //   "location": "TBD",
  //   "attendees": "420+",
  //   "description": "Description for event 42.",
  //   "tags": ["Dev", "Team"]
  // },
  // {
  //   "id": 43,
  //   "src": "/images/46.png",
  //   "title": "Event Title 43",
  //   "category": "Events",
  //   "date": "June 2025",
  //   "location": "TBD",
  //   "attendees": "430+",
  //   "description": "Description for event 43.",
  //   "tags": ["Dev", "Team"]
  // },
  // {
  //   "id": 44,
  //   "src": "/images/47.png",
  //   "title": "Event Title 44",
  //   "category": "Events",
  //   "date": "June 2025",
  //   "location": "TBD",
  //   "attendees": "440+",
  //   "description": "Description for event 44.",
  //   "tags": ["Dev", "Team"]
  // },
  
    
  ];

  useEffect(() => {
    let filtered = allImages;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(image => image.category === selectedCategory);
    }

    // Filter by search query
  if (searchQuery) {
  const lowerQuery = searchQuery.toLowerCase();
  filtered = filtered.filter(image =>
    image.title.toLowerCase().includes(lowerQuery) ||
    image.description.toLowerCase().includes(lowerQuery) ||
    image.location.toLowerCase().includes(lowerQuery) ||
    (image.tags && image.tags.some(tag => tag.toLowerCase().includes(lowerQuery))) // 👈 NEW
  );
}


    // Sort by date (newest first)
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    setFilteredImages(filtered);
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setLightboxIndex(index);
    setIsLiked(false);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setLightboxIndex(0);
  };

  const navigateLightbox = (direction) => {
    const newIndex = direction === 'next'
      ? (lightboxIndex + 1) % filteredImages.length
      : (lightboxIndex - 1 + filteredImages.length) % filteredImages.length;

    setLightboxIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="min-h-screen bg-yellow-400 pt-16">
      {/* Hero Section */}
      <section className="py-3 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200/30 rounded-full animate-pulse blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-600/20 rounded-full animate-pulse blur-2xl" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-2xl md:text-5xl font-black text-black mb-2 tracking-tight">
            Photo Gallery
          </h1>
          <p className="text-xl text-black/80 max-w-2xl mx-auto mb-4">
            Highlights from our events and collaborations.
          </p>
          <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
        </div>
      </section>
      {/* Filter Section */}
      <section className="py-2 bg-yellow-400 sticky top-16 z-40 border-b border-black/10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row gap-2 items-center justify-between">
      {/* Search Bar */}
      <div className="relative flex-1 max-w-xs">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black/60" />
        <input
          type="text"
          placeholder="Search photos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-black/20 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40 text-black placeholder-black/60 font-medium text-sm transition-all duration-300"
        />
      </div>

      {/* Category Filter */}
      <div className="relative w-full lg:w-auto">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full lg:w-auto appearance-none bg-white/80 backdrop-blur-sm border-2 border-black/20 rounded-xl px-3 py-2 pr-8 text-black font-medium focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/40 text-sm transition-all duration-300"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'All' ? 'All Photos' : category}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black/60 pointer-events-none" />
      </div>
    </div>

    {/* Results Count */}
    {/* <div className="mt-2 text-center">
      <span className="text-black/70 font-medium">
        Showing {currentImages.length} of {filteredImages.length} photos
      </span>
    </div> */}
  </div>
</section>


      {/* Photo Grid Section */}
     <section className="py-4 sm:py-6 bg-yellow-400 mt-4 sticky top-16 z-40 border-b border-black/10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {currentImages.length === 0 ? (
      <div className="text-center py-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 max-w-md mx-auto">
          <Search className="h-16 w-16 text-black/40 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-black mb-2">No photos found</h3>
          <p className="text-black/60">Try adjusting your search or filter</p>
        </div>
      </div>
    ) : (
      <>
        {/* Masonry Grid Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {currentImages.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => openLightbox(image, index)}
              style={{
                animationDelay: `${index * 50}ms`,
                animation: `fadeInUp 0.6s ease-out ${index * 50}ms both`
              }}
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {/* <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-sm mb-1 line-clamp-2">
                      {image.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/80 text-xs">
                      <Calendar className="h-3 w-3" />
                      {new Date(image.date).toLocaleDateString()}
                    </div>
                  </div> */}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 right-3 bg-black/80 text-yellow-400 px-2 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {image.category}
                </div>
              </div>
            </div>
          ))}
        </div>

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
      </>
    )}
  </div>
</section>


      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300 z-10"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={() => navigateLightbox('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300 z-10"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={() => navigateLightbox('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300 z-10"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Image */}
            <div className="relative max-w-full max-h-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Image Info Panel */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-white text-xl font-bold mb-2">{selectedImage.title}</h3>
                    <p className="text-white/80 mb-3">{selectedImage.description}</p>
                    <div className="flex flex-wrap gap-4 text-white/70 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {selectedImage.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {selectedImage.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {selectedImage.attendees}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsLiked(!isLiked)}
                      className={`p-3 rounded-full transition-all duration-300 ${isLiked ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'
                        }`}
                    >
                      <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                    </button>
                    <button className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300">
                      <Share2 className="h-5 w-5" />
                    </button>
                    <button className="p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300">
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
              {lightboxIndex + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;