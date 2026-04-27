import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { SERVICES, SOCIAL_LINKS, BLOG_POSTS } from '../constants';

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&q=80&w=1920",
    title: "Işıltınızı Yeniden Keşfedin.",
    subtitle: "Çatalca'da cilt onarımında uzman yaklaşım ve butik hizmet ayrıcalığı ile cildinizin en parlak yansımasını keşfedin.",
    alt: "LYNDOR Güzellik Merkezi Çatalca - Cilt Onarımı ve Bakım"
  },
  {
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=1920",
    title: "Güzelliğinize Altın Bir Dokunuş.",
    subtitle: "Uzman hemşire disiplini ve bilimsel protokollerle cildinizi profesyonel bakımla şımartın.",
    alt: "Uzman Hemşire Bilge Çelik Dönmez - Profesyonel Cilt Protokolleri"
  },
  {
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1920",
    title: "Zamana Meydan Okuyun.",
    subtitle: "Profesyonel anti-aging protokolleri ve yenilikçi teknolojilerle cildinize gençlik iksiri katın.",
    alt: "Anti-aging ve Gençlik İksiri Uygulamaları - LYNDOR Çatalca"
  }
];

const Home: React.FC = () => {
  const featuredServices = SERVICES.slice(0, 3);
  const featuredBlog = BLOG_POSTS.slice(0, 3);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    document.title = "LYNDOR | Çatalca Güzellik & Wellness Merkezi";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Çatalca'da uzman hemşire Bilge Çelik Dönmez rehberliğinde cilt onarımı ve butik güzellik hizmeti.");
    }
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center bg-black overflow-hidden">
        <div 
          className="absolute inset-0 flex transition-transform duration-[1500px] ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {HERO_SLIDES.map((slide, index) => (
            <div key={index} className="relative min-w-full h-full">
              <img 
                src={slide.image} 
                alt={slide.alt}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 mb-6">
              <span className="w-12 h-[1px] bg-[#C5A059]"></span>
              <span className="text-[#C5A059] uppercase tracking-[0.5em] font-bold text-xs">
                Lyndor <br className="md:hidden" /> Beauty & Wellness
              </span>
            </div>
            
            <div key={currentSlide} className="animate-in fade-in slide-in-from-left-8 duration-1000">
              <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-[1.1]">
                {HERO_SLIDES[currentSlide].title.split(' ').map((word, i) => (
                  <span key={i} className={word.includes('Işıltınızı') || word.includes('Dokunuş') || word.includes('Okuyun') ? "text-[#C5A059] italic" : ""}>
                    {word}{' '}
                  </span>
                ))}
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed font-light max-w-xl min-h-[4rem]">
                {HERO_SLIDES[currentSlide].subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/hizmetlerimiz" className="bg-[#C5A059] hover:bg-white hover:text-black text-white px-12 py-5 uppercase tracking-[0.2em] text-xs font-bold transition-all duration-500 shadow-xl text-center">
                HİZMETLERİMİZİ KEŞFEDİN
              </Link>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="border border-white/30 backdrop-blur-sm hover:bg-white hover:text-black text-white px-12 py-5 uppercase tracking-[0.2em] text-xs font-bold transition-all duration-500 flex items-center justify-center">
                INSTAGRAM'DA BİZ
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 right-12 z-20 flex space-x-6 items-end">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group flex flex-col items-center focus:outline-none"
              aria-label={`Slide ${index + 1}`}
            >
              <div className={`h-[2px] transition-all duration-700 ${
                index === currentSlide ? 'w-16 bg-[#C5A059]' : 'w-8 bg-white/20 group-hover:bg-white/50'
              }`} />
            </button>
          ))}
        </div>
      </section>

      {/* Wellness Philosophy */}
      <section className="bg-white py-24 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="hidden">Uzman Hemşire Disipliniyle Cilt Protokolleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div className="px-6 flex flex-col items-center">
              <div className="w-16 h-16 mb-6 flex items-center justify-center text-4xl grayscale hover:grayscale-0 transition-all duration-500 cursor-default">✨</div>
              <h3 className="text-[#C5A059] text-2xl font-serif mb-4 italic">Uzman Yaklaşım</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">Bilimsel veriler ve en yeni teknolojilerle cildinizin ihtiyacı olan bakımı belirliyoruz.</p>
            </div>
            <div className="px-6 flex flex-col items-center border-x border-gray-100">
              <div className="w-16 h-16 mb-6 flex items-center justify-center text-4xl grayscale hover:grayscale-0 transition-all duration-500 cursor-default">🌿</div>
              <h3 className="text-[#C5A059] text-2xl font-serif mb-4 italic">Cilt Onarımı</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">Hasar görmüş cilt dokusunu onaran özel protokollerle kalıcı sağlık ve parlaklık sağlıyoruz.</p>
            </div>
            <div className="px-6 flex flex-col items-center">
              <div className="w-16 h-16 mb-6 flex items-center justify-center text-4xl grayscale hover:grayscale-0 transition-all duration-500 cursor-default">💎</div>
              <h3 className="text-[#C5A059] text-2xl font-serif mb-4 italic">Butik Hizmet</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">Her misafirimiz bizim için özeldir. Size özel ayrılan zamanda kişiselleştirilmiş hizmet sunuyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div className="text-[#C5A059] uppercase tracking-[0.4em] text-[10px] font-bold mb-4">ÖNE ÇIKANLAR</div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">Popüler <span className="text-[#C5A059]">Uygulamalar</span></h2>
              <p className="text-gray-500 max-w-lg font-light italic">
                Çatalca'da cildinizin sağlığı ve gençliği için en çok tercih edilen profesyonel çözümlerimiz.
              </p>
            </div>
            <Link to="/hizmetlerimiz" className="text-xs uppercase tracking-[0.3em] font-bold border-b-2 border-[#C5A059] pb-2 hover:text-[#C5A059] transition-colors">
              TÜM HİZMETLERİ GÖR
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Teaser Section */}
      <section className="py-24 bg-white border-y border-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Merak Ettikleriniz Mi Var?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            Lazer epilasyon kalıcılığı, cilt bakımı seansları ve kalıcı makyaj protokolleri hakkında en çok sorulan soruları yanıtladık.
          </p>
          <Link 
            to="/sss" 
            className="inline-block border border-[#C5A059] text-[#C5A059] px-12 py-5 uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#C5A059] hover:text-white transition-all duration-500"
          >
            S.S.S SAYFASINA GİT
          </Link>
        </div>
      </section>

      {/* Blog Teaser Section */}
      <section className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-4">Güzellik <span className="text-[#C5A059]">Rehberi</span></h2>
              <p className="text-gray-500 max-w-lg font-light italic">Cilt sağlığı üzerine uzman tavsiyeleri ve güncel bilgiler.</p>
            </div>
            <Link to="/blog" className="text-xs uppercase tracking-[0.3em] font-bold border-b-2 border-[#C5A059] pb-2 hover:text-[#C5A059] transition-colors">
              TÜM MAKALELERİ OKU
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBlog.map((post) => (
              <article key={post.id} className="bg-white p-8 border border-gray-100 group hover:shadow-xl transition-all duration-500 rounded-sm">
                <span className="text-[#C5A059] text-[10px] font-bold uppercase tracking-widest mb-4 block">{post.category}</span>
                <h3 className="text-xl font-serif font-bold mb-4 group-hover:text-[#C5A059] transition-colors">{post.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-gray-200 pb-1 hover:border-[#C5A059] transition-colors">Hemen Oku</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness CTA Section */}
      <section className="py-32 relative overflow-hidden bg-[#0f0f0f]">
        <div className="absolute inset-0 opacity-20 transform scale-105 hover:scale-110 transition-transform duration-10000">
          <img src="https://images.unsplash.com/photo-1544161515-4af6b1d46fd0?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover grayscale" alt="LYNDOR Güzellik Merkezi Çatalca Salon İç Görünüm" loading="lazy" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-7xl font-serif mb-8 leading-tight italic tracking-tight">Güzelliğinize Altın Bir <br className="hidden md:block" /> Dokunuş Yapın</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-xl font-light leading-loose">
            Cilt analizi ve size özel bakım protokolü oluşturmak için Çatalca'daki salonumuza davetlisiniz.
          </p>
          <a 
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#8B0000] border border-[#C5A059] text-white px-16 py-6 uppercase tracking-[0.4em] text-xs font-bold hover:bg-white hover:text-black transition-all duration-500 transform hover:scale-105 shadow-[0_0_20px_rgba(139,0,0,0.5)]"
          >
            HEMEN RANDEVU ALIN
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;