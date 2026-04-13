import React, { useState } from 'react';
import { FAQS } from '../constants';

const SSS: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const categories = Array.from(new Set(FAQS.map(faq => faq.category)));

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-[#1a1a1a] text-white py-24 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 tracking-tight">Sıkça Sorulan Sorular</h1>
          <div className="w-20 h-[1px] bg-[#C5A059] mx-auto mb-6"></div>
          <p className="text-[#C5A059] uppercase tracking-[0.4em] text-xs font-bold">Merak Ettiklerinizi Yanıtlıyoruz</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-12">
          {categories.map(category => (
            <div key={category}>
              <h2 className="text-xl font-serif font-bold text-[#C5A059] mb-6 border-b border-gray-100 pb-2 uppercase tracking-widest">{category}</h2>
              <div className="space-y-4">
                {FAQS.filter(faq => faq.category === category).map((faq) => (
                  <div key={faq.id} className="border border-gray-100 rounded-sm overflow-hidden bg-white shadow-sm">
                    <button 
                      onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                      className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-bold text-sm md:text-base uppercase tracking-tight text-gray-800">{faq.question}</span>
                      <span className={`text-[#C5A059] transition-transform duration-300 ${activeFaq === faq.id ? 'rotate-180' : ''}`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </span>
                    </button>
                    <div className={`transition-all duration-300 overflow-hidden ${activeFaq === faq.id ? 'max-h-96' : 'max-h-0'}`}>
                      <div className="p-6 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-24 bg-[#f9f8f6] p-12 text-center rounded-sm">
          <h3 className="text-2xl font-serif font-bold mb-4">Sorunuz mu var?</h3>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto">Listede yanıtını bulamadığınız bir sorunuz varsa, uzmanımıza doğrudan WhatsApp üzerinden danışabilirsiniz.</p>
          <a 
            href="https://api.whatsapp.com/send/?phone=%2B905405131134" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#C5A059] text-white px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-black transition-all"
          >
            UZMANA DANIŞIN
          </a>
        </div>
      </div>
    </div>
  );
};

export default SSS;