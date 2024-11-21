import { Activity, Calendar, Book, Bell, Heart, Leaf, Moon, Sun } from "lucide-react";
// import AnimatedBellButton from "./Features/Animation"; // Assuming this file contains your animation logic

const metrics = [
  { label: "Wellness Score", value: "85%", icon: Heart, color: "text-rose-500" },
  { label: "Meditation Minutes", value: "120", icon: Moon, color: "text-indigo-500" },
  { label: "Daily Steps", value: "8,547", icon: Activity, color: "text-green-500" },
  { label: "Herbal Remedies", value: "3", icon: Leaf, color: "text-emerald-500" },
];

const upcomingSessions = [
  { title: "Morning Meditation", time: "7:00 AM", type: "Meditation" },
  { title: "Yoga Session", time: "9:00 AM", type: "Exercise" },
  { title: "Wellness Consultation", time: "2:00 PM", type: "Consultation" },
];

import { useState } from "react";

export default function Dashboard() {
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle Bell button animation
  const handleBellClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 300); // Animation duration
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Your Wellness Dashboard</h2>
            <p className="text-gray-600 mt-2">Track your holistic health journey</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-2">
            {/* Schedule Session Button */}
            <button
              onClick={() => window.location.href = "/sessions"} // Redirect to Sessions page
              className="btn btn-primary flex items-center space-x-2 bg-sage-600 text-white px-4 py-2 rounded-lg shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Session</span>
            </button>

            {/* Bell Button with Animation */}
            <button
              onClick={handleBellClick}
              className={`border-2 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow ${
                isAnimating ? "ring-animation" : ""
              }`}
            >
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
                <span className="text-2xl font-bold">{metric.value}</span>
              </div>
              <h3 className="text-gray-900 font-medium">{metric.label}</h3>
            </div>
          ))}
        </div>

        {/* Daily Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Schedule */}
          <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Today's Schedule</h3>
              <button className="text-gray-600 hover:text-gray-700">View All</button>
            </div>
            <div className="space-y-4">
              {upcomingSessions.map((session, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    {session.type === "Meditation" ? (
                      <Moon className="w-6 h-6 text-indigo-500" />
                    ) : session.type === "Exercise" ? (
                      <Activity className="w-6 h-6 text-green-500" />
                    ) : (
                      <Book className="w-6 h-6 text-blue-500" />
                    )}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">{session.title}</h4>
                    <p className="text-gray-600 text-sm">{session.time}</p>
                  </div>
                  <button className="ml-auto px-4 py-2 text-sm text-gray-600 hover:text-gray-700">
                    Join
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Tips */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Daily Wellness Tips</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Sun className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Morning Routine</h4>
                  <p className="text-gray-600 text-sm">
                    Start your day with warm lemon water and deep breathing exercises.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Leaf className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Herbal Recommendation</h4>
                  <p className="text-gray-600 text-sm">
                    Try ashwagandha tea for natural stress relief and better sleep.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
