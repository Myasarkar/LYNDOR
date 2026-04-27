import React from 'react';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-1">
          <h3 className="text-2xl font-serif font-bold mb-6 tracking-widest">LYNDOR<span className="text-[#C5A059]">.</span></h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Cilt onarımında uzman yaklaşım, butik hizmet ayrıcalığı. Güzelliği ve sağlığı bilimsel temelli wellness protokolleri ile buluşturuyoruz.
          </p>
        </div>

        <div className="md:col-span-1">
          <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-[#C5A059]">Hızlı Bağlantılar</h4>
          <ul className="text-gray-400 text-sm space-y-3">
            {NAV_ITEMS.map(item => (
              <li key={item.path}>
                <Link to={item.path} className="hover:text-[#C5A059] transition-colors">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="md:col-span-1">
          <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-[#C5A059]">İletişim Bilgileri</h4>
          <ul className="text-gray-400 text-sm space-y-4">
            <li className="flex items-start">
              <span className="mr-3 text-[#C5A059]">📍</span>
              {SOCIAL_LINKS.address}
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-[#C5A059]">📞</span>
              {SOCIAL_LINKS.phone}
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-[#C5A059]">✉️</span>
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="hover:text-[#C5A059] transition-colors">
                {SOCIAL_LINKS.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-[#C5A059]">Sosyal Medya</h4>
          <div className="flex space-x-6 mb-6">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href={SOCIAL_LINKS.googleMaps} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </a>
          </div>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">LYNDOR BEAUTY & WELLNESS - ÇATALCA</p>
        </div>
      </div>
      
      <div className="border-t border-gray-900 pt-8 text-center">
        <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em]">
          © 2026 LYNDOR. ALL RIGHTS RESERVED. | POWERED BY <a href="https://MYKsoft.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">MYKSoft</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;