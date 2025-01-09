import { Leaf, Coffee, LayoutList, Globe, Info } from 'lucide-react';

interface NavbarProps {
  onGetStarted: () => void;
  onOrderFood?: () => void;
}

export default function Navbar({ onGetStarted, onOrderFood }: NavbarProps) {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-sage-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-sage-600" />
            <div className="ml-2">
              <span className="text-xl font-semibold text-sage-900">AyurFit</span>
              <span className="block text-xs text-sage-600">Your digital path to holistic wellness</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="flex items-center gap-2 text-sage-600 hover:text-sage-900"
            >
              <LayoutList className="h-5 w-5" />
              Features
            </a>
            <a
              href="#doshas"
              className="flex items-center gap-2 text-sage-600 hover:text-sage-900"
            >
              <Globe className="h-5 w-5" />
              Doshas
            </a>
            <a
              href="#about"
              className="flex items-center gap-2 text-sage-600 hover:text-sage-900"
            >
              <Info className="h-5 w-5" />
              About
            </a>
            <button
              onClick={onOrderFood}
              className="flex items-center gap-2 text-sage-600 hover:text-sage-900"
            >
              <Coffee className="h-5 w-5" />
              Order Food
            </button>
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
