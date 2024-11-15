import React, { useState } from 'react';
import { ArrowLeft, TrendingUp } from 'lucide-react';

interface ProgressTrackingProps {
  onBack: () => void;
}

export default function ProgressTracking({ onBack }: ProgressTrackingProps) {
  const [selectedMetric, setSelectedMetric] = useState('wellness');

  const metrics = {
    wellness: [
      { date: '2024-01-01', value: 7 },
      { date: '2024-01-08', value: 8 },
      { date: '2024-01-15', value: 7.5 },
      { date: '2024-01-22', value: 8.5 }
    ]
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

      <div className="max-w-4xl mx-auto pt-20">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-sage-900">Progress Tracking</h1>
          <div className="flex items-center gap-2 bg-sage-100 p-2 rounded-lg">
            <TrendingUp className="h-5 w-5 text-sage-600" />
            <span className="text-sage-700">Last Updated: Today</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-sage-900 mb-4">Wellness Score</h2>
            <div className="flex items-center justify-center h-48 bg-sage-50 rounded-lg">
              <div className="text-4xl font-bold text-sage-600">8.5</div>
            </div>
            <p className="text-sage-600 text-center mt-4">Your current wellness score</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-sage-900 mb-4">Recent Activities</h2>
            <div className="space-y-4">
              <div className="p-4 bg-sage-50 rounded-lg">
                <div className="font-medium text-sage-900">Morning Meditation</div>
                <div className="text-sm text-sage-600">Completed 15 minutes</div>
              </div>
              <div className="p-4 bg-sage-50 rounded-lg">
                <div className="font-medium text-sage-900">Herbal Tea</div>
                <div className="text-sm text-sage-600">Added to routine</div>
              </div>
              <div className="p-4 bg-sage-50 rounded-lg">
                <div className="font-medium text-sage-900">Sleep Schedule</div>
                <div className="text-sm text-sage-600">8 hours achieved</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-sage-900 mb-4">Recommendations</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-sage-50 rounded-lg">
                <h3 className="font-medium text-sage-900 mb-2">Diet</h3>
                <p className="text-sm text-sage-600">
                  Include more warm, cooked foods in your diet this week.
                </p>
              </div>
              <div className="p-4 bg-sage-50 rounded-lg">
                <h3 className="font-medium text-sage-900 mb-2">Exercise</h3>
                <p className="text-sm text-sage-600">
                  Try gentle yoga or walking in nature.
                </p>
              </div>
              <div className="p-4 bg-sage-50 rounded-lg">
                <h3 className="font-medium text-sage-900 mb-2">Lifestyle</h3>
                <p className="text-sm text-sage-600">
                  Maintain regular sleep schedule and morning routine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}