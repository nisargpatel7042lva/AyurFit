import { Wind, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import DoshaQuiz from './DoshaQuiz'; // Assuming DoshaQuiz is in the same folder

const doshas = [
  {
    icon: Wind,
    name: "Vata",
    description: "Air & Space energy that governs movement and change",
    traits: ["Creative", "Quick-minded", "Flexible"]
  },
  {
    icon: Sun,
    name: "Pitta",
    description: "Fire & Water energy that governs transformation",
    traits: ["Focused", "Ambitious", "Intelligent"]
  },
  {
    icon: Moon,
    name: "Kapha",
    description: "Earth & Water energy that governs structure and fluidity",
    traits: ["Calm", "Strong", "Loyal"]
  }
];

export default function DoshaSection() {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <section id="doshas" className="py-20 bg-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-sage-900 mb-4">
            Discover Your Dosha
          </h2>
          <p className="text-sage-600 max-w-2xl mx-auto">
            Understanding your unique mind-body constitution is the first step towards optimal health
          </p>
        </div>
        
        {/* Dosha Overview Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {doshas.map((dosha, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <dosha.icon className="h-12 w-12 text-sage-600 mb-4" />
              <h3 className="text-xl font-semibold text-sage-900 mb-2">{dosha.name}</h3>
              <p className="text-sage-600 mb-4">{dosha.description}</p>
              <div className="flex flex-wrap gap-2">
                {dosha.traits.map((trait, i) => (
                  <span key={i} className="px-3 py-1 bg-sage-100 text-sage-600 rounded-full text-sm">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Button to Toggle Dosha Quiz */}
        <div className="text-center mt-12">
          <button 
            onClick={() => setShowQuiz(!showQuiz)} 
            className="inline-block px-8 py-3 bg-sage-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-sage-700 transition"
          >
            Find Your Dosha
          </button>
        </div>
        
        {/* Dosha Quiz Dropdown */}
        {showQuiz && (
          <div className="mt-8">
            <DoshaQuiz />
          </div>
        )}
      </div>
    </section>
  );
}
