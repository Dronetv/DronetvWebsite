import React from 'react';
import { Camera, Video, Code, Palette, Settings, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    {
      icon: <Camera size={24} />,
      title: 'Aerial Photography',
      description: 'Professional drone photography with advanced composition techniques',
      percentage: 95,
      delay: 0
    },
    {
      icon: <Video size={24} />,
      title: 'Cinematography',
      description: 'Cinematic aerial footage and video production',
      percentage: 90,
      delay: 200
    },
    {
      icon: <Code size={24} />,
      title: 'UAV Programming',
      description: 'Custom drone software and autonomous flight systems',
      percentage: 85,
      delay: 400
    },
    {
      icon: <Palette size={24} />,
      title: 'Post-Production',
      description: 'Video editing, color grading, and visual effects',
      percentage: 88,
      delay: 600
    },
    {
      icon: <Settings size={24} />,
      title: 'Technical Support',
      description: 'Drone maintenance, repair, and system optimization',
      percentage: 92,
      delay: 800
    },
    {
      icon: <Zap size={24} />,
      title: 'Live Streaming',
      description: 'Real-time aerial broadcasting and streaming solutions',
      percentage: 80,
      delay: 1000
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            My <span className="text-[#FF0000]">Skills</span>
          </h2>
          <div data-aos="fade-up" data-aos-delay="200" className="w-24 h-1 bg-[#FFD400] mx-auto mb-6"></div>
          <p data-aos="fade-up" data-aos-delay="400" className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive skill set developed through years of experience in drone technology and aerial content creation.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-[#FFD400] hidden lg:block"></div>

          <div className="space-y-12">
            {skills.map((skill, index) => (
              <div 
                key={index}
                data-aos="fade-up" 
                data-aos-delay={skill.delay}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className={`flex items-center gap-4 mb-4 ${
                      index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                    } justify-start`}>
                      <div className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center text-white">
                        {skill.icon}
                      </div>
                      <h3 className="text-xl font-bold text-black dark:text-white">{skill.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {skill.description}
                    </p>
                    
                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className={`flex justify-between items-center ${
                        index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                      } flex-row`}>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Proficiency</span>
                        <span className="text-sm font-bold text-[#FF0000]">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-[#FFD400] to-[#FF0000] h-3 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex w-6 h-6 bg-[#FF0000] rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10 flex-shrink-0"></div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;