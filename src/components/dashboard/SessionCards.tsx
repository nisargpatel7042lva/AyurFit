import { Clock, User } from 'lucide-react';

interface SessionCardProps {
  title: string;
  time: string;
  instructor: string;
  type: 'meditation' | 'yoga' | 'consultation';
  status: 'ongoing' | 'upcoming' | 'completed';
}

export default function SessionCard({ title, time, instructor, type, status }: SessionCardProps) {
  return (
    <div className="bg-sage-50 rounded-lg p-4 hover:bg-sage-100 transition-colors">
      <h3 className="font-semibold text-sage-900 mb-2">{title}</h3>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-sage-600">
          <Clock className="h-4 w-4" />
          {time}
        </div>
        <div className="flex items-center gap-2 text-sm text-sage-600">
          <User className="h-4 w-4" />
          {instructor}
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-2 py-1 rounded-full text-xs ${
            status === 'ongoing' ? 'bg-green-100 text-green-700' :
            status === 'upcoming' ? 'bg-blue-100 text-blue-700' :
            'bg-gray-100 text-gray-700'
          }`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
      </div>
    </div>
  );
}