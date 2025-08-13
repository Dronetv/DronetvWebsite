import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Preloader from './components/Preloader';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useParams } from 'react-router-dom';

interface ApiData {
  fullName: string;
  profilePicture: string;
  rotatingTitles: string;
  tagline: string;
  location: string;
  primaryColor: string;
  accentColor: string;
  button1Text: string;
  button1Link: string;
  button2Text: string;
  button2Link: string;
  bio: string;
  email: string;
  phone: string;
  contactMessage: string;
  socialLinks: {
    whatsapp: { S: string };
    github: { S: string };
    instagram: { S: string };
    linkedin: { S: string };
  };
  logo: string;
  footerText: string;
  services: Array<{
    M: {
      icon: { S: string };
      title: { S: string };
      description: { S: string };
    };
  }>;
  projects: Array<{
    M: {
      title: { S: string };
      description: { S: string };
      category: { S: string };
      image: { M: { file: { M: any }; preview: { NULL: boolean } } };
    };
  }>;
  skills: Array<{
    M: {
      name: { S: string };
      category: { S: string };
      proficiency: { N: string };
    };
  }>;
  testimonials: Array<{
    M: {
      name: { S: string };
      rating: { N: string };
      photo?: {
        M: {
          preview?: { NULL: boolean };
          file?: { M: Record<string, unknown> };
        };
      };
      role?: { S: string };
      quote: { S: string };
      company?: { S: string };
    };
  }>;
  blogPosts?: Array<{ // Add blogPosts to the interface
    M: {
      title: { S: string };
      excerpt: { S: string };
      url: { S: string };
      date?: { S: string };
      author?: { S: string };
      category?: { S: string };
      readTime?: { S: string };
      image?: {
        M: {
          preview?: { NULL: boolean };
          file?: { M: Record<string, unknown> };
        };
      };
    };
  }>;
  projects_0__image?: string;
  projects_1__image?: string;
  testimonials_0__photo?: string;
  blogPosts_0__image?: string; // Add blog post image references
  [key: string]: any;
}
const PortfolioTemplate1: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState<ApiData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });

    const fetchProfessionalData = async () => {
      try {
        if (!id) {
          throw new Error('Professional ID is missing');
        }

        const response = await fetch(
          `https://slvrjjextb.execute-api.ap-south-1.amazonaws.com/Portfolio-get?${id}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Handle both array and object responses
        const professionalData = Array.isArray(data) ? 
          data.find(item => item.id === id) || data[0] : 
          data;
        
        if (!professionalData) {
          throw new Error('Professional data not found');
        }

        setApiData(professionalData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        console.error('Fetch error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfessionalData();
  }, [id]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (isLoading) {
    return <Preloader />;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">Error: {error}</div>;
  }

  if (!apiData) {
    return <div className="text-center py-20">No data available</div>;
  }

  // Transform services
  const formattedServices = (apiData.services || []).map(service => ({
    icon: service.M.icon.S,
    title: service.M.title.S,
    description: service.M.description.S
  }));

// Transform projects
  const formattedProjects = (apiData.projects || []).map((project, index) => {
    const imageKey = `projects_${index}__image`;
    return {
      title: project?.M?.title?.S || '',
      description: project?.M?.description?.S || '',
      category: project?.M?.category?.S || '',
      image: typeof apiData[imageKey] === 'string' ? apiData[imageKey] : ''
    };
  });

  // Unique categories for portfolio filtering
  const uniqueCategories = Array.from(
    new Set(formattedProjects.map(p => p.category).filter(Boolean)
  ));
  const portfolioCategories = ['All', ...uniqueCategories];
  
  // Transform skills data
  const formattedSkills = apiData.skills.map(skill => ({
    name: skill.M.name.S,
    category: skill.M.category.S,
    proficiency: parseInt(skill.M.proficiency.N)
  }));

  
  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <HeroSection 
          fullName={apiData.fullName}
          rotatingTitles={apiData.rotatingTitles}
          tagline={apiData.tagline}
          location={apiData.location}
          primaryColor={apiData.primaryColor}
          accentColor={apiData.accentColor}
          button1Text={apiData.button1Text}
          button1Link={apiData.button1Link}
          button2Text={apiData.button2Text}
          button2Link={apiData.button2Link}
        />
        
        <AboutMe 
          title="About"
          highlightText="Us"
          subtitle={apiData.rotatingTitles.split('|')[0].trim() || "Professional"}
          description={apiData.bio}
          experienceYears="16"
          profileImage={apiData.profilePicture}
          signatureText={apiData.fullName}
          primaryColor={apiData.primaryColor}
          accentColor={apiData.accentColor}
          email={apiData.email}
          phone={apiData.phone}
          location={apiData.location}
        />
        
        <Skills 
          skills={formattedSkills}
          primaryColor={apiData.primaryColor}
          accentColor={apiData.accentColor}
        />
        
        <Services
          servicesTitle="Our Professional"
          servicesDescription="We offer comprehensive services tailored to your needs"
          services={formattedServices}
          primaryColor={apiData.primaryColor}
          accentColor={apiData.accentColor}
        />
        
        <Portfolio 
          projects={formattedProjects} 
          // primaryColor={apiData.primaryColor}
          // accentColor={apiData.accentColor}
          // categories={portfolioCategories}
        />
        
        <Contact 
          primaryColor={apiData.primaryColor}
          accentColor={apiData.accentColor}
          contactMessage={apiData.contactMessage}
          email={apiData.email}
          phone={apiData.phone}
          location={apiData.location}
          socialLinks={{
            whatsapp: apiData.socialLinks.whatsapp.S,
            github: apiData.socialLinks.github.S,
            instagram: apiData.socialLinks.instagram.S,
            linkedin: apiData.socialLinks.linkedin.S
          }}
        />
        
        <Footer 
          footerLogo={apiData.logo}
          footerText={apiData.footerText}
          socialLinks={{
            whatsapp: apiData.socialLinks.whatsapp.S,
            github: apiData.socialLinks.github.S,
            instagram: apiData.socialLinks.instagram.S,
            linkedin: apiData.socialLinks.linkedin.S
          }}
          email={apiData.email}
          phone={apiData.phone}
          location={apiData.location}
          services={formattedServices}
          primaryColor={apiData.primaryColor}
          accentColor={apiData.accentColor}
        />
      </div>
    </div>
  );
};

export default PortfolioTemplate1;
