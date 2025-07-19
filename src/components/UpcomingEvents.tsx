import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const UpcomingEvents = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const events = [
    {
      id: 1,
      name: "DroneWorld Conference 2024",
      date: "March 15-17, 2024",
      location: "San Francisco, CA",
      time: "9:00 AM - 6:00 PM",
      attendees: "2,500+",
      image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Conference",
      price: "Premium"
    },
    {
      id: 2,
      name: "AI in Aviation Summit",
      date: "April 22-23, 2024",
      location: "Austin, TX",
      time: "10:00 AM - 5:00 PM",
      attendees: "1,200+",
      image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Summit",
      price: "Free"
    },
    {
      id: 3,
      name: "GIS Mapping Workshop",
      date: "May 10, 2024",
      location: "Denver, CO",
      time: "1:00 PM - 4:00 PM",
      attendees: "150+",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Workshop",
      price: "Paid"
    },
    {
      id: 4,
      name: "Commercial Drone Expo",
      date: "June 5-7, 2024",
      location: "Chicago, IL",
      time: "9:00 AM - 7:00 PM",
      attendees: "3,000+",
      image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Expo",
      price: "Premium"
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Conference': return 'from-black to-gray-900';
      case 'Summit': return 'from-gray-900 to-black';
      case 'Workshop': return 'from-black to-gray-800';
      case 'Expo': return 'from-gray-800 to-black';
      default: return 'from-gray-900 to-black';
    }
  };

  const getPriceColor = (price) => {
    switch (price) {
      case 'Free': return 'bg-green-500';
      case 'Paid': return 'bg-blue-500';
      case 'Premium': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-20 bg-yellow-200 relative overflow-hidden min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200/20 rounded-full animate-pulse blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400/20 rounded-full animate-pulse blur-2xl" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              Upcoming Events
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect, learn, and network at industry-leading events
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full mt-6"></div>
        </div>
        
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
  {events.map((event, index) => {
    const isHovered = hoveredCard === event.id;

    return (
      <div
        key={event.id}
        className="group relative bg-yellow-100 rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:scale-105 hover:-rotate-1 opacity-100 translate-y-0"
        style={{
          transitionDelay: `${index * 200}ms`,
          animation: `fadeInUp 0.8s ease-out ${index * 200}ms both`
        }}
        onMouseEnter={() => setHoveredCard(event.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div className="relative overflow-hidden">
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-48 sm:h-56 object-cover transition-all duration-700 group-hover:scale-110"
          />
          
          {/* Black Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
          
          {/* Yellow Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-yellow-600/10 opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
          
          {/* Category Badge */}
          <div className={`absolute top-4 left-4 bg-yellow-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 border border-yellow-400/30`}>
            {event.category}
          </div>

          {/* Price Badge */}
          <div className={`absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg transform translate-x-full group-hover:translate-x-0 transition-transform duration-500`}>
            {event.price}
          </div>

          {/* Hover CTA */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold shadow-2xl transform scale-0 group-hover:scale-100 transition-all duration-500 flex items-center gap-2 hover:bg-yellow-300 border border-yellow-500">
              <span>Learn More</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
        
        <div className="p-4 sm:p-6 lg:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6 group-hover:text-gray-800 transition-colors duration-300">
            {event.name}
          </h3>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              <div className="bg-yellow-100 rounded-full p-2 mr-3 sm:mr-4 group-hover:bg-yellow-200 transition-colors duration-300 border border-yellow-300 flex-shrink-0">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600" />
              </div>
              <span className="font-medium text-sm sm:text-base">{event.date}</span>
            </div>
            
            <div className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              <div className="bg-yellow-100 rounded-full p-2 mr-3 sm:mr-4 group-hover:bg-yellow-200 transition-colors duration-300 border border-yellow-300 flex-shrink-0">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600" />
              </div>
              <span className="font-medium text-sm sm:text-base">{event.location}</span>
            </div>
            
            <div className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              <div className="bg-yellow-100 rounded-full p-2 mr-3 sm:mr-4 group-hover:bg-yellow-200 transition-colors duration-300 border border-yellow-300 flex-shrink-0">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600" />
              </div>
              <span className="font-medium text-sm sm:text-base">{event.time}</span>
            </div>

            <div className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              <div className="bg-yellow-100 rounded-full p-2 mr-3 sm:mr-4 group-hover:bg-yellow-200 transition-colors duration-300 border border-yellow-300 flex-shrink-0">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600" />
              </div>
              <span className="font-medium text-sm sm:text-base">{event.attendees} Expected</span>
            </div>
          </div>
        </div>

        {/* Yellow Glow Border */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-yellow-400/30 group-hover:shadow-lg group-hover:shadow-yellow-400/20 transition-all duration-500"></div>
      </div>
    );
  })}
</div>

      </div>
    </section>
  );
};

export default UpcomingEvents;