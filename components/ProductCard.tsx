import React, { useState } from 'react';
import { Product } from '../types';
import { Star, MessageSquarePlus, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleFeedback = () => {
    setFeedbackSent(true);
    setTimeout(() => setFeedbackSent(false), 3000);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col">
      <div className="relative h-64 overflow-hidden bg-gray-100 group">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-semibold text-gray-700 uppercase tracking-wider">
          {product.category}
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-800 line-clamp-1">{product.name}</h3>
          <div className="flex items-center gap-1 text-yellow-400 text-sm">
            <Star size={14} fill="currentColor" />
            <span className="text-gray-500">4.8</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
            Agregar
          </button>
        </div>

        {/* ITIL 4 PRACTICE: Continual Improvement */}
        {/* Justification: Active collection of ideas for future service iterations. */}
        <div className="mt-4 flex justify-center">
          <button 
            onClick={handleFeedback}
            disabled={feedbackSent}
            className={`text-xs flex items-center gap-1 transition-colors ${
              feedbackSent ? 'text-green-600 cursor-default' : 'text-gray-400 hover:text-green-600 underline decoration-dotted'
            }`}
          >
            {feedbackSent ? (
              <>
                <Check size={12} /> Sugerencia enviada a CSI Register
              </>
            ) : (
              <>
                <MessageSquarePlus size={12} /> ¿Sugerencias de mejora?
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};