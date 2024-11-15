import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface PersonalizedPlansProps {
  onBack: () => void;
}

export default function PersonalizedPlans({ onBack }: PersonalizedPlansProps) {
  const [formData, setFormData] = useState({
    goals: '',
    lifestyle: '',
    dietaryPreferences: '',
    timeCommitment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-sage-50 p-8">
      <button
        onClick={onBack}
        className="fixed top-8 left-8 text-sage-600 hover:text-sage-700 flex items-center gap-2"
      >
        <ArrowLeft className="h-5 w-5" />
        Back
      </button>

      <div className="max-w-2xl mx-auto pt-20">
        <h1 className="text-3xl font-bold text-sage-900 mb-8 text-center">Personalized Wellness Plan</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">
                What are your primary wellness goals?
              </label>
              <select
                value={formData.goals}
                onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                className="w-full p-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
              >
                <option value="">Select your goal</option>
                <option value="weight">Weight Management</option>
                <option value="stress">Stress Reduction</option>
                <option value="sleep">Better Sleep</option>
                <option value="energy">Increased Energy</option>
                <option value="digestion">Improved Digestion</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">
                Describe your current lifestyle
              </label>
              <textarea
                value={formData.lifestyle}
                onChange={(e) => setFormData({ ...formData, lifestyle: e.target.value })}
                className="w-full p-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                rows={4}
                placeholder="Daily routine, work schedule, exercise habits..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">
                Any dietary preferences or restrictions?
              </label>
              <textarea
                value={formData.dietaryPreferences}
                onChange={(e) => setFormData({ ...formData, dietaryPreferences: e.target.value })}
                className="w-full p-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                rows={4}
                placeholder="Vegetarian, vegan, allergies, etc..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">
                How much time can you commit daily to your wellness routine?
              </label>
              <select
                value={formData.timeCommitment}
                onChange={(e) => setFormData({ ...formData, timeCommitment: e.target.value })}
                className="w-full p-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
              >
                <option value="">Select time commitment</option>
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
                <option value="60">1 hour</option>
                <option value="90">1.5 hours</option>
                <option value="120">2+ hours</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors"
            >
              Create My Plan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}