
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';

const Collection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Hepsi');
  const categories = ['Hepsi', 'Koltuk', 'Yemek Odası', 'Yatak Odası', 'Aksesuar'];

  const filteredProducts = activeCategory === 'Hepsi' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-[#1a1a1a] text-white py-20 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold mb-4">Koleksiyonumuz</h1>
          <nav className="text-sm uppercase tracking-[0.3em] text-[#C5A059]">
            <span className="text-gray-400">Anasayfa</span> / <span>Koleksiyon</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 border-b border-gray-100 pb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm uppercase tracking-widest font-bold transition-all ${
                activeCategory === cat ? 'text-[#C5A059] border-b-2 border-[#C5A059] pb-1' : 'text-gray-400 hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 italic">Bu kategoride henüz ürün bulunmamaktadır.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;
