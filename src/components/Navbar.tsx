import React from 'react';
import { Leaf } from 'lucide-react';

interface NavbarProps {
  onGetStarted: () => void;
}

export default function Navbar({ onGetStarted }: NavbarProps) {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-sage-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-sage-600" />
            <span className="ml-2 text-xl font-semibold text-sage-900">AyurFit</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sage-600 hover:text-sage-900">Features</a>
            <a href="#doshas" className="text-sage-600 hover:text-sage-900">Doshas</a>
            <a href="#about" className="text-sage-600 hover:text-sage-900">About</a>
            <button 
              onClick={onGetStarted}
              className="bg-sage-600 text-white px-4 py-2 rounded-lg hover:bg-sage-700 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}