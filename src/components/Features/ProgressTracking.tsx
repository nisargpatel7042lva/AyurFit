import { useState } from 'react';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import WellnessRecommendations from './recommendations/WellnessRecommendations';

interface ProgressTrackingProps {
  onBack: () => void;
}

export default function ProgressTracking({ onBack }: ProgressTrackingProps) {
  const [wellnessScore, setWellnessScore] = useState(8.5);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  const activities = [
    { id: 'meditation', name: 'Morning Meditation', duration: '15 minutes', impact: 0.5 },
    { id: 'tea', name: 'Herbal Tea', duration: 'Daily', impact: 0.3 },
    { id: 'sleep', name: 'Sleep Schedule', duration: '8 hours', impact: 0.4 }
  ];

  const handleActivityToggle = (activityId: string) => {
    if (selectedActivity === activityId) {
      setSelectedActivity(null);
      const activity = activities.find(a => a.id === activityId);
      if (activity) {
        setWellnessScore(prev => Math.max(0, Math.min(10, prev - activity.impact)));
      }
    } else {
      setSelectedActivity(activityId);
      const activity = activities.find(a => a.id === activityId);
      if (activity) {
        setWellnessScore(prev => Math.max(0, Math.min(10, prev + activity.impact)));
      }
    }
  };

  if (showRecommendations) {
    return <WellnessRecommendations onBack={() => setShowRecommendations(false)} />;
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
              <div className="text-4xl font-bold text-sage-600">{wellnessScore.toFixed(1)}</div>
            </div>
            <p className="text-sage-600 text-center mt-4">Your current wellness score</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-sage-900 mb-4">Recent Activities</h2>
            <div className="space-y-4">
              {activities.map((activity) => (
                <button
                  key={activity.id}
                  onClick={() => handleActivityToggle(activity.id)}
                  className={`w-full p-4 rounded-lg transition-colors ${
                    selectedActivity === activity.id
                      ? 'bg-sage-600 text-white'
                      : 'bg-sage-50 text-sage-900 hover:bg-sage-100'
                  }`}
                >
                  <div className="font-medium">{activity.name}</div>
                  <div className="text-sm opacity-80">{activity.duration}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-sage-900 mb-4">Recommendations</h2>
            <button
              onClick={() => setShowRecommendations(true)}
              className="w-full grid md:grid-cols-3 gap-4"
            >
              <div className="p-4 bg-sage-50 rounded-lg hover:bg-sage-100 transition-colors">
                <h3 className="font-medium text-sage-900 mb-2">Diet</h3>
                <p className="text-sm text-sage-600">
                  Include more warm, cooked foods in your diet this week.
                </p>
              </div>
              <div className="p-4 bg-sage-50 rounded-lg hover:bg-sage-100 transition-colors">
                <h3 className="font-medium text-sage-900 mb-2">Exercise</h3>
                <p className="text-sm text-sage-600">
                  Try gentle yoga or walking in nature.
                </p>
              </div>
              <div className="p-4 bg-sage-50 rounded-lg hover:bg-sage-100 transition-colors">
                <h3 className="font-medium text-sage-900 mb-2">Lifestyle</h3>
                <p className="text-sm text-sage-600">
                  Maintain regular sleep schedule and morning routine.
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}