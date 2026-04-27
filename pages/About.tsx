import React, { useEffect } from 'react';

// About component providing information about Lyndor Beauty & Wellness
const About: React.FC = () => {
  useEffect(() => {
    document.title = "Hakkımızda | LYNDOR Çatalca";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Uzman hemşire Bilge Çelik Dönmez ve Lyndor'un bilimsel güzellik vizyonu hakkında bilgi edinin.");
    }
  }, []);

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-[#1a1a1a] text-white py-24 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 tracking-tight">Hakkımızda</h1>
          <div className="w-20 h-[1px] bg-[#C5A059] mx-auto mb-6"></div>
          <p className="text-[#C5A059] uppercase tracking-[0.4em] text-xs font-bold">Bütünsel Güzellik ve Uzman Yaklaşım</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Founder Section - Bilge Çelik Dönmez */}
          <section className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 relative">
                <div className="sticky top-32">
                  <div className="relative overflow-hidden group rounded-sm shadow-2xl">
                    <img 
                      src="https://github.com/Myasarkar/iptv/blob/main/b%C3%A7g.jpeg?raw=true" 
                      alt="Bilge Çelik Dönmez - LYNDOR Kurucusu ve Uzman Hemşire"
                      className="w-full grayscale hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 border-[15px] border-white/10 pointer-events-none"></div>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-3xl font-serif font-bold text-[#C5A059] mb-1">Bilge Çelik Dönmez</h3>
                    <p className="text-gray-400 uppercase tracking-widest text-[10px] font-bold italic">Kurucu & Güzellik Uzmanı (Hemşire)</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">
                      Sağlık Disipliniyle Şekillenen Profesyonel Güzellik
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg italic border-l-4 border-[#C5A059] pl-6 mb-8">
                      "Merhaba, ben Bilge Çelik Dönmez. Lyndor’un kurucusu, hemşire kökenli bir güzellik uzmanıyım."
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Güzellik sektöründeki yolculuğum, lise ve üniversite yıllarında aldığım akademik sağlık eğitimi ile başladı. Kariyerimin 7 yıllık sürecini, İstanbul’un en seçkin lokasyonlarında; Plastik Cerrahi ve Medikal Estetik alanında öncü olan kliniklerde çalışarak geçirdim. Bu süreçte sadece estetik uygulamaları değil, tıbbi operasyon süreçlerini, doku iyileşmesini ve klinik protokolleri birebir deneyimledim.
                    </p>
                  </div>

                  <div className="bg-[#f9f8f6] p-8 rounded-sm">
                    <h4 className="text-[#C5A059] font-bold uppercase tracking-widest text-xs mb-4">Bilimsel Altyapı ve Resmi Uzmanlık</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Sağlık temelimi, güzellik sektörünün gerektirdiği profesyonel yetkinliklerle taçlandırdım. Güzellik Uzmanlığı ve Kalıcı Makyaj gibi alanlarda <strong>T.C. Milli Eğitim Bakanlığı onaylı</strong> uzmanlık eğitimlerimi tamamladım. Bu sayede anatomi, deri fizyolojisi ve içerik bilgisi konusundaki tıbbi donanımımı, bakanlık onaylı profesyonel uygulama yetkisiyle birleştirdim.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-xl font-serif font-bold border-b border-gray-100 pb-2">Neden Sağlık Temelli Bir Yaklaşım?</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Benim için güzellik, estetik bir kaygıdan öte bütünsel bir sağlık sürecidir. Klinik kökenli bir uzman olarak hijyen, sterilizasyon ve güvenli uygulama protokolleri benim için bir tercih değil, vazgeçilmez bir zorunluluktur. Lyndor’da uygulanan her işlem, cerrahi bir klinikteki ciddiyet ve titizlikle planlanır.
                    </p>

                    <h4 className="text-xl font-serif font-bold border-b border-gray-100 pb-2">İstanbul’un A Segment Kalitesini Çatalca’ya Taşıdım</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Eşim vesilesiyle bağ kurduğum Çatalca’da önemli bir ihtiyaç fark ettim: Üst düzey klinik hizmetine ulaşmak için şehir merkezine gitme zorunluluğu. Lyndor’u tam da bu boşluğu doldurmak için kurdum. İstanbul’un en prestijli kliniklerinde kullanılan A segment ürünleri, en ileri teknolojileri ve bilimsel protokolleri ödünsüz bir şekilde Çatalca’da erişilebilir kıldım.
                    </p>
                  </div>

                  <div className="mt-12 bg-white border border-[#C5A059]/20 p-10 shadow-lg">
                    <h4 className="text-2xl font-serif font-bold mb-8 text-center text-[#C5A059]">Lyndor’da Sizi Ne Bekliyor?</h4>
                    <ul className="grid grid-cols-1 gap-8">
                      <li className="flex items-start">
                        <span className="text-[#C5A059] mr-4 text-xl">🛡️</span>
                        <div>
                          <strong className="block text-gray-800 uppercase tracking-tighter text-xs font-black mb-1">Bilimsel ve Doğru Yaklaşım</strong>
                          <p className="text-gray-500 text-sm">Popüler olanı değil, cildinizin ve vücudunuzun biyolojik ihtiyacı olan doğru işlemi bilimsel veriler ışığında seçiyoruz.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#C5A059] mr-4 text-xl">🔬</span>
                        <div>
                          <strong className="block text-gray-800 uppercase tracking-tighter text-xs font-black mb-1">Tıbbi Disiplin</strong>
                          <p className="text-gray-500 text-sm">Plastik cerrahi ve medikal estetik geçmişinden gelen bir uzmanlıkla, her işlemde klinik güvenliği ve maksimum sonucu hedefliyoruz.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#C5A059] mr-4 text-xl">🤝</span>
                        <div>
                          <strong className="block text-gray-800 uppercase tracking-tighter text-xs font-black mb-1">Kişiye Özel Protokoller</strong>
                          <p className="text-gray-500 text-sm">Her danışanımızı özel bir vaka olarak ele alıyor, ulaşılamaz değil, erişilebilir ama bir o kadar da ödünsüz bir hizmet sunuyoruz.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <p className="text-gray-800 font-serif text-xl italic mt-12 text-right">
                    "Eğer siz de kendinizi bir profesyonelin akademik bilgisine, cerrahi klinik tecrübesine ve titizliğine emanet etmek istiyorsanız; sizi ve sağlığınızı gerçekten anlayan Lyndor’a hoş geldiniz. 🤍"
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Main Vision Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32 border-t border-gray-100 pt-32">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#f9f8f6] -z-10 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800" 
                alt="LYNDOR Güzellik ve Wellness Merkezi Çatalca Salon Detayı"
                className="w-full rounded-sm shadow-2xl relative z-10" 
              />
              <div className="absolute -bottom-6 -right-6 bg-[#C5A059] text-white p-8 hidden md:block z-20">
                <p className="font-serif italic text-2xl">"Altın Dokunuş"</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-serif font-bold mb-8 leading-tight">Lyndor'un <span className="text-[#C5A059]">Güzellik Vizyonu</span></h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Lyndor Beauty & Wellness, güzelliği sadece bir yüzey işlemi olarak değil, bir "Onarım ve Sağlık" yolculuğu olarak tanımlar. Bilge Çelik Dönmez liderliğindeki vizyonumuz; her bireyin cildindeki hikayeyi anlamak ve ona en bilimsel, en zarif çözümleri sunmaktır.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Çatalca'daki butik salonumuzda, sadece popüler uygulamaları değil; cildin biyolojik ihtiyacına yanıt veren, uzun vadeli sağlık vaat eden protokolleri uyguluyoruz. Bizim için "güzellik", cildin en sağlıklı ve canlı formuna kavuştuğu andır.
              </p>
            </div>
          </div>

          {/* Detailed Categories Philosophy */}
          <div className="mb-32">
            <div className="text-center mb-20">
              <h2 className="text-3xl font-serif font-bold mb-4">Uzmanlık Alanlarımız</h2>
              <p className="text-gray-400 uppercase tracking-widest text-[10px] font-bold">Hangi Kategoride, Nasıl Bir Fark Yaratıyoruz?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Cilt Protokolleri */}
              <div className="group border-b border-gray-100 pb-10">
                <h3 className="text-[#C5A059] font-serif text-xl mb-4 group-hover:italic transition-all">Cilt Protokolleri</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Leke ve akne onarımında yüzeysel çözümler yerine, cildin alt katmanlarını hedef alan özel protokoller uyguluyoruz. İspanya Işıltısı gibi dünya standartlarındaki uygulamalarla cildi içeriden yapılandırıyoruz.
                </p>
              </div>

              {/* Anti-Aging */}
              <div className="group border-b border-gray-100 pb-10">
                <h3 className="text-[#C5A059] font-serif text-xl mb-4 group-hover:italic transition-all">Anti-Aging</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Zamana meydan okumak, doğal ifadeyi bozmadan cildi sıkılaştırmaktır. Kolajen üretimini tetikleyen teknolojilerimizle cildin gençlik enerjisini geri kazandırıyoruz.
                </p>
              </div>

              {/* Kalıcı Makyaj */}
              <div className="group border-b border-gray-100 pb-10">
                <h3 className="text-[#C5A059] font-serif text-xl mb-4 group-hover:italic transition-all">Kalıcı Makyaj</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Microblading, pudralama ve dudak pigmentasyonunda vizyonumuz "doğallık"tır. Yüz simetrinize en uygun, sanki hep oradaymış gibi duran zarif tasarımlar yapıyoruz.
                </p>
              </div>

              {/* Kaş & Kirpik */}
              <div className="group border-b border-gray-100 pb-10">
                <h3 className="text-[#C5A059] font-serif text-xl mb-4 group-hover:italic transition-all">Kaş & Kirpik</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Bakışları çerçevelemek sanattır. Lifting ve laminasyon uygulamalarımızla kaş ve kirpiklerinizi yıpratmadan, onlara form ve hacim kazandırıyoruz.
                </p>
              </div>

              {/* Bölgesel İncelme */}
              <div className="group border-b border-gray-100 pb-10">
                <h3 className="text-[#C5A059] font-serif text-xl mb-4 group-hover:italic transition-all">Bölgesel İncelme</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  "Heykel Traş" teknolojisi ile vücudunuzu yeniden şekillendiriyoruz. Yağ hücrelerine müdahale ederken cildin elastikiyetini de koruyan bütünsel bir yaklaşım sunuyoruz.
                </p>
              </div>

              {/* Lazer Epilasyon & Saç */}
              <div className="group border-b border-gray-100 pb-10">
                <h3 className="text-[#C5A059] font-serif text-xl mb-4 group-hover:italic transition-all">Epilasyon & Saç Bakımı</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Buz başlıklı konforlu epilasyon ve saç dökülmesine karşı yoğun vitamin terapilerimizle, kişisel bakımınızı en yüksek hijyen ve performans standartlarında tamamlıyoruz.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Quote */}
          <div className="bg-[#f9f8f6] p-16 md:p-24 text-center rounded-sm">
            <span className="text-[#C5A059] text-5xl font-serif mb-8 block">“</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 italic leading-snug">
              Bizim için her misafir, <br /> özel bir sanat eseridir.
            </h2>
            <div className="w-16 h-[1px] bg-gray-300 mx-auto mb-10"></div>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed italic">
              Lyndor dünyasında sizi sadece bir müşteri olarak değil, bir güzellik yolculuğunun ortağı olarak görüyoruz. Bilimsel temelli Güzellik hizmetinin Çatalca'daki tek adresiyiz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;