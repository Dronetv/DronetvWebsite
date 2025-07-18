import React from 'react';
import { Zap, Target, Award, Truck, Star, Clock, Users, Gift, Wrench, Smartphone } from 'lucide-react';

const ScrollingFooter = () => {
  const advertisements = [
    { icon: Zap, text: "New DJI Mavic Pro 4 - 50% Off Limited Time!" },
    { icon: Target, text: "Professional Drone Training - Get Certified Today!" },
    { icon: Award, text: "Advanced GIS Mapping Services - Contact Us Now!" },
    { icon: Zap, text: "AI-Powered Flight Controllers - Revolutionary Technology!" },
    { icon: Star, text: "Aerial Photography Workshop - Register Now!" },
    { icon: Clock, text: "Extended Battery Life - Up to 60 Minutes Flight Time!" },
    { icon: Award, text: "Award-Winning Drone Solutions - Trusted by 1000+ Companies!" },
    { icon: Truck, text: "Free Shipping on Orders Over $500 - Limited Time Offer!" },
    { icon: Wrench, text: "Professional Maintenance Services - Keep Your Drones Flying!" },
    { icon: Smartphone, text: "New Mobile App - Control Your Fleet from Anywhere!" },
    { icon: Users, text: "Join 10,000+ Professionals in Our Community!" },
    { icon: Gift, text: "Special Holiday Deals - Up to 70% Off Selected Items!" }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-yellow-400 text-black h-10 overflow-hidden border-t-2 border-black shadow-lg">
      <div className="flex items-center h-full">
        <div className="animate-scroll whitespace-nowrap flex items-center">
          {/* Duplicate the content to create seamless loop */}
          {[...advertisements, ...advertisements].map((ad, index) => (
            <span key={index} className="inline-flex items-center px-6 text-sm font-bold">
              <ad.icon className="h-4 w-4 mr-2 flex-shrink-0" />
              {ad.text}
              <span className="mx-4 text-black/60">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingFooter;