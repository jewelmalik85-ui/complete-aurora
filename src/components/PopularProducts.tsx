import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

const PopularProducts = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Elegant Silk Blazer",
      price: 329,
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop",
      category: "Blazers",
      description: "Luxurious silk blazer perfect for professional and evening wear"
    },
    {
      id: 2,
      name: "Classic Black Dress",
      price: 199,
      image: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop",
      category: "Dresses",
      description: "Timeless black dress that transitions from day to night effortlessly"
    },
    {
      id: 3,
      name: "Cashmere Sweater",
      price: 189,
      image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop",
      category: "Knitwear",
      description: "Ultra-soft cashmere sweater in a relaxed fit"
    },
    {
      id: 4,
      name: "Summer Linen Top",
      price: 139,
      image: "https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop",
      category: "Tops",
      description: "Breathable linen top perfect for warm weather"
    },
    {
      id: 5,
      name: "Professional Suit Set",
      price: 489,
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop",
      category: "Suits",
      description: "Complete professional suit set with tailored fit"
    },
    {
      id: 6,
      name: "Bohemian Maxi Dress",
      price: 229,
      image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop",
      category: "Dresses",
      description: "Flowing maxi dress with intricate bohemian patterns"
    },
    {
      id: 7,
      name: "Designer Leather Jacket",
      price: 399,
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop",
      category: "Jackets",
      description: "Premium leather jacket with contemporary design"
    },
    {
      id: 8,
      name: "Evening Silk Gown",
      price: 649,
      image: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop",
      category: "Evening Wear",
      description: "Elegant silk gown perfect for special occasions"
    }
  ];

  return (
    <section id="shop" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-4 tracking-wide">
            Most Popular
          </h2>
          <div className="w-24 h-px bg-gray-400 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our most beloved pieces, carefully curated for the modern woman who values both style and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
