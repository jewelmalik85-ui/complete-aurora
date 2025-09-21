import React from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { items, updateQuantity, removeItem, getTotal, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className={`absolute right-0 top-0 h-full w-full max-w-lg bg-white shadow-2xl transform transition-all duration-500 ease-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <ShoppingBag className="h-6 w-6 text-gray-700" />
              <h2 className="text-xl font-light tracking-wide">Shopping Cart</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-6" />
                <p className="text-gray-500 text-lg font-light mb-2">Your cart is empty</p>
                <p className="text-gray-400 text-sm">Add some beautiful pieces to get started</p>
              </div>
            ) : (
              <div className="space-y-8">
                {items.map((item) => (
                  <div key={item.id} className="flex items-start space-x-4 group">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-24 object-cover rounded-lg"
                      />
                      <button
                        onClick={() => removeItem(item.id)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-red-600 transform hover:scale-110"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-light text-gray-900 text-lg leading-tight mb-1">{item.name}</h3>
                      <p className="text-gray-500 text-sm mb-3">{item.category}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          
                          <span className="px-4 py-2 bg-gray-50 rounded-lg text-sm font-medium min-w-[3rem] text-center">
                            {item.quantity}
                          </span>
                          
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <div className="text-right">
                          <p className="text-lg font-light">${(item.price * item.quantity).toFixed(2)}</p>
                          <p className="text-sm text-gray-400">${item.price} each</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-100 p-6 space-y-4">
              <div className="flex justify-between items-center text-lg">
                <span className="font-light">Total:</span>
                <span className="text-2xl font-light">${getTotal().toFixed(2)}</span>
              </div>
              
              <div className="space-y-3">
                <button className="w-full bg-black text-white py-4 text-sm font-light tracking-wider hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02]">
                  CHECKOUT
                </button>
                
                <button
                  onClick={clearCart}
                  className="w-full border border-gray-300 text-gray-700 py-3 text-sm font-light tracking-wider hover:bg-gray-50 transition-all duration-300"
                >
                  CLEAR CART
                </button>
              </div>
              
              <p className="text-xs text-gray-400 text-center">
                Free shipping on orders over $200
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
