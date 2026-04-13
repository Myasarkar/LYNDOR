
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button className="bg-white text-black px-6 py-2 uppercase text-xs tracking-widest font-bold hover:bg-[#C5A059] hover:text-white transition-colors">
            Detaylı İncele
          </button>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-[#C5A059] text-white px-3 py-1 text-[10px] uppercase tracking-tighter font-bold">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-[#C5A059] transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
