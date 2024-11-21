import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-sage-50">
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <Link to="/" className="text-2xl font-bold text-sage-600">AyurFit</Link>
            </div>
            
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-sage-600" />
              ) : (
                <Menu className="w-6 h-6 text-sage-600" />
              )}
            </button>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-sage-600 transition-colors">Home</Link>
              <Link to="/sessions" className="text-gray-700 hover:text-sage-600 transition-colors">Sessions</Link>
              <a href="#" className="text-gray-700 hover:text-sage-600 transition-colors">Services</a>
              <a href="#" className="text-gray-700 hover:text-sage-600 transition-colors">About</a>
              <button className="btn btn-primary">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64' : 'max-h-0'} overflow-hidden bg-white`}>
          <div className="px-4 py-2 space-y-4">
            <Link to="/" className="block text-gray-700 hover:text-sage-600 py-2">Home</Link>
            <Link to="/sessions" className="block text-gray-700 hover:text-sage-600 py-2">Sessions</Link>
            <a href="#" className="block text-gray-700 hover:text-sage-600 py-2">Services</a>
            <a href="#" className="block text-gray-700 hover:text-sage-600 py-2">About</a>
            <button className="btn btn-primary w-full">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <Outlet />
      </main>

      <footer className="bg-sage-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">AyurFit</h3>
              <p className="text-sage-200">Your health companion in the digital world</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sage-100">Quick Links</h4>
              <ul className="space-y-3 text-sage-300">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/sessions" className="hover:text-white transition-colors">Sessions</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sage-100">Services</h4>
              <ul className="space-y-3 text-sage-300">
                <li><a href="#" className="hover:text-white transition-colors">Consultations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wellness Plans</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Meditation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sage-100">Connect</h4>
              <ul className="space-y-3 text-sage-300">
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-sage-800 mt-12 pt-8 text-center text-sage-400">
            <p>&copy; {new Date().getFullYear()} AyurFit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}