import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartModal from './CartModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getItemCount } = useCart();

  const itemCount = getItemCount();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Shop', href: '#shop' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-6 h-8 bg-white transform rotate-12 origin-bottom"></div>
                    <div className="absolute top-0 left-0 w-6 h-8 bg-white transform -rotate-12 origin-bottom"></div>
                  </div>
                </div>
                <h1 className="text-2xl font-serif text-white font-light tracking-[0.2em]">
                  AURORA
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-gray-200 transition-colors duration-300 text-sm font-light tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-6">
              <button className="text-white hover:text-gray-200 transition-all duration-300 transform hover:scale-110">
                <Search className="h-5 w-5" />
              </button>
              
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative text-white hover:text-gray-200 transition-all duration-300 transform hover:scale-110"
              >
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium animate-pulse">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                className="md:hidden text-white hover:text-gray-200 transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-black bg-opacity-95 backdrop-blur-sm rounded-lg mt-2 py-6 animate-fadeIn">
              <nav className="flex flex-col space-y-4 px-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white hover:text-gray-200 transition-colors duration-300 text-sm font-light tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
