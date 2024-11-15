import React from 'react';
import { User } from '../types/auth';
import { Leaf, LogOut } from 'lucide-react';
import { signOut } from '../utils/auth';

interface DashboardProps {
  user: User;
  onSignOut: () => void;
}

export default function Dashboard({ user, onSignOut }: DashboardProps) {
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
              <span className="ml-2 text-xl font-semibold text-sage-900">AyurFit</span>
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
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-sage-900 mb-4">Your Wellness Dashboard</h1>
          <p className="text-sage-600">
            Welcome to your personalized wellness journey. Your dashboard is being set up...
          </p>
        </div>
      </main>
    </div>
  );
}