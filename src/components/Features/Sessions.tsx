import { Calendar, Search, Filter, Activity, Book, Moon, Users } from 'lucide-react';

const sessions = [
  {
    id: 1,
    title: 'Morning Meditation',
    instructor: 'Dr. Sarah Wilson',
    time: '7:00 AM',
    date: '2024-03-20',
    type: 'Meditation',
    duration: '30 mins',
    spots: '5 spots left',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 2,
    title: 'Yoga Flow',
    instructor: 'Maya Patel',
    time: '9:00 AM',
    date: '2024-03-20',
    type: 'Exercise',
    duration: '45 mins',
    spots: '3 spots left',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 3,
    title: 'Ayurvedic Consultation',
    instructor: 'Dr. Raj Kumar',
    time: '2:00 PM',
    date: '2024-03-20',
    type: 'Consultation',
    duration: '60 mins',
    spots: '1 spot left',
    image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 4,
    title: 'Group Meditation',
    instructor: 'Emma Thompson',
    time: '5:00 PM',
    date: '2024-03-20',
    type: 'Meditation',
    duration: '45 mins',
    spots: '8 spots left',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400'
  }
];

const getSessionIcon = (type: string) => {
  switch (type) {
    case 'Meditation':
      return Moon;
    case 'Exercise':
      return Activity;
    case 'Consultation':
      return Users;
    default:
      return Book;
  }
};

export default function Sessions() {
  return (
    <div className="min-h-screen bg-sage-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-sage-900">Upcoming Sessions</h1>
            <p className="text-sage-600 mt-2">Book your next wellness session</p>
          </div>
          <button className="mt-4 md:mt-0 btn btn-primary flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Schedule New Session</span>
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search sessions..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-sage-500 focus:ring-1 focus:ring-sage-500 outline-none"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">
              <Filter className="w-5 h-5 text-gray-400" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sessions.map((session) => {
            const SessionIcon = getSessionIcon(session.type);
            return (
              <div key={session.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img
                    src={session.image}
                    alt={session.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-sage-700">
                    {session.spots}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sage-600 text-sm mb-2">
                    <SessionIcon className="w-4 h-4" />
                    <span>{session.type}</span>
                    <span>•</span>
                    <span>{session.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{session.title}</h3>
                  <p className="text-gray-600 mb-4">with {session.instructor}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sage-900">
                      <div className="font-medium">{session.date}</div>
                      <div className="text-sm text-sage-600">{session.time}</div>
                    </div>
                    <button className="btn btn-primary py-2">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}