import { ArrowLeft, Sunrise, Sun, Sunset, Moon } from 'lucide-react';

interface PersonalizedPlanResultProps {
  formData: {
    goals: string;
    lifestyle: string;
    dietaryPreferences: string;
    timeCommitment: string;
  };
  onBack: () => void;
}

export default function PersonalizedPlanResult({ formData, onBack }: PersonalizedPlanResultProps) {
  const getRecommendations = () => {
    const recommendations = {
      morning: [
        'Wake up before sunrise',
        'Drink warm water with lemon',
        'Practice oil pulling',
        'Light yoga or stretching',
        'Meditation',
      ],
      afternoon: [
        'Have lunch at regular time',
        'Take a short walk',
        'Practice deep breathing',
        'Stay hydrated',
      ],
      evening: [
        'Light dinner before sunset',
        'Gentle stretching',
        'Herbal tea',
        'Digital detox',
      ],
      night: [
        'Self-massage',
        'Meditation or journaling',
        'Early bedtime routine',
        'Sleep by 10 PM',
      ],
    };

    if (formData.goals === 'weight') {
      recommendations.morning.push('Fasting until sunrise');
      recommendations.afternoon.push('Balanced Ayurvedic meal');
    } else if (formData.goals === 'stress') {
      recommendations.morning.push('Extended meditation');
      recommendations.evening.push('Stress-relief herbs');
    }

    return recommendations;
  };

  const recommendations = getRecommendations();

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
        <h1 className="text-3xl font-bold text-sage-900 mb-8 text-center">
          Your Personalized Ayurvedic Plan
        </h1>

        <div className="space-y-8">
          {Object.entries(recommendations).map(([timeOfDay, items]) => (
            <section key={timeOfDay} className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                {timeOfDay === 'morning' && <Sunrise className="h-6 w-6 text-sage-600" />}
                {timeOfDay === 'afternoon' && <Sun className="h-6 w-6 text-sage-600" />}
                {timeOfDay === 'evening' && <Sunset className="h-6 w-6 text-sage-600" />}
                {timeOfDay === 'night' && <Moon className="h-6 w-6 text-sage-600" />}
                <h2 className="text-xl font-bold text-sage-900 capitalize">{timeOfDay} Routine</h2>
              </div>
              <ul className="space-y-3">
                {items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sage-700">
                    <span className="w-2 h-2 bg-sage-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <div className="bg-sage-50 rounded-xl p-6 mt-8">
            <h3 className="text-lg font-semibold text-sage-900 mb-3">Important Notes:</h3>
            <ul className="space-y-2 text-sage-700">
              <li>• Adjust timings according to your schedule while maintaining the sequence</li>
              <li>• Listen to your body and modify activities as needed</li>
              <li>• Consistency is key - start small and build gradually</li>
              <li>• Consult an Ayurvedic practitioner for personalized guidance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
