import React, { useEffect } from 'react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "İletişim | LYNDOR Çatalca Randevu";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Çatalca'daki salonumuz için randevu alın veya WhatsApp üzerinden bizimle iletişime geçin.");
    }
  }, []);

  return (
    <div className="pb-24">
      <div className="bg-[#0f0f0f] text-white py-24 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 tracking-tight">İletişime Geçin</h1>
          <p className="text-[#C5A059] uppercase tracking-[0.4em] text-xs font-bold">Butik Hizmet Ayrıcalığı: Çatalca</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* WhatsApp CTA Section */}
          <div className="bg-white p-8 md:p-12 shadow-2xl rounded-sm flex flex-col justify-center text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">Hızlı Randevu & Bilgi</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Tüm sorularınız ve randevu talepleriniz için bize WhatsApp üzerinden anında ulaşabilirsiniz. Uzman ekibimiz size en kısa sürede dönüş yapacaktır.
            </p>
            <div className="flex justify-center">
              <a 
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-12 py-5 uppercase tracking-[0.2em] text-xs font-bold hover:bg-black transition-all duration-300 flex items-center space-x-3 rounded-full"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>WHATSAPP İLE BAĞLAN</span>
              </a>
            </div>
          </div>

          {/* Info */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-8">Salon Bilgileri</h2>
            <div className="space-y-10">
              <div className="flex items-start group">
                <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mr-6 shrink-0 group-hover:bg-[#C5A059] transition-colors">
                  <span className="text-xl group-hover:scale-110 transition-transform">📍</span>
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-3 text-gray-400">Merkez Şube</h4>
                  <p className="text-gray-800 font-medium leading-relaxed max-w-xs">
                    {SOCIAL_LINKS.address}
                  </p>
                  <div className="flex space-x-4 mt-4">
                    <a href={SOCIAL_LINKS.googleMaps} target="_blank" rel="noopener noreferrer" className="text-[#C5A059] text-[10px] font-bold uppercase tracking-widest hover:text-black transition-colors">Yol Tarifi Al</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mr-6 shrink-0 group-hover:bg-[#C5A059] transition-colors">
                  <span className="text-xl group-hover:scale-110 transition-transform">📞</span>
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-3 text-gray-400">İletişim & WhatsApp</h4>
                  <p className="text-gray-800 font-bold text-lg mb-1">
                    {SOCIAL_LINKS.phone}
                  </p>
                  <p className="text-gray-500 text-sm">{SOCIAL_LINKS.email}</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mr-6 shrink-0 group-hover:bg-[#C5A059] transition-colors">
                  <span className="text-xl group-hover:scale-110 transition-transform">📸</span>
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-3 text-gray-400">Instagram</h4>
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-800 font-bold text-lg hover:text-[#C5A059] transition-colors">
                    @lyndor.tr
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Güzellik ve değişim hikayelerimiz için takipte kalın.</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-gray-100">
              <h4 className="font-bold uppercase tracking-widest text-[10px] text-gray-400 mb-4 italic">Butik Güzellik Deneyimi</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lyndor Beauty & Wellness olarak, her misafirimizin benzersizliğine inanıyoruz. Çatalca'daki butik salonumuzda size özel ayrılmış zamanda, en kaliteli ürünlerle hizmet sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
