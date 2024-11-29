import { useState, useEffect } from 'react';
import { Clock, Play, Pause, RotateCcw } from 'lucide-react';

export default function MeditationTimer() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive) {
      interval = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-sage-900 mb-4 flex items-center gap-2">
        <Clock className="h-5 w-5 text-sage-600" />
        Meditation Timer
      </h2>
      <div className="text-center">
        <div className="text-4xl font-bold text-sage-900 mb-6">
          {formatTime(time)}
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={toggleTimer}
            className="p-3 rounded-full bg-sage-100 text-sage-600 hover:bg-sage-200"
          >
            {isActive ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </button>
          <button
            onClick={resetTimer}
            className="p-3 rounded-full bg-sage-100 text-sage-600 hover:bg-sage-200"
          >
            <RotateCcw className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}