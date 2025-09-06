import React from 'react';
import { Calendar, ArrowRight, User } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Drone Technology in Commercial Photography',
      excerpt: 'Exploring the latest advancements in drone technology and how they\'re revolutionizing commercial photography and videography.',
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-15',
      author: 'Marcus Johnson',
      category: 'Technology',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Essential Tips for Aerial Real Estate Photography',
      excerpt: 'Learn the key techniques and best practices for capturing stunning aerial shots that sell properties faster.',
      image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-10',
      author: 'Marcus Johnson',
      category: 'Photography',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Drone Regulations: What Every Pilot Should Know in 2024',
      excerpt: 'Stay compliant with the latest FAA regulations and safety guidelines for commercial drone operations.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-05',
      author: 'Marcus Johnson',
      category: 'Regulations',
      readTime: '6 min read'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Latest <span className="text-[#FF0000]">Blog Posts</span>
          </h2>
          <div data-aos="fade-up" data-aos-delay="200" className="w-24 h-1 bg-[#FFD400] mx-auto mb-6"></div>
          <p data-aos="fade-up" data-aos-delay="400" className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest insights, tips, and trends in drone technology and aerial photography.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 200}
              className={`group flex items-center gap-8 bg-white dark:bg-gray-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex-col lg:flex-row`}
            >
              {/* Image */}
              <div className="flex-1 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-[#FF0000] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <span className="text-[#FF0000] font-medium">{post.readTime}</span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-black dark:text-white mb-4 group-hover:text-[#FF0000] transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">
                  {post.excerpt}
                </p>

                <button className="group/btn inline-flex items-center gap-3 text-[#FF0000] font-semibold hover:gap-4 transition-all duration-300">
                  <span>Read More</span>
                  <ArrowRight size={20} className="transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                  <div className="w-0 h-0.5 bg-[#FF0000] group-hover/btn:w-8 transition-all duration-300"></div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div data-aos="fade-up" data-aos-delay="800" className="text-center mt-16">
          <button className="bg-[#FFD400] hover:bg-[#FFD400]/90 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Blog Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;