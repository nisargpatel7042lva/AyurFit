import { Lightbulb } from 'lucide-react';

const tips = [
  "Start your day with warm lemon water to aid digestion",
  "Practice oil pulling with coconut oil for oral health",
  "Include seasonal fruits in your breakfast",
  "Take short walks after meals for better digestion",
  "Practice deep breathing for 5 minutes before bed",
  "Massage your feet with warm oil before sleeping",
  "Include turmeric in your daily diet for immunity"
];

export default function DailyTips() {
  const todaysTip = tips[Math.floor(Math.random() * tips.length)];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-sage-900 mb-4 flex items-center gap-2">
        <Lightbulb className="h-5 w-5 text-sage-600" />
        Daily Wellness Tip
      </h2>
      <div className="bg-sage-50 rounded-lg p-4">
        <p className="text-sage-700">{todaysTip}</p>
      </div>
    </div>
  );
}