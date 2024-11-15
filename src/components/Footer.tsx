import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sage-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8" />
              <span className="ml-2 text-xl font-semibold">AyurFit</span>
            </div>
            <p className="text-sage-300">
              Your journey to holistic wellness starts here
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-sage-300">
              
              <li>
                <a href="/HealthAnalysis" className="hover:underline">
                  Health Analysis
                </a>
              </li>
              <li>
                <a href="/PersonalizedPlans" className="hover:underline">
                  Personalized Plans
                </a>
              </li>
              <li>
                <a href="/ExpertConsultations" className="hover:underline">
                  Expert Consultations
                </a>
              </li>
              <li>
                <a href="/ProgressTracking" className="hover:underline">
                  Progress Tracking
                </a>
              </li>
              
              
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sage-300">
              <li>Blog</li>
              <li>Dosha Guide</li>
              <li>Recipes</li>
              <li>Research</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sage-300">
              <li>Support</li>
              <li>Partnerships</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-sage-700 text-center text-sage-300">
          <p>© {new Date().getFullYear()} AyurFit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}