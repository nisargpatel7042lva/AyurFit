import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface WellnessRecommendationsProps {
  onBack: () => void;
}

export default function WellnessRecommendations({ onBack }: WellnessRecommendationsProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-sage-50 p-8">
      <button
        onClick={onBack}
        className="fixed top-8 left-8 text-sage-600 hover:text-sage-700 flex items-center gap-2"
      >
        <ArrowLeft className="h-5 w-5" />
        Back
      </button>

      <div className="max-w-4xl mx-auto pt-20">
        <h1 className="text-3xl font-bold text-sage-900 mb-12 text-center">Ayurvedic Wellness Recommendations</h1>

        <div className="space-y-12">
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-sage-900 mb-6">Diet Recommendations</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-sage-800 mb-3">Seasonal Diet</h3>
                <p className="text-sage-700 mb-4">
                  Align your diet with the current season to maintain balance:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sage-600">
                  <li>Fresh, seasonal fruits and vegetables</li>
                  <li>Warm, cooked meals during cold weather</li>
                  <li>Cooling foods during summer</li>
                  <li>Herbs and spices according to your dosha</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sage-800 mb-3">Mindful Eating Practices</h3>
                <ul className="list-disc list-inside space-y-2 text-sage-600">
                  <li>Eat in a calm environment</li>
                  <li>Chew food thoroughly</li>
                  <li>Avoid eating when stressed</li>
                  <li>Include all six tastes in meals</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-sage-900 mb-6">Exercise Recommendations</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-sage-800 mb-3">Yoga Asanas</h3>
                <p className="text-sage-700 mb-4">
                  Practice these gentle yet effective poses:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sage-600">
                  <li>Surya Namaskar (Sun Salutation)</li>
                  <li>Pranayama breathing exercises</li>
                  <li>Meditation and mindfulness</li>
                  <li>Gentle stretching routines</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sage-800 mb-3">Physical Activities</h3>
                <ul className="list-disc list-inside space-y-2 text-sage-600">
                  <li>Walking in nature</li>
                  <li>Swimming</li>
                  <li>Tai Chi</li>
                  <li>Light jogging</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-sage-900 mb-6">Lifestyle Recommendations</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-sage-800 mb-3">Daily Routine (Dinacharya)</h3>
                <ul className="list-disc list-inside space-y-2 text-sage-600">
                  <li>Wake up before sunrise</li>
                  <li>Practice oil pulling</li>
                  <li>Self-massage with warm oil</li>
                  <li>Regular meal times</li>
                  <li>Early bedtime routine</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sage-800 mb-3">Stress Management</h3>
                <ul className="list-disc list-inside space-y-2 text-sage-600">
                  <li>Regular meditation practice</li>
                  <li>Deep breathing exercises</li>
                  <li>Nature walks</li>
                  <li>Digital detox periods</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}