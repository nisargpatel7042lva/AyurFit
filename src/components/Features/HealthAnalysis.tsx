import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import HealthAnalysisResult from './results/HealthAnalysisResult';

interface HealthAnalysisProps {
  onBack: () => void;
}

export default function HealthAnalysis({ onBack }: HealthAnalysisProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    physicalSymptoms: '',
    mentalState: '',
    sleepPattern: '',
    digestion: '',
    energy: ''
  });
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  if (showResults) {
    return <HealthAnalysisResult formData={formData} onBack={() => setShowResults(false)} />;
  }

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
        <h1 className="text-3xl font-bold text-sage-900 mb-8 text-center">Health Analysis</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[1, 2, 3].map((stepNumber) => (
                <div
                  key={stepNumber}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= stepNumber ? 'bg-sage-600 text-white' : 'bg-sage-100 text-sage-400'
                  }`}
                >
                  {stepNumber}
                </div>
              ))}
            </div>
            <div className="h-2 bg-sage-100 rounded-full">
              <div
                className="h-full bg-sage-600 rounded-full transition-all duration-300"
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-2">
                    What physical symptoms are you experiencing?
                  </label>
                  <textarea
                    value={formData.physicalSymptoms}
                    onChange={(e) => setFormData({ ...formData, physicalSymptoms: e.target.value })}
                    className="w-full p-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                    rows={4}
                    required
                    placeholder="Describe any physical discomfort, pain, or symptoms..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-2">
                    How would you describe your current mental state?
                  </label>
                  <textarea
                    value={formData.mentalState}
                    onChange={(e) => setFormData({ ...formData, mentalState: e.target.value })}
                    className="w-full p-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                    rows={4}
                    required
                    placeholder="Describe your stress levels, mood, and mental clarity..."
                  />
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-2">
                    Describe your sleep pattern
                  </label>
                  <textarea
                    value={formData.sleepPattern}
                    onChange={(e) => setFormData({ ...formData, sleepPattern: e.target.value })}
                    className="w-full p-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                    rows={4}
                    required
                    placeholder="Hours of sleep, quality, any disturbances..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-2">
                    How is your digestion?
                  </label>
                  <textarea
                    value={formData.digestion}
                    onChange={(e) => setFormData({ ...formData, digestion: e.target.value })}
                    className="w-full p-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                    rows={4}
                    required
                    placeholder="Appetite, digestion issues, eating habits..."
                  />
                </div>
              </>
            )}

            {step === 3 && (
              <div>
                <label className="block text-sm font-medium text-sage-700 mb-2">
                  Describe your energy levels throughout the day
                </label>
                <textarea
                  value={formData.energy}
                  onChange={(e) => setFormData({ ...formData, energy: e.target.value })}
                  className="w-full p-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                  rows={4}
                  required
                  placeholder="Energy patterns, fatigue, peak performance times..."
                />
              </div>
            )}

            <div className="flex justify-between pt-4">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-2 text-sage-600 hover:text-sage-700"
                >
                  Previous
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="px-6 py-2 bg-sage-600 text-white rounded-lg hover:bg-sage-700"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-2 bg-sage-600 text-white rounded-lg hover:bg-sage-700"
                >
                  Submit Analysis
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}