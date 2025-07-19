import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Save, Upload, Plus, Trash2, Star } from 'lucide-react';

interface FormData {
  // Template Selection
  selectedTemplate: string;
  
  // Header & Hero
  companyLogo: string;
  navigationLinks: Array<{ label: string; link: string }>;
  heroHeadline: string;
  heroSubheadline: string;
  heroBackground: string;
  primaryCTA: { text: string; link: string };
  secondaryCTA: { text: string; link: string };
  
  // About Section
  aboutTitle: string;
  aboutDescription: string;
  aboutImage: string;
  companyValues: Array<{ title: string; description: string }>;
  videoEmbedUrl: string;
  
  // Services
  servicesTitle: string;
  services: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  
  // Products
  productsTitle: string;
  productCategories: string;
  products: Array<{
    image: string;
    title: string;
    description: string;
    link: string;
  }>;
  
  // Clients & Testimonials
  clientsTitle: string;
  clientLogos: Array<string>;
  testimonials: Array<{
    name: string;
    role: string;
    quote: string;
    photo: string;
    rating: number;
  }>;
  
  // Contact
  contactTitle: string;
  email: string;
  phone: string;
  address: string;
  mapEmbedUrl: string;
  contactFormText: string;
  submitButtonText: string;
  
  // Footer
  footerLogo: string;
  footerText: string;
  footerNavLinks: Array<{ label: string; link: string }>;
  socialLinks: {
    linkedin: string;
    instagram: string;
    youtube: string;
    whatsapp: string;
    website: string;
  };
}

const CreateCompany: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  
  const [formData, setFormData] = useState<FormData>({
    selectedTemplate: '',
    
    // Header & Hero
    companyLogo: '',
    navigationLinks: [
      { label: 'Home', link: '#home' },
      { label: 'About', link: '#about' },
      { label: 'Services', link: '#services' },
      { label: 'Products', link: '#products' },
      { label: 'Contact', link: '#contact' }
    ],
    heroHeadline: '',
    heroSubheadline: '',
    heroBackground: '',
    primaryCTA: { text: 'Explore Products', link: '#products' },
    secondaryCTA: { text: 'Contact Us', link: '#contact' },
    
    // About
    aboutTitle: 'About Our Company',
    aboutDescription: '',
    aboutImage: '',
    companyValues: [],
    videoEmbedUrl: '',
    
    // Services
    servicesTitle: 'Our Services',
    services: [],
    
    // Products
    productsTitle: 'Our Products',
    productCategories: 'All, Surveillance, Agriculture, Custom',
    products: [],
    
    // Clients
    clientsTitle: 'Our Clients',
    clientLogos: [],
    testimonials: [],
    
    // Contact
    contactTitle: 'Get In Touch',
    email: '',
    phone: '',
    address: '',
    mapEmbedUrl: '',
    contactFormText: 'Ready to work with us? Send us a message.',
    submitButtonText: 'Send Message',
    
    // Footer
    footerLogo: '',
    footerText: '© 2025 Your Company. All rights reserved.',
    footerNavLinks: [],
    socialLinks: {
      linkedin: '',
      instagram: '',
      youtube: '',
      whatsapp: '',
      website: ''
    }
  });

  const steps = [
    'Select Template',
    'Header & Hero',
    'About Section',
    'Services',
    'Products',
    'Clients & Testimonials',
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
    localStorage.setItem('companyFormData', JSON.stringify(formData));
    navigate(`/preview/company-template-${formData.selectedTemplate}`);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1: // Template Selection
        return (
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-black mb-8 text-center">Choose Your Template</h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div 
                onClick={() => handleInputChange('selectedTemplate', '1')}
                className={`cursor-pointer rounded-2xl overflow-hidden border-4 transition-all duration-300 ${
                  formData.selectedTemplate === '1' 
                    ? 'border-[#FF0000] shadow-2xl transform scale-105' 
                    : 'border-gray-200 hover:border-[#FFD400]'
                }`}
              >
                <div className="bg-white p-6">
                  <div className="h-48 bg-gradient-to-br from-[#FFD400] to-[#FFD400]/80 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-black">Template 1</span>
                  </div>
                  <h4 className="text-xl font-bold text-black mb-2">Bright Theme</h4>
                  <p className="text-gray-600">Modern design with yellow highlights and clean layout</p>
                </div>
              </div>

              <div 
                onClick={() => handleInputChange('selectedTemplate', '2')}
                className={`cursor-pointer rounded-2xl overflow-hidden border-4 transition-all duration-300 ${
                  formData.selectedTemplate === '2' 
                    ? 'border-[#FF0000] shadow-2xl transform scale-105' 
                    : 'border-gray-200 hover:border-[#FFD400]'
                }`}
              >
                <div className="bg-white p-6">
                  <div className="h-48 bg-black rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#FFD400]">Template 2</span>
                  </div>
                  <h4 className="text-xl font-bold text-black mb-2">Dark Theme</h4>
                  <p className="text-gray-600">Professional dark design with premium aesthetics</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 2: // Header & Hero
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black mb-6">Header & Hero Section</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Logo</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500">Upload your company logo</p>
                <input type="file" className="hidden" accept="image/*" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hero Headline</label>
              <input
                type="text"
                value={formData.heroHeadline}
                onChange={(e) => handleInputChange('heroHeadline', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                placeholder="Advanced Drone Solutions"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hero Subheadline</label>
              <textarea
                value={formData.heroSubheadline}
                onChange={(e) => handleInputChange('heroSubheadline', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                placeholder="Pioneering the future of aerial technology..."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Primary CTA Text</label>
                <input
                  type="text"
                  value={formData.primaryCTA.text}
                  onChange={(e) => handleNestedInputChange('primaryCTA', 'text', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Primary CTA Link</label>
                <input
                  type="text"
                  value={formData.primaryCTA.link}
                  onChange={(e) => handleNestedInputChange('primaryCTA', 'link', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Secondary CTA Text</label>
                <input
                  type="text"
                  value={formData.secondaryCTA.text}
                  onChange={(e) => handleNestedInputChange('secondaryCTA', 'text', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Secondary CTA Link</label>
                <input
                  type="text"
                  value={formData.secondaryCTA.link}
                  onChange={(e) => handleNestedInputChange('secondaryCTA', 'link', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                />
              </div>
            </div>
          </div>
        );

      case 3: // About Section
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black mb-6">About Section</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
              <input
                type="text"
                value={formData.aboutTitle}
                onChange={(e) => handleInputChange('aboutTitle', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={formData.aboutDescription}
                onChange={(e) => handleInputChange('aboutDescription', e.target.value)}
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                placeholder="Tell your company story..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">About Image</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500">Upload about section image</p>
                <input type="file" className="hidden" accept="image/*" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="block text-sm font-medium text-gray-700">Company Values</label>
                <button
                  onClick={() => addArrayItem('companyValues', { title: '', description: '' })}
                  className="bg-[#FF0000] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#FF0000]/90"
                >
                  <Plus size={16} />
                  Add Value
                </button>
              </div>

              <div className="space-y-4">
                {formData.companyValues.map((value, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <input
                        type="text"
                        value={value.title}
                        onChange={(e) => updateArrayItem('companyValues', index, { ...value, title: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                        placeholder="Value title"
                      />
                      <button
                        onClick={() => removeArrayItem('companyValues', index)}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <textarea
                      value={value.description}
                      onChange={(e) => updateArrayItem('companyValues', index, { ...value, description: e.target.value })}
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                      placeholder="Value description"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 4: // Services
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-black">Services Section</h3>
              <button
                onClick={() => addArrayItem('services', { icon: 'camera', title: '', description: '' })}
                className="bg-[#FF0000] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#FF0000]/90"
              >
                <Plus size={16} />
                Add Service
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
              <input
                type="text"
                value={formData.servicesTitle}
                onChange={(e) => handleInputChange('servicesTitle', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
              />
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
                        <option value="zap">Zap</option>
                        <option value="shield">Shield</option>
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
                        placeholder="Service title"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                      <textarea
                        value={service.description}
                        onChange={(e) => updateArrayItem('services', index, { ...service, description: e.target.value })}
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                        placeholder="Service description"
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

      case 5: // Products
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-black">Products Section</h3>
              <button
                onClick={() => addArrayItem('products', { image: '', title: '', description: '', link: '' })}
                className="bg-[#FF0000] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#FF0000]/90"
              >
                <Plus size={16} />
                Add Product
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
              <input
                type="text"
                value={formData.productsTitle}
                onChange={(e) => handleInputChange('productsTitle', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Product Categories (comma-separated)</label>
              <input
                type="text"
                value={formData.productCategories}
                onChange={(e) => handleInputChange('productCategories', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                placeholder="All, Surveillance, Agriculture, Custom"
              />
            </div>

            <div className="space-y-6">
              {formData.products.map((product, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Product Image</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                        <Upload size={32} className="mx-auto text-gray-400 mb-2" />
                        <p className="text-gray-500 text-sm">Upload product image</p>
                        <input type="file" className="hidden" accept="image/*" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                        <input
                          type="text"
                          value={product.title}
                          onChange={(e) => updateArrayItem('products', index, { ...product, title: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                          placeholder="Product name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Link</label>
                        <input
                          type="text"
                          value={product.link}
                          onChange={(e) => updateArrayItem('products', index, { ...product, link: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                          placeholder="Product link"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      value={product.description}
                      onChange={(e) => updateArrayItem('products', index, { ...product, description: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                      placeholder="Product description..."
                    />
                  </div>
                  <button
                    onClick={() => removeArrayItem('products', index)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-red-600"
                  >
                    <Trash2 size={16} />
                    Remove Product
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 6: // Clients & Testimonials
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black mb-6">Clients & Testimonials</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Clients Section Title</label>
              <input
                type="text"
                value={formData.clientsTitle}
                onChange={(e) => handleInputChange('clientsTitle', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="block text-sm font-medium text-gray-700">Testimonials</label>
                <button
                  onClick={() => addArrayItem('testimonials', { name: '', role: '', quote: '', photo: '', rating: 5 })}
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
                        placeholder="What did they say about your company?"
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
          </div>
        );

      case 7: // Contact
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black mb-6">Contact Section</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
              <input
                type="text"
                value={formData.contactTitle}
                onChange={(e) => handleInputChange('contactTitle', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <textarea
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                placeholder="Company address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Google Maps Embed URL</label>
              <input
                type="url"
                value={formData.mapEmbedUrl}
                onChange={(e) => handleInputChange('mapEmbedUrl', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                placeholder="https://maps.google.com/embed?..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Form Text</label>
              <textarea
                value={formData.contactFormText}
                onChange={(e) => handleInputChange('contactFormText', e.target.value)}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Submit Button Text</label>
              <input
                type="text"
                value={formData.submitButtonText}
                onChange={(e) => handleInputChange('submitButtonText', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
              />
            </div>
          </div>
        );

      case 8: // Footer
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black mb-6">Footer Section</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Footer Text</label>
              <input
                type="text"
                value={formData.footerText}
                onChange={(e) => handleInputChange('footerText', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Social Links</label>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">LinkedIn</label>
                  <input
                    type="url"
                    value={formData.socialLinks.linkedin}
                    onChange={(e) => handleNestedInputChange('socialLinks', 'linkedin', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                    placeholder="https://linkedin.com/company/..."
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Instagram</label>
                  <input
                    type="url"
                    value={formData.socialLinks.instagram}
                    onChange={(e) => handleNestedInputChange('socialLinks', 'instagram', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                    placeholder="https://instagram.com/..."
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">YouTube</label>
                  <input
                    type="url"
                    value={formData.socialLinks.youtube}
                    onChange={(e) => handleNestedInputChange('socialLinks', 'youtube', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                    placeholder="https://youtube.com/..."
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Website</label>
                  <input
                    type="url"
                    value={formData.socialLinks.website}
                    onChange={(e) => handleNestedInputChange('socialLinks', 'website', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
                    placeholder="https://yourcompany.com"
                  />
                </div>
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
              <span className="text-white">Company Form Builder</span>
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
                  disabled={currentStep === 1 && !formData.selectedTemplate}
                  className="flex items-center gap-2 px-6 py-3 bg-[#FF0000] text-white rounded-lg font-semibold hover:bg-[#FF0000]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                  Create Company Page
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateCompany;