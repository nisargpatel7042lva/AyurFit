import { Leaf } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
  onLearnMore: () => void;
}

export default function Hero({ onGetStarted, onLearnMore }: HeroProps) {
  return (
    <div className="pt-24 pb-16 px-4 sm:pt-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <Leaf className="h-16 w-16 mx-auto text-sage-600 mb-8" />
          <h1 className="text-4xl sm:text-6xl font-bold text-sage-900 mb-6">
            Your Personal Ayurvedic
            <span className="text-sage-600"> Wellness</span> Journey
          </h1>
          <p className="text-xl text-sage-600 max-w-2xl mx-auto mb-8">
            Discover ancient wisdom meets modern technology. Personalized Ayurvedic guidance 
            for your unique body type, lifestyle, and wellness goals.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={onGetStarted}
              className="bg-sage-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-sage-700 transition-colors"
            >
              Start Your Journey
            </button>
            <button 
              onClick={onLearnMore}
              className="border-2 border-sage-600 text-sage-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-sage-50 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="mt-16 relative">
          <img
            src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80"
            alt="Ayurvedic ingredients and herbs"
            className="rounded-xl shadow-2xl mx-auto max-w-4xl w-full object-cover h-[400px]"
          />
        </div>
      </div>
    </div>
  );
}