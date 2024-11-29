import { TrendingUp } from 'lucide-react';

interface WellnessScoreProps {
  score: number;
}

export default function WellnessScore({ score }: WellnessScoreProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-sage-900 mb-4 flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-sage-600" />
        Wellness Score
      </h2>
      <div className="flex items-center justify-center">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#E3E7E3"
              strokeWidth="3"
            />
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#4C5E4C"
              strokeWidth="3"
              strokeDasharray={`${score}, 100`}
            />
            <text x="18" y="20.35" className="text-3xl font-bold" textAnchor="middle" fill="#2E372E">
              {score}
            </text>
          </svg>
        </div>
      </div>
      <p className="text-center text-sage-600 mt-4">Your current wellness score</p>
    </div>
  );
}