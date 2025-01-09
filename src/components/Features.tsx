import { Brain, Heart, Moon, Activity, MessageCircle, Smile } from 'lucide-react';

interface FeaturesProps {
  onFeatureSelect: (feature: string) => void;
}

const features = [
  {
    icon: Brain,
    title: "Health Analysis",
    description: "Get a comprehensive analysis of your health based on Ayurvedic principles.",
    id: "health-analysis",
    buttonText: "Explore Now"
  },
  {
    icon: Heart,
    title: "Personalized Plans",
    description: "Receive customized wellness plans tailored to your dosha and health goals.",
    id: "personalized-plans",
    buttonText: "View Plans"
  },
  {
    icon: Moon,
    title: "Expert Consultation",
    description: "Connect with certified Ayurvedic practitioners for personalized guidance.",
    id: "expert-consultation",
    buttonText: "Consult Now"
  },
  {
    icon: Activity,
    title: "Progress Tracking",
    description: "Monitor your wellness journey with detailed progress metrics and insights.",
    id: "progress-tracking",
    buttonText: "Track Progress"
  },
  {
    icon: MessageCircle,
    title: "AI Ayurvedic Guide",
    description: "Chat with our AI guide for instant Ayurvedic wisdom and natural remedies.",
    id: "ayurvedic-chat",
    buttonText: "Chat Now"
  },
  {
    icon: Smile,
    title: "Mood-Based Remedies",
    description: "Discover personalized Ayurvedic remedies based on your current mood.",
    id: "mood-remedies",
    buttonText: "Discover Remedies"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-6 rounded-xl bg-sage-50 hover:bg-sage-100 transition-colors text-left group"
            >
              <feature.icon className="h-12 w-12 text-sage-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-sage-900 mb-2">{feature.title}</h3>
              <p className="text-sage-600 mb-4">{feature.description}</p>
              <button
                onClick={() => onFeatureSelect(feature.id)}
                className="mt-2 px-4 py-2 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors"
              >
                {feature.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
