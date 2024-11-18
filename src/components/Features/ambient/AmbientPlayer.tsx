import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';
import useSound from 'use-sound';

interface AmbientPlayerProps {
  ambientType: string;
}

const ambientSounds = {
  rain: '/sounds/rain.mp3',
  birds: '/sounds/birds.mp3',
  waves: '/sounds/waves.mp3',
  stream: '/sounds/stream.mp3',
  forest: '/sounds/forest.mp3',
  wind: '/sounds/wind.mp3'
};

export default function AmbientPlayer({ ambientType }: AmbientPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  
  const [play, { stop }] = useSound(ambientSounds[ambientType as keyof typeof ambientSounds], {
    volume,
    loop: true
  });

  useEffect(() => {
    return () => {
      stop(); // Cleanup on unmount
    };
  }, [stop]);

  const toggleSound = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-4 bg-white rounded-lg shadow-md p-3"
    >
      <button
        onClick={toggleSound}
        className="text-sage-600 hover:text-sage-700 transition-colors"
      >
        {isPlaying ? <Volume2 className="h-6 w-6" /> : <VolumeX className="h-6 w-6" />}
      </button>
      
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
        className="w-24 h-2 bg-sage-200 rounded-lg appearance-none cursor-pointer"
      />
    </motion.div>
  );
}