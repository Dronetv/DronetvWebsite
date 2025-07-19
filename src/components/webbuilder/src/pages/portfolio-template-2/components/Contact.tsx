import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-[#FFD400]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-black mb-4">
            Let's Work <span className="text-[#FF0000]">Together</span>
          </h2>
          <div data-aos="fade-up" data-aos-delay="200" className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p data-aos="fade-up" data-aos-delay="400" className="text-black/80 max-w-2xl mx-auto text-lg">
            Ready to bring your vision to life? Get in touch and let's create something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Form */}
          <div data-aos="fade-up" data-aos-delay="600">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#FF0000] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">
                  Send me a message
                </h3>
                <p className="text-gray-600">
                  I'll get back to you within 24 hours
                </p>
              </div>
              
              {isSubmitted && (
                <div className="bg-green-100 border border-green-400 rounded-2xl p-4 mb-6 flex items-center gap-3">
                  <CheckCircle className="text-green-600" size={20} />
                  <span className="text-green-800 font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-[#FF0000] focus:bg-white transition-all duration-300 text-black placeholder-transparent peer"
                      placeholder="Your name"
                    />
                    <label className="absolute left-6 top-4 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#FF0000] peer-valid:top-1 peer-valid:text-sm">
                      Your Name *
                    </label>
                  </div>
                  
                  <div className="group relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-[#FF0000] focus:bg-white transition-all duration-300 text-black placeholder-transparent peer"
                      placeholder="your@email.com"
                    />
                    <label className="absolute left-6 top-4 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#FF0000] peer-valid:top-1 peer-valid:text-sm">
                      Email Address *
                    </label>
                  </div>
                </div>
                
                <div className="group relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-[#FF0000] focus:bg-white transition-all duration-300 text-black placeholder-transparent peer"
                    placeholder="Project inquiry"
                  />
                  <label className="absolute left-6 top-4 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#FF0000] peer-valid:top-1 peer-valid:text-sm">
                    Subject *
                  </label>
                </div>
                
                <div className="group relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-[#FF0000] focus:bg-white transition-all duration-300 text-black placeholder-transparent peer resize-none"
                    placeholder="Tell me about your project..."
                  />
                  <label className="absolute left-6 top-4 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#FF0000] peer-valid:top-1 peer-valid:text-sm">
                    Message *
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90 disabled:bg-gray-400 text-white py-4 px-8 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 disabled:transform-none shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div data-aos="fade-up" data-aos-delay="800" className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-black rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={20} className="text-white" />
              </div>
              <h4 className="font-bold text-white mb-2">Email</h4>
              <p className="text-gray-400">marcus@dronetv.com</p>
            </div>
            
            <div className="bg-black rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={20} className="text-white" />
              </div>
              <h4 className="font-bold text-white mb-2">Phone</h4>
              <p className="text-gray-400">+1 (555) 987-6543</p>
            </div>
            
            <div className="bg-black rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={20} className="text-white" />
              </div>
              <h4 className="font-bold text-white mb-2">Location</h4>
              <p className="text-gray-400">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;