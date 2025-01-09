import React, { useState } from 'react';
import { ArrowLeft, Search, MapPin, Coffee, Salad, Plus, Minus, ShoppingCart } from 'lucide-react';
import Checkout from './Checkout';

interface FoodOrderingProps {
  onBack: () => void;
}

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'drink' | 'salad';
  image: string;
}

interface CartItem {
  itemId: string;
  quantity: number;
}

const menuItems: MenuItem[] = [
  {
    id: 'drink1',
    name: 'Green Detox Smoothie',
    description: 'Spinach, apple, cucumber, ginger, and lemon',
    price: 7.99,
    category: 'drink',
    image: 'https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?auto=format&fit=crop&q=80'
  },
  {
    id: 'drink2',
    name: 'Berry Boost Juice',
    description: 'Mixed berries, banana, and almond milk',
    price: 6.99,
    category: 'drink',
    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&q=80'
  },
  {
    id: 'salad1',
    name: 'Mediterranean Quinoa Bowl',
    description: 'Quinoa, chickpeas, cucumber, tomatoes, and feta',
    price: 12.99,
    category: 'salad',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80'
  },
  {
    id: 'salad2',
    name: 'Asian Sesame Salad',
    description: 'Mixed greens, mandarin oranges, almonds, and sesame dressing',
    price: 11.99,
    category: 'salad',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80'
  }
];

export default function FoodOrdering({ onBack }: FoodOrderingProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'drink' | 'salad'>('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (itemId: string) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.itemId === itemId);
      if (existingItem) {
        return prevCart.map(item =>
          item.itemId === itemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { itemId, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.itemId === itemId);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map(item =>
          item.itemId === itemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prevCart.filter(item => item.itemId !== itemId);
    });
  };

  const getCartTotal = () => {
    return cart.reduce((total, cartItem) => {
      const menuItem = menuItems.find(item => item.id === cartItem.itemId);
      return total + (menuItem?.price || 0) * cartItem.quantity;
    }, 0);
  };

  const getCartItemsForCheckout = () => {
    return cart.map(cartItem => {
      const item = menuItems.find(i => i.id === cartItem.itemId);
      return {
        itemId: cartItem.itemId,
        quantity: cartItem.quantity,
        name: item?.name || '',
        price: item?.price || 0
      };
    });
  };

  if (showCheckout) {
    return (
      <Checkout
        onBack={() => setShowCheckout(false)}
        cartItems={getCartItemsForCheckout()}
        total={getCartTotal()}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-sage-50 p-8">
      <button
        onClick={onBack}
        className="fixed top-8 left-8 text-sage-600 hover:text-sage-700 flex items-center gap-2"
      >
        <ArrowLeft className="h-5 w-5" />
        Back
      </button>

      <div className="max-w-6xl mx-auto pt-20">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-sage-900">Order Food & Drinks</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sage-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as 'all' | 'drink' | 'salad')}
              className="p-2 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
            >
              <option value="all">All Items</option>
              <option value="drink">Drinks</option>
              <option value="salad">Salads</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-sage-900 mb-2">{item.name}</h3>
                <p className="text-sage-600 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-sage-900">${item.price.toFixed(2)}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-sage-600 hover:bg-sage-100 rounded-lg"
                    >
                      <Minus className="h-5 w-5" />
                    </button>
                    <span className="text-sage-900 font-medium">
                      {cart.find(cartItem => cartItem.itemId === item.id)?.quantity || 0}
                    </span>
                    <button
                      onClick={() => addToCart(item.id)}
                      className="p-2 text-sage-600 hover:bg-sage-100 rounded-lg"
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="fixed bottom-8 right-8 left-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="h-6 w-6 text-sage-600" />
                  <span className="text-lg font-semibold text-sage-900">Your Order</span>
                </div>
                <span className="text-xl font-bold text-sage-900">
                  Total: ${getCartTotal().toFixed(2)}
                </span>
              </div>
              <button
                onClick={() => setShowCheckout(true)}
                className="w-full py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}