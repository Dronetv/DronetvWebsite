import React, { useState } from 'react';
import { Clock, MapPin, User } from 'lucide-react';

const AgendaSection: React.FC = () => {
  const [activeDay, setActiveDay] = useState(1);

  const agenda = {
    1: [
      {
        time: '9:00 AM',
        title: 'Registration & Welcome Coffee',
        speaker: 'Event Team',
        location: 'Main Lobby',
        type: 'registration'
      },
      {
        time: '10:00 AM',
        title: 'Opening Keynote: The Future of Drone Technology',
        speaker: 'Dr. Sarah Chen',
        location: 'Main Auditorium',
        type: 'keynote'
      },
      {
        time: '11:00 AM',
        title: 'Panel: AI in Autonomous Flight Systems',
        speaker: 'Marcus Rodriguez, Dr. Emily Watson',
        location: 'Conference Hall A',
        type: 'panel'
      },
      {
        time: '12:30 PM',
        title: 'Networking Lunch',
        speaker: 'All Attendees',
        location: 'Exhibition Hall',
        type: 'break'
      },
      {
        time: '2:00 PM',
        title: 'Workshop: Drone Programming Fundamentals',
        speaker: 'James Park',
        location: 'Tech Lab 1',
        type: 'workshop'
      },
      {
        time: '3:30 PM',
        title: 'Live Demo: Advanced Navigation Systems',
        speaker: 'SkyTech Solutions Team',
        location: 'Outdoor Arena',
        type: 'demo'
      },
      {
        time: '5:00 PM',
        title: 'Day 1 Wrap-up & Networking',
        speaker: 'Event Team',
        location: 'Main Lobby',
        type: 'networking'
      }
    ],
    2: [
      {
        time: '9:00 AM',
        title: 'Morning Coffee & Networking',
        speaker: 'Event Team',
        location: 'Main Lobby',
        type: 'registration'
      },
      {
        time: '10:00 AM',
        title: 'Keynote: Commercial Applications of Drone Technology',
        speaker: 'Dr. Lisa Kumar',
        location: 'Main Auditorium',
        type: 'keynote'
      },
      {
        time: '11:00 AM',
        title: 'Drone Racing Competition',
        speaker: 'Professional Pilots',
        location: 'Outdoor Arena',
        type: 'competition'
      },
      {
        time: '12:30 PM',
        title: 'Awards Lunch',
        speaker: 'All Attendees',
        location: 'Exhibition Hall',
        type: 'break'
      },
      {
        time: '2:00 PM',
        title: 'Panel: Regulatory Challenges and Solutions',
        speaker: 'Industry Experts',
        location: 'Conference Hall B',
        type: 'panel'
      },
      {
        time: '3:30 PM',
        title: 'Startup Pitch Competition',
        speaker: 'Emerging Companies',
        location: 'Innovation Stage',
        type: 'competition'
      },
      {
        time: '5:00 PM',
        title: 'Closing Ceremony & Awards',
        speaker: 'Event Organizers',
        location: 'Main Auditorium',
        type: 'ceremony'
      }
    ]
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'keynote': return 'bg-[#FF0000] text-white';
      case 'panel': return 'bg-[#FFD400] text-black';
      case 'workshop': return 'bg-blue-500 text-white';
      case 'demo': return 'bg-green-500 text-white';
      case 'competition': return 'bg-purple-500 text-white';
      case 'break': return 'bg-gray-400 text-white';
      case 'networking': return 'bg-orange-500 text-white';
      case 'ceremony': return 'bg-indigo-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <section id="agenda" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-black mb-4">
            Event <span className="text-[#FF0000]">Agenda</span>
          </h2>
          <div data-aos="fade-up" data-aos-delay="200" className="w-24 h-1 bg-[#FFD400] mx-auto mb-6"></div>
          <p data-aos="fade-up" data-aos-delay="400" className="text-gray-600 text-lg max-w-2xl mx-auto">
            Two days packed with insightful sessions, hands-on workshops, and networking opportunities.
          </p>
        </div>

        {/* Day Tabs */}
        <div data-aos="fade-up" data-aos-delay="600" className="flex justify-center mb-12">
          <div className="flex bg-gray-100 rounded-full p-2">
            {[1, 2].map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeDay === day
                    ? 'bg-[#FF0000] text-white shadow-lg'
                    : 'text-gray-600 hover:text-[#FF0000]'
                }`}
              >
                Day {day}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#FFD400]"></div>

            <div className="space-y-8">
              {agenda[activeDay as keyof typeof agenda].map((session, index) => (
                <div 
                  key={index}
                  data-aos="fade-up" 
                  data-aos-delay={index * 100}
                  className="relative flex items-start gap-8"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-16 h-16 bg-[#FF0000] rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    <Clock size={20} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="text-2xl font-bold text-[#FF0000]">{session.time}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${getTypeColor(session.type)}`}>
                        {session.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-black mb-3">{session.title}</h3>
                    
                    <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <User size={16} className="text-[#FFD400]" />
                        <span>{session.speaker}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-[#FFD400]" />
                        <span>{session.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;