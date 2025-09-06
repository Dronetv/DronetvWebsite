import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Save, Upload, Plus, Trash2, Star } from 'lucide-react';

interface FormData {
  // General Settings
  logo: string;
  primaryColor: string;
  textColor: string;
  accentColor: string;
  
  // Hero Section
  fullName: string;
  rotatingTitles: string;
  tagline: string;
  button1Text: string;
  button1Link: string;
  button2Text: string;
  button2Link: string;
  backgroundImage: string;
  
  // About Me
  profilePicture: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  signature: string;
  
  // Skills
  skills: Array<{
    category: string;
    name: string;
    proficiency: number;
  }>;
  
  // Services
  services: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  
  // Portfolio
  projects: Array<{
    image: string;
    title: string;
    category: string;
    description: string;
  }>;
  
  // Testimonials
  testimonials: Array<{
    name: string;
    role: string;
    photo: string;
    rating: number;
    quote: string;
  }>;
  
  // Blog
  blogPosts: Array<{
    title: string;
    image: string;
    excerpt: string;
    url: string;
  }>;
  
  // Contact
  socialLinks: {
    instagram: string;
    linkedin: string;
    github: string;
    whatsapp: string;
  };
  contactMessage: string;
  mapUrl: string;
  
  // Footer
  footerText: string;
  footerLogo: string;
}

const ProfessionalForm: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('');
  
  const [formData, setFormData] = useState<FormData>({
    // General Settings
    logo: '',
    primaryColor: '#FFD400',
    textColor: '#000000',
    accentColor: '#FF0000',
    
    // Hero Section
    fullName: '',
    rotatingTitles: '',
    tagline: '',
    button1Text: 'Hire Me',
    button1Link: '#contact',
    button2Text: 'Download CV',
    button2Link: '#',
    backgroundImage: '',
    
    // About Me
    profilePicture: '',
    bio: '',
    email: '',
    phone: '',
    location: '',
    signature: '',
    
    // Skills
    skills: [],
    
    // Services
    services: [],
    
    // Portfolio
    projects: [],
    
    // Testimonials
    testimonials: [],
    
    // Blog
    blogPosts: [],
    
    // Contact
    socialLinks: {
      instagram: '',
      linkedin: '',
      github: '',
      whatsapp: ''
    },
    contactMessage: '',
    mapUrl: '',
    
    // Footer
    footerText: '',
    footerLogo: ''
  });

  useEffect(() => {
    const templateId = localStorage.getItem('selectedTemplateId');
    if (!templateId) {
      navigate('/create-portfolio/professional');
      return;
    }
    setSelectedTemplateId(templateId);
  }, [navigate]);

  const steps = [
    'General Settings',
    'Hero Section',
    'About Me',
    'Skills',
    'Services',
    'Portfolio',
    'Testimonials',
    'Blog',
    'Contact',
    'Footer'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNestedInputChange = (section: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof FormData],
        [field]: value
      }
    }));
  };

  const addArrayItem = (field: string, item: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...(prev[field as keyof FormData] as any[]), item]
    }));
  };

  const removeArrayItem = (field: string, index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field as keyof FormData] as any[]).filter((_, i) => i !== index)
    }));
  };

  const updateArrayItem = (field: string, index: number, updatedItem: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field as keyof FormData] as any[]).map((item, i) => 
        i === index ? updatedItem : item
      )
    }));
  };

  const handleSubmit = () => {
    // Store form data and redirect to preview
    localStorage.setItem('portfolioFormData', JSON.stringify(formData));
    navigate(`/preview/portfolio-template-${selectedTemplateId}`);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1: // General Settings
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black mb-6">General Settings</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Logo Upload</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500">Click to upload logo or drag and drop</p>
                <input type="file" className="hidden" accept="image/*" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#FFD400] rounded border"></div>
                  <input 
                    type="text" 
                    value="#FFD400" 
                    disabled
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-black rounded border"></div>
                  <input 
                    type="text" 
                    value="#000000" 
                    disabled
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Accent Color</label>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#FF0000] rounded border"></div>
                  <input 
                    type="text" 
                    value="#FF0000" 
                    disabled
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 2: // Hero Section
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black mb-6">Hero Section</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Rotating Titles (comma-separated)</label>
              <input
                type="text"
                value={formData.rotatingTitles}
                onChange={(e) => handleInputChange('rotatingTitles', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                placeholder="Drone Pilot, UAV Engineer, Content Creator"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tagline/Subtext</label>
              <textarea
                value={formData.tagline}
                onChange={(e) => handleInputChange('tagline', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                placeholder="Capturing the world from above with cutting-edge drone technology"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Button 1 Text</label>
                <input
                  type="text"
                  value={formData.button1Text}
                  onChange={(e) => handleInputChange('button1Text', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Button 1 Link</label>
                <input
                  type="text"
                  value={formData.button1Link}
                  onChange={(e) => handleInputChange('button1Link', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Button 2 Text</label>
                <input
                  type="text"
                  value={formData.button2Text}
                  onChange={(e) => handleInputChange('button2Text', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Button 2 Link</label>
                <input
                  type="text"
                  value={formData.button2Link}
                  onChange={(e) => handleInputChange('button2Link', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                />
              </div>
            </div>
          </div>
        );

      case 3: // About Me
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black mb-6">About Me</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Profile Picture</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500">Upload your profile picture</p>
                <input type="file" className="hidden" accept="image/*" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bio/Introduction</label>
              <textarea
                value={formData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                placeholder="Tell your story..."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                placeholder="City, Country"
              />
            </div>
          </div>
        );

      case 4: // Skills
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-black">Skills</h3>
              <button
                onClick={() => addArrayItem('skills', { category: 'Frontend', name: '', proficiency: 0 })}
                className="bg-[#FF0000] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#FF0000]/90"
              >
                <Plus size={16} />
                Add Skill
              </button>
            </div>

            <div className="space-y-4">
              {formData.skills.map((skill, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid md:grid-cols-4 gap-4 items-end">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                      <select
                        value={skill.category}
                        onChange={(e) => updateArrayItem('skills', index, { ...skill, category: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                      >
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="Tools">Tools</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Skill Name</label>
                      <input
                        type="text"
                        value={skill.name}
                        onChange={(e) => updateArrayItem('skills', index, { ...skill, name: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                        placeholder="React"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Proficiency (%)</label>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={skill.proficiency}
                        onChange={(e) => updateArrayItem('skills', index, { ...skill, proficiency: parseInt(e.target.value) })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                      />
                    </div>
                    <button
                      onClick={() => removeArrayItem('skills', index)}
                      className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 5: // Services
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-black">Services Offered</h3>
              <button
                onClick={() => addArrayItem('services', { icon: 'camera', title: '', description: '' })}
                className="bg-[#FF0000] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#FF0000]/90"
              >
                <Plus size={16} />
                Add Service
              </button>
            </div>

            <div className="space-y-4">
              {formData.services.map((service, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid md:grid-cols-4 gap-4 items-end">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Icon</label>
                      <select
                        value={service.icon}
                        onChange={(e) => updateArrayItem('services', index, { ...service, icon: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                      >
                        <option value="camera">Camera</option>
                        <option value="video">Video</option>
                        <option value="code">Code</option>
                        <option value="palette">Palette</option>
                        <option value="settings">Settings</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                      <input
                        type="text"
                        value={service.title}
                        onChange={(e) => updateArrayItem('services', index, { ...service, title: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                        placeholder="Aerial Photography"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                      <textarea
                        value={service.description}
                        onChange={(e) => updateArrayItem('services', index, { ...service, description: e.target.value })}
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                        placeholder="Professional aerial photography services"
                      />
                    </div>
                    <button
                      onClick={() => removeArrayItem('services', index)}
                      className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 6: // Portfolio
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-black">Portfolio Projects</h3>
              <button
                onClick={() => addArrayItem('projects', { image: '', title: '', category: 'Web', description: '' })}
                className="bg-[#FF0000] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#FF0000]/90"
              >
                <Plus size={16} />
                Add Project
              </button>
            </div>

            <div className="space-y-6">
              {formData.projects.map((project, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Image</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                        <Upload size={32} className="mx-auto text-gray-400 mb-2" />
                        <p className="text-gray-500 text-sm">Upload project image</p>
                        <input type="file" className="hidden" accept="image/*" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                        <input
                          type="text"
                          value={project.title}
                          onChange={(e) => updateArrayItem('projects', index, { ...project, title: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                          placeholder="Project Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                        <select
                          value={project.category}
                          onChange={(e) => updateArrayItem('projects', index, { ...project, category: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                        >
                          <option value="Web">Web</option>
                          <option value="Drone">Drone</option>
                          <option value="Design">Design</option>
                          <option value="App">App</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      value={project.description}
                      onChange={(e) => updateArrayItem('projects', index, { ...project, description: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                      placeholder="Project description..."
                    />
                  </div>
                  <button
                    onClick={() => removeArrayItem('projects', index)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-red-600"
                  >
                    <Trash2 size={16} />
                    Remove Project
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 7: // Testimonials
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-black">Testimonials</h3>
              <button
                onClick={() => addArrayItem('testimonials', { name: '', role: '', photo: '', rating: 5, quote: '' })}
                className="bg-[#FF0000] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#FF0000]/90"
              >
                <Plus size={16} />
                Add Testimonial
              </button>
            </div>

            <div className="space-y-6">
              {formData.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Client Photo</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                        <Upload size={32} className="mx-auto text-gray-400 mb-2" />
                        <p className="text-gray-500 text-sm">Upload client photo</p>
                        <input type="file" className="hidden" accept="image/*" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Client Name</label>
                        <input
                          type="text"
                          value={testimonial.name}
                          onChange={(e) => updateArrayItem('testimonials', index, { ...testimonial, name: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                        <input
                          type="text"
                          value={testimonial.role}
                          onChange={(e) => updateArrayItem('testimonials', index, { ...testimonial, role: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                          placeholder="CEO, Company Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                        <div className="flex items-center gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              onClick={() => updateArrayItem('testimonials', index, { ...testimonial, rating: star })}
                              className={`${star <= testimonial.rating ? 'text-[#FFD400]' : 'text-gray-300'}`}
                            >
                              <Star size={20} fill="currentColor" />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Quote</label>
                    <textarea
                      value={testimonial.quote}
                      onChange={(e) => updateArrayItem('testimonials', index, { ...testimonial, quote: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                      placeholder="What did they say about your work?"
                    />
                  </div>
                  <button
                    onClick={() => removeArrayItem('testimonials', index)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-red-600"
                  >
                    <Trash2 size={16} />
                    Remove Testimonial
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 8: // Blog
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-black">Blog Preview (Optional)</h3>
              <button
                onClick={() => addArrayItem('blogPosts', { title: '', image: '', excerpt: '', url: '' })}
                className="bg-[#FF0000] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#FF0000]/90"
              >
                <Plus size={16} />
                Add Blog Post
              </button>
            </div>

            <div className="space-y-6">
              {formData.blogPosts.map((post, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                        <Upload size={32} className="mx-auto text-gray-400 mb-2" />
                        <p className="text-gray-500 text-sm">Upload blog image</p>
                        <input type="file" className="hidden" accept="image/*" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                        <input
                          type="text"
                          value={post.title}
                          onChange={(e) => updateArrayItem('blogPosts', index, { ...post, title: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                          placeholder="Blog post title"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Blog URL</label>
                        <input
                          type="url"
                          value={post.url}
                          onChange={(e) => updateArrayItem('blogPosts', index, { ...post, url: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                          placeholder="https://blog.example.com/post"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
                    <textarea
                      value={post.excerpt}
                      onChange={(e) => updateArrayItem('blogPosts', index, { ...post, excerpt: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                      placeholder="Brief description of the blog post..."
                    />
                  </div>
                  <button
                    onClick={() => removeArrayItem('blogPosts', index)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-red-600"
                  >
                    <Trash2 size={16} />
                    Remove Post
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 9: // Contact
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black mb-6">Contact Section</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Message</label>
              <textarea
                value={formData.contactMessage}
                onChange={(e) => handleInputChange('contactMessage', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                placeholder="Available for freelance drone work and collaborations."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Instagram</label>
                <input
                  type="url"
                  value={formData.socialLinks.instagram}
                  onChange={(e) => handleNestedInputChange('socialLinks', 'instagram', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                  placeholder="https://instagram.com/username"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
                <input
                  type="url"
                  value={formData.socialLinks.linkedin}
                  onChange={(e) => handleNestedInputChange('socialLinks', 'linkedin', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                  placeholder="https://linkedin.com/in/username"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">GitHub</label>
                <input
                  type="url"
                  value={formData.socialLinks.github}
                  onChange={(e) => handleNestedInputChange('socialLinks', 'github', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                  placeholder="https://github.com/username"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp</label>
                <input
                  type="tel"
                  value={formData.socialLinks.whatsapp}
                  onChange={(e) => handleNestedInputChange('socialLinks', 'whatsapp', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                  placeholder="+1234567890"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Google Maps Embed URL (Optional)</label>
              <input
                type="url"
                value={formData.mapUrl}
                onChange={(e) => handleInputChange('mapUrl', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                placeholder="https://maps.google.com/embed?..."
              />
            </div>
          </div>
        );

      case 10: // Footer
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black mb-6">Footer</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Footer Text</label>
              <input
                type="text"
                value={formData.footerText}
                onChange={(e) => handleInputChange('footerText', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                placeholder="© 2024 Your Name. All rights reserved."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Footer Logo (Optional)</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500">Upload footer logo or leave empty to use header logo</p>
                <input type="file" className="hidden" accept="image/*" />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              Drone<span className="text-[#FFD400]">TV</span>
            </div>
            <nav>
              <button 
                onClick={() => navigate('/create-portfolio/professional')}
                className="flex items-center gap-2 text-white hover:text-[#FFD400] transition-colors"
              >
                <ArrowLeft size={20} />
                Back to Templates
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              Step {currentStep} of {steps.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round((currentStep / steps.length) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-[#FF0000] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Step Navigation */}
            <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
              <div className="flex flex-wrap gap-2 mb-6">
                {steps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index + 1)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      currentStep === index + 1
                        ? 'bg-[#FF0000] text-white'
                        : currentStep > index + 1
                        ? 'bg-[#FFD400] text-black'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {step}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              {renderStepContent()}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
                className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-600 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
              >
                <ArrowLeft size={20} />
                Previous
              </button>

              {currentStep < steps.length ? (
                <button
                  onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
                  className="flex items-center gap-2 px-6 py-3 bg-[#FF0000] text-white rounded-lg font-semibold hover:bg-[#FF0000]/90 transition-colors"
                >
                  Next
                  <ArrowRight size={20} />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="flex items-center gap-2 px-8 py-3 bg-[#FFD400] text-black rounded-lg font-semibold hover:bg-[#FFD400]/90 transition-colors"
                >
                  <Save size={20} />
                  Create Portfolio
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfessionalForm;