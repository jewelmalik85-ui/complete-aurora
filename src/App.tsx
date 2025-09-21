import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PopularProducts from './components/PopularProducts';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <PopularProducts />
      </div>
    </CartProvider>
  );
}

export default App;
