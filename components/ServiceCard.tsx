
import React from 'react';
import { Service } from '../types';
import { SOCIAL_LINKS } from '../constants';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm">
      <div className="relative overflow-hidden aspect-[4/5]">
        <img 
          src={service.image} 
          alt={service.name} 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <a 
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-2 uppercase text-[10px] tracking-[0.2em] font-bold hover:bg-[#C5A059] hover:text-white transition-colors"
          >
            Randevu Al
          </a>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-[#C5A059] text-white px-3 py-1 text-[9px] uppercase tracking-widest font-bold">
            {service.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-[#C5A059] transition-colors">
          {service.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
