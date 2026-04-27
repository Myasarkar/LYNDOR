import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const BlogPost: React.FC = () => {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === id);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | LYNDOR Güzellik Rehberi`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.excerpt);
      }
    }
  }, [post]);

  if (!post) return <Navigate to="/blog" />;

  return (
    <div className="pb-24">
      {/* Header with Image */}
      <div className="relative h-[60vh] min-h-[400px] mb-16">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="text-[#C5A059] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
              {post.category} — {post.date}
            </span>
            <h1 className="text-4xl md:text-6xl text-white font-serif font-bold leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Content */}
          <div className="prose prose-lg prose-stone max-w-none">
            <p className="text-xl text-gray-800 font-serif italic mb-10 leading-relaxed border-l-4 border-[#C5A059] pl-6">
              {post.excerpt}
            </p>
            
            <div className="text-gray-600 leading-loose space-y-6 whitespace-pre-line text-lg">
              {post.content}
            </div>
          </div>

          {/* Navigation Back */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex justify-center md:justify-start">
            <Link 
              to="/blog" 
              className="flex items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#C5A059] transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              TÜM MAKALELERE DÖN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;