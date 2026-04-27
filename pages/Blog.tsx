import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  useEffect(() => {
    document.title = "Güzellik Rehberi | LYNDOR Blog";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Cilt bakımı, güzellik rutinleri ve uzman tavsiyeleri içeren güncel makalelerimiz.");
    }
  }, []);

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-[#1a1a1a] text-white py-24 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 tracking-tight">Güzellik Rehberi</h1>
          <div className="w-20 h-[1px] bg-[#C5A059] mx-auto mb-6"></div>
          <p className="text-[#C5A059] uppercase tracking-[0.4em] text-xs font-bold">Cildiniz İçin Bilimsel Tavsiyeler</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="group flex flex-col bg-white border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 rounded-sm">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#C5A059] text-white px-3 py-1 text-[9px] uppercase tracking-widest font-bold">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-3 font-bold">{post.date}</p>
                <h2 className="text-2xl font-serif font-bold mb-4 group-hover:text-[#C5A059] transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.3em] text-[#C5A059] border-b border-transparent hover:border-[#C5A059] transition-all w-fit pb-1"
                >
                  OKUMAYA DEVAM ET <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;