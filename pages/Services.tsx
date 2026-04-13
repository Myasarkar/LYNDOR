
import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Hepsi');
  const categories = [
    'Hepsi', 
    'Cilt Protokolleri',
    'Anti-Aging', 
    'Kalıcı Makyaj', 
    'Kaş & Kirpik',
    'Bölgesel İncelme', 
    'Lazer Epilasyon',
    'Saç Bakımı'
  ];

  const filteredServices = activeCategory === 'Hepsi' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-[#1a1a1a] text-white py-20 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Hizmetlerimiz</h1>
          <nav className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">
            <span className="text-gray-400">Anasayfa</span> / <span>Güzellik & Wellness</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-16 border-b border-gray-100 pb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] md:text-xs uppercase tracking-widest font-bold transition-all px-2 py-1 ${
                activeCategory === cat ? 'text-[#C5A059] border-b-2 border-[#C5A059]' : 'text-gray-400 hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredServices.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 italic">Bu kategoride henüz hizmet tanımlanmamıştır.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
