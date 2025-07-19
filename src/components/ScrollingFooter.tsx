import React from 'react';
import {
  Zap, Target, Award, Truck, Star, Clock,
  Users, Gift, Wrench, Smartphone
} from 'lucide-react';

const advertisements = [
  { icon: Zap, text: "Corteve: New DJI Mavic Pro 4 - 50% Off Limited Time!", url: "/products" },
  { icon: Target, text: "Drogo Drone: Professional Drone Training - Get Certified Today!", url: "/events" },
  { icon: Award, text: "Corteve: Advanced GIS Mapping Services - Contact Us Now! Call +1-800-123-4567", url: "/professionals" },
  { icon: Zap, text: "AI-Powered Flight Controllers - Revolutionary Technology!", url: "/" },
  { icon: Star, text: "Drogo Drone: Aerial Photography Workshop - Register Now!", url: "/services" },
  { icon: Clock, text: "Extended Battery Life - Up to 60 Minutes Flight Time!", url: "/events" },
  { icon: Award, text: "Corteve: Award-Winning Drone Solutions - Trusted by 1000+ Companies!", url: "/services" },
  { icon: Truck, text: "Drogo Drone: Free Shipping on Orders Over $500 - Limited Time Offer!", url: "/events" },
  { icon: Wrench, text: "Professional Maintenance Services - Keep Your Drones Flying!", url: "/products" },
  { icon: Smartphone, text: "Drogo Drone: New Mobile App - Control Your Fleet from Anywhere!", url: "/services" },
  { icon: Users, text: "Corteve: Join 10,000+ Professionals in Our Community!", url: "/professionals" },
  { icon: Gift, text: "Special Holiday Deals - Up to 70% Off Selected Items!", url: "/about" }
];

const ScrollingFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-yellow-400 text-black h-10 overflow-hidden border-t-2 border-black shadow-lg">
      <div className="flex items-center h-full">
        <div className="animate-scroll whitespace-nowrap flex items-center">
          {[...advertisements, ...advertisements].map((ad, index) => (
            <a
              key={index}
              href={ad.url}
              className="inline-flex items-center px-6 text-sm font-bold"
              target="_self"
              rel="noopener noreferrer"
            >
              <ad.icon className="h-4 w-4 mr-2 flex-shrink-0" />
              {ad.text}
              <span className="mx-4 text-black/60">•</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingFooter;
