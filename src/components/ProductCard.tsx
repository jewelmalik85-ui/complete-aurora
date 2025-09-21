import React, { useState } from 'react';
import { ShoppingBag, Heart, Eye } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div 
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        
        {/* Overlay buttons */}
        <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center space-x-4 transition-all duration-500 ${
          isHovered ? 'opacity-100 backdrop-blur-sm' : 'opacity-0'
        }`}>
          <button
            onClick={handleAddToCart}
            className={`p-4 rounded-full transition-all duration-300 transform hover:scale-110 ${
              isAdded 
                ? 'bg-green-500 text-white' 
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            <ShoppingBag className="h-5 w-5" />
          </button>
          
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-4 rounded-full transition-all duration-300 transform hover:scale-110 ${
              isLiked 
                ? 'bg-red-500 text-white' 
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
          </button>

          <button className="bg-white text-black p-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110">
            <Eye className="h-5 w-5" />
          </button>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-black bg-opacity-80 text-white px-4 py-2 text-xs font-light tracking-wider rounded-full backdrop-blur-sm">
            {product.category}
          </span>
        </div>

        {/* Quick add button - visible on hover */}
        <div className={`absolute bottom-4 left-4 right-4 transition-all duration-500 transform ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <button
            onClick={handleAddToCart}
            className={`w-full py-3 text-sm font-light tracking-wider transition-all duration-300 ${
              isAdded 
                ? 'bg-green-500 text-white' 
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            {isAdded ? 'ADDED TO CART' : 'QUICK ADD'}
          </button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-light text-gray-900 mb-2 group-hover:text-gray-700 transition-colors tracking-wide">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-3 leading-relaxed">
          {product.description}
        </p>
        <p className="text-2xl font-light text-gray-900 tracking-wide">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
