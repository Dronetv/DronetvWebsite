// import React, { useState } from 'react';
// import { ExternalLink, Play, X } from 'lucide-react';

// const Portfolio: React.FC = () => {
//   const [activeFilter, setActiveFilter] = useState('All');
//   const [selectedProject, setSelectedProject] = useState<any>(null);

//   const categories = ['All', 'Drone Projects', 'Web', 'Design'];

//   const projects = [
//     {
//       id: 1,
//       title: 'Coastal Aerial Survey',
//       category: 'Drone Projects',
//       image: 'https://images.pexels.com/photos/1438176/pexels-photo-1438176.jpeg?auto=compress&cs=tinysrgb&w=800',
//       description: 'Comprehensive aerial survey of coastal erosion patterns using advanced drone technology.',
//       technologies: ['DJI Mavic 3', 'PPK GPS', 'Photogrammetry'],
//       link: '#'
//     },
//     {
//       id: 2,
//       title: 'Real Estate Showcase',
//       category: 'Drone Projects',
//       image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
//       description: 'Luxury property aerial photography and virtual tour creation.',
//       technologies: ['4K Video', '360° Photography', 'Virtual Tours'],
//       link: '#'
//     },
//     {
//       id: 3,
//       title: 'DroneTV Website',
//       category: 'Web',
//       image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
//       description: 'Modern responsive website for drone services company.',
//       technologies: ['React', 'TypeScript', 'Tailwind CSS'],
//       link: '#'
//     },
//     {
//       id: 4,
//       title: 'Corporate Branding',
//       category: 'Design',
//       image: 'https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&w=800',
//       description: 'Complete brand identity design for aerial photography company.',
//       technologies: ['Adobe Creative Suite', 'Brand Guidelines', 'Logo Design'],
//       link: '#'
//     },
//     {
//       id: 5,
//       title: 'Construction Progress',
//       category: 'Drone Projects',
//       image: 'https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&w=800',
//       description: 'Time-lapse documentation of construction project progress.',
//       technologies: ['Time-lapse', 'Progress Tracking', 'Reporting'],
//       link: '#'
//     },
//     {
//       id: 6,
//       title: 'Flight Control App',
//       category: 'Web',
//       image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
//       description: 'Mobile application for drone flight planning and control.',
//       technologies: ['React Native', 'Flight APIs', 'GPS Integration'],
//       link: '#'
//     }
//   ];

//   const filteredProjects = activeFilter === 'All'
//     ? projects
//     : projects.filter(project => project.category === activeFilter);

//   return (
//     <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
//             My <span className="text-[#FF0000]">Portfolio</span>
//           </h2>
//           <div data-aos="fade-up" data-aos-delay="200" className="w-24 h-1 bg-[#FFD400] mx-auto mb-6"></div>
//           <p data-aos="fade-up" data-aos-delay="400" className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
//             Explore my recent projects and see how I bring creative visions to life through aerial photography and technology.
//           </p>
//         </div>

//         {/* Filter Buttons */}
//         <div data-aos="fade-up" data-aos-delay="600" className="flex justify-center mb-12">
//           <div className="flex flex-wrap gap-4 p-2 bg-white dark:bg-gray-900 rounded-full shadow-lg">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveFilter(category)}
//                 className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
//                   activeFilter === category
//                     ? 'bg-[#FF0000] text-white shadow-lg'
//                     : 'text-gray-700 dark:text-gray-300 hover:text-[#FF0000] hover:bg-gray-100 dark:hover:bg-gray-700'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

        {/* Projects Grid */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center text-white hover:bg-[#FF0000]/80 transition-colors"
                    >
                      <Play size={20} />
                    </button>
                    <button className="w-12 h-12 bg-[#FFD400] rounded-full flex items-center justify-center text-black hover:bg-[#FFD400]/80 transition-colors">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-[#FF0000] bg-[#FF0000]/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-[#FFD400]/20 text-black dark:text-white px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* Photo Gallery Section */}
        {/* <div className="mt-20" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
            Drone Training in Action
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {['/images/sumit1.jpg', '/images/sumit2.jpg', '/images/sumit3.jpg', '/images/sumit4.jpg'].map((img, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105"
              >
                <img
                  src={img}
                  alt={`Sumit Training ${index + 1}`}
                  className="w-full h-56 object-cover"
                />
              </div>
            ))}
          </div>
        </div> */}

        {/* Project Modal */}
        {/* {selectedProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-bold text-[#FF0000] bg-[#FF0000]/10 px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
                  {selectedProject.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className="bg-[#FFD400]/20 text-black dark:text-white px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                  View Live Project
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio; */}
import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Photo <span className="text-[#FF0000]">Gallery</span>
          </h2>
          <div data-aos="fade-up" data-aos-delay="200" className="w-24 h-1 bg-[#FFD400] mx-auto mb-6"></div>
          <p data-aos="fade-up" data-aos-delay="400" className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A glimpse into hands-on drone training, field operations, and simulator sessions led by Sumit Krishnan.
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {['/images/sumit1.png', '/images/sumit2.png', '/images/sumit3.jpg', '/images/sumit4.jpg'].map((img, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105"
            >
              <img
                src={img}
                alt={`Sumit Training ${index + 1}`}
                className="w-full h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
