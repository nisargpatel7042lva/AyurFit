import { Leaf, LogOut, Calendar, Clock, TrendingUp, Lightbulb } from 'lucide-react';
import { User } from '../types/auth';
import { signOut } from '../utils/auth';
import SessionCard from './dashboard/Sessioncards';
import WellnessScore from './dashboard/WellnessScore';
import MeditationTimer from './dashboard/MeditationTimer';
import DailyTips from './dashboard/DailyTips';
import UpcomingSessions from './dashboard/UpcomingSessions';

interface DashboardProps {
  user: User;
  onSignOut: () => void;
  onFeatureSelect: (feature: string) => void;
}

export default function Dashboard({ user, onSignOut, onFeatureSelect }: DashboardProps) {
  const handleSignOut = () => {
    signOut();
    onSignOut();
  };

  return (
    <div className="min-h-screen bg-sage-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-sage-600" />
              <div className="ml-2">
                <span className="text-xl font-semibold text-sage-900">AyurFit</span>
                <span className="block text-xs text-sage-600">Your digital path to holistic wellness</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sage-600">Welcome, {user.name}</span>
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 text-sage-600 hover:text-sage-700"
              >
                <LogOut className="h-5 w-5" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <WellnessScore score={85} />
          <MeditationTimer />
          <DailyTips />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <section className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-sage-900 mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-sage-600" />
                Ongoing Sessions
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <SessionCard
                  title="Morning Meditation"
                  time="7:00 AM - 7:30 AM"
                  instructor="Dr. Ayush Sharma"
                  type="meditation"
                  status="ongoing"
                />
                <SessionCard
                  title="Yoga for Beginners"
                  time="8:00 AM - 9:00 AM"
                  instructor="Maya Patel"
                  type="yoga"
                  status="ongoing"
                />
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-sage-900 mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-sage-600" />
                Upcoming Sessions
              </h2>
              <UpcomingSessions />
            </section>
          </div>

          <div className="space-y-6">
            <section className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-sage-900 mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-sage-600" />
                Quick Actions
              </h2>
              <div className="space-y-3">
                <button
                  onClick={() => onFeatureSelect('health-analysis')}
                  className="w-full p-3 bg-sage-50 hover:bg-sage-100 rounded-lg text-left"
                >
                  Start Health Analysis
                </button>
                <button
                  onClick={() => onFeatureSelect('personalized-plans')}
                  className="w-full p-3 bg-sage-50 hover:bg-sage-100 rounded-lg text-left"
                >
                  View Wellness Plan
                </button>
                <button
                  onClick={() => onFeatureSelect('expert-consultation')}
                  className="w-full p-3 bg-sage-50 hover:bg-sage-100 rounded-lg text-left"
                >
                  Book Consultation
                </button>
                <button
                  onClick={() => onFeatureSelect('ayurvedic-chat')}
                  className="w-full p-3 bg-sage-50 hover:bg-sage-100 rounded-lg text-left"
                >
                  Ask Ayurvedic Guide
                </button>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-sage-900 mb-4 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-sage-600" />
                Wellness Insights
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-sage-50 rounded-lg">
                  <h3 className="font-medium text-sage-900 mb-1">Meditation Progress</h3>
                  <p className="text-sm text-sage-600">
                    You've meditated for 45 minutes this week. Keep going!
                  </p>
                </div>
                <div className="p-4 bg-sage-50 rounded-lg">
                  <h3 className="font-medium text-sage-900 mb-1">Weekly Goal</h3>
                  <p className="text-sm text-sage-600">
                    3 out of 5 wellness activities completed
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}