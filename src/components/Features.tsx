import { Brain, Heart, Moon, Activity } from 'lucide-react';

interface FeaturesProps {
  onFeatureSelect: (feature: string) => void;
}

const features = [
  {
    icon: Brain,
    title: "Health Analysis",
    description: "Get a comprehensive analysis of your health based on Ayurvedic principles.",
    id: "health-analysis"
  },
  {
    icon: Heart,
    title: "Personalized Plans",
    description: "Receive customized wellness plans tailored to your dosha and health goals.",
    id: "personalized-plans"
  },
  {
    icon: Moon,
    title: "Expert Consultation",
    description: "Connect with certified Ayurvedic practitioners for personalized guidance.",
    id: "expert-consultation"
  },
  {
    icon: Activity,
    title: "Progress Tracking",
    description: "Monitor your wellness journey with detailed progress metrics and insights.",
    id: "progress-tracking"
  }
];

export default function Features({ onFeatureSelect }: FeaturesProps) {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-sage-900 mb-4">
            Transform Your Health Journey
          </h2>
          <p className="text-sage-600 max-w-2xl mx-auto">
            Experience the perfect blend of ancient Ayurvedic wisdom and cutting-edge technology
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => onFeatureSelect(feature.id)}
              className="p-6 rounded-xl bg-sage-50 hover:bg-sage-100 transition-colors text-left group"
            >
              <feature.icon className="h-12 w-12 text-sage-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-sage-900 mb-2">{feature.title}</h3>
              <p className="text-sage-600">{feature.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}