import { ArrowLeft, Leaf } from 'lucide-react';

interface LearnMoreProps {
  onBack: () => void;
}

export default function LearnMore({ onBack }: LearnMoreProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-sage-50">
      <button
        onClick={onBack}
        className="fixed top-8 left-8 text-sage-600 hover:text-sage-700 flex items-center gap-2"
      >
        <ArrowLeft className="h-5 w-5" />
        Back to Home
      </button>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <Leaf className="h-16 w-16 mx-auto text-sage-600 mb-6" />
          <h1 className="text-4xl font-bold text-sage-900 mb-4">The Science of Life</h1>
          <p className="text-xl text-sage-600">Discover the ancient wisdom of Ayurveda</p>
        </div>

        <div className="space-y-12">
          <section className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-sage-900 mb-4">What is Ayurveda?</h2>
            <p className="text-sage-700 leading-relaxed mb-6">
              Ayurveda, meaning "The Science of Life," is one of the world's oldest holistic healing systems. 
              Developed more than 5,000 years ago in India, it's based on the belief that health and wellness 
              depend on a delicate balance between the mind, body, and spirit.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80" 
              alt="Ayurvedic herbs and spices" 
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
          </section>

          <section className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-sage-900 mb-4">Core Principles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-sage-800 mb-2">Natural Healing</h3>
                <p className="text-sage-700">
                  Ayurveda emphasizes natural remedies and lifestyle modifications to promote healing 
                  and maintain health, using herbs, diet, yoga, and meditation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sage-800 mb-2">Individual Focus</h3>
                <p className="text-sage-700">
                  Each person has a unique constitution (Prakriti) that determines their physical and 
                  psychological characteristics and their susceptibility to different types of health problems.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-sage-900 mb-4">Key Benefits</h2>
            <div className="grid gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sage-600 text-xl font-semibold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sage-800 mb-2">Holistic Wellness</h3>
                  <p className="text-sage-700">
                    Addresses physical, mental, and spiritual aspects of health for complete well-being.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sage-600 text-xl font-semibold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sage-800 mb-2">Preventive Approach</h3>
                  <p className="text-sage-700">
                    Focuses on preventing diseases before they manifest through lifestyle and dietary guidelines.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sage-600 text-xl font-semibold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sage-800 mb-2">Natural Treatment</h3>
                  <p className="text-sage-700">
                    Uses natural herbs and therapies with minimal side effects for treating various conditions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-sage-900 mb-4">Modern Applications</h2>
            <p className="text-sage-700 leading-relaxed mb-6">
              Today, Ayurvedic principles are being integrated with modern healthcare practices, 
              offering complementary approaches to wellness. Scientific research continues to validate 
              many traditional Ayurvedic practices, particularly in areas of:
            </p>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="bg-sage-50 p-4 rounded-lg">
                <span className="font-semibold text-sage-900">Stress Management</span>
                <p className="text-sage-700 text-sm mt-1">
                  Through meditation, yoga, and breathing exercises
                </p>
              </li>
              <li className="bg-sage-50 p-4 rounded-lg">
                <span className="font-semibold text-sage-900">Digestive Health</span>
                <p className="text-sage-700 text-sm mt-1">
                  Using dietary principles and herbal supplements
                </p>
              </li>
              <li className="bg-sage-50 p-4 rounded-lg">
                <span className="font-semibold text-sage-900">Mental Wellness</span>
                <p className="text-sage-700 text-sm mt-1">
                  Through holistic lifestyle practices
                </p>
              </li>
              <li className="bg-sage-50 p-4 rounded-lg">
                <span className="font-semibold text-sage-900">Chronic Conditions</span>
                <p className="text-sage-700 text-sm mt-1">
                  Supporting conventional treatments naturally
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}