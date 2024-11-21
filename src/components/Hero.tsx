import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Leaf } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
  onLearnMore: () => void;
}

const images = [
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1920'
];

export default function Hero({ onGetStarted, onLearnMore }: HeroProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={img}
            alt="Ayurvedic wellness"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <Leaf className="h-16 w-16 mx-auto text-sage-400 mb-8" />
          <h1 className="text-4xl sm:text-6xl font-bold text-sage-400 mb-6">
            Your Personal Ayurvedic
            <span className="text-lime-700"> Wellness</span> Journey
          </h1>
          <p className="text-xl text-lime-200 max-w-2xl mx-auto mb-8">
            Discover ancient wisdom meets modern technology. Personalized Ayurvedic guidance
            for your unique body type, lifestyle, and wellness goals.
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={onGetStarted}
              className="border-2 bg-sage-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-sage-700 transition-colors"
            >
              Start Your Journey
            </button>
            <button
              onClick={onLearnMore}
              className="border-2 bg-sage-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-sage-700 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
