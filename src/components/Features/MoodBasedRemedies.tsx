import React, { useState } from 'react';
import { ArrowLeft, Heart, Brain, Battery, Coffee, Moon, Thermometer, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useSound from 'use-sound';
import AmbientPlayer from './ambient/AmbientPlayer';

interface MoodBasedRemediesProps {
  onBack: () => void;
}

const moodCategories = [
  {
    id: 'anxiety',
    name: 'Anxiety & Stress',
    icon: Brain,
    color: 'bg-purple-100 text-purple-600',
    ambient: 'rain',
    remedies: {
      herbs: ['Brahmi', 'Ashwagandha', 'Holy Basil (Tulsi)', 'Shankhpushpi'],
      teas: ['Chamomile-Lavender Blend', 'Rose-Cardamom Tea', 'Holy Basil Tea'],
      practices: ['Deep Breathing (Pranayama)', 'Progressive Muscle Relaxation', 'Meditation'],
      oils: ['Lavender Essential Oil', 'Brahmi Oil for head massage', 'Ylang-ylang Oil']
    }
  },
  {
    id: 'fatigue',
    name: 'Fatigue & Low Energy',
    icon: Battery,
    color: 'bg-amber-100 text-amber-600',
    ambient: 'birds',
    remedies: {
      herbs: ['Shatavari', 'Ginseng', 'Guduchi', 'Moringa'],
      teas: ['Ginger-Turmeric Tea', 'Green Tea with Holy Basil', 'Licorice Root Tea'],
      practices: ['Sun Salutation Yoga', 'Cold Water Splash', 'Walking in Nature'],
      oils: ['Peppermint Oil', 'Rosemary Oil', 'Eucalyptus Oil']
    }
  },
  {
    id: 'sleep',
    name: 'Sleep Issues',
    icon: Moon,
    color: 'bg-indigo-100 text-indigo-600',
    ambient: 'waves',
    remedies: {
      herbs: ['Valerian Root', 'Jatamansi', 'Passionflower', 'Nutmeg'],
      teas: ['Chamomile Tea', 'Nutmeg-Almond Milk', 'Sleep Time Herbal Blend'],
      practices: ['Evening Meditation', 'Legs-up-the-Wall Pose', 'Self-Foot Massage'],
      oils: ['Lavender Oil', 'Chamomile Oil', 'Vetiver Oil']
    }
  },
  {
    id: 'digestion',
    name: 'Digestive Issues',
    icon: Heart,
    color: 'bg-green-100 text-green-600',
    ambient: 'stream',
    remedies: {
      herbs: ['Triphala', 'Ginger', 'Fennel Seeds', 'Cumin'],
      teas: ['CCF Tea (Cumin-Coriander-Fennel)', 'Ginger Tea', 'Mint Tea'],
      practices: ['Abdominal Breathing', 'Yoga Twists', 'Post-meal Walking'],
      oils: ['Peppermint Oil', 'Ginger Oil', 'Fennel Oil']
    }
  },
  {
    id: 'focus',
    name: 'Poor Focus',
    icon: Coffee,
    color: 'bg-blue-100 text-blue-600',
    ambient: 'forest',
    remedies: {
      herbs: ['Brahmi', 'Gotu Kola', 'Calamus Root', 'Rosemary'],
      teas: ['Green Tea with Brahmi', 'Peppermint Tea', 'Ginkgo Biloba Tea'],
      practices: ['Alternate Nostril Breathing', 'Brain-Training Exercises', 'Mindfulness'],
      oils: ['Rosemary Oil', 'Lemon Oil', 'Peppermint Oil']
    }
  },
  {
    id: 'inflammation',
    name: 'Pain & Inflammation',
    icon: Thermometer,
    color: 'bg-red-100 text-red-600',
    ambient: 'wind',
    remedies: {
      herbs: ['Turmeric', 'Boswellia', 'Ginger', 'White Willow Bark'],
      teas: ['Golden Milk', 'Turmeric-Ginger Tea', 'Anti-inflammatory Blend'],
      practices: ['Gentle Yoga', 'Hot/Cold Therapy', 'Joint Rotations'],
      oils: ['Eucalyptus Oil', 'Wintergreen Oil', 'Turmeric Oil']
    }
  }
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

export default function MoodBasedRemedies({ onBack }: MoodBasedRemediesProps) {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [playHover] = useSound('/sounds/hover.mp3', { volume: 0.5 });
  const [playSelect] = useSound('/sounds/select.mp3', { volume: 0.5 });

  const handleMoodSelect = (moodId: string) => {
    playSelect();
    setSelectedMood(moodId);
    setShowDetails(true);
  };

  const selectedMoodData = moodCategories.find(mood => mood.id === selectedMood);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-sage-50 p-8">
      <button
        onClick={onBack}
        className="fixed top-8 left-8 text-sage-600 hover:text-sage-700 flex items-center gap-2"
      >
        <ArrowLeft className="h-5 w-5" />
        Back
      </button>

      {selectedMoodData && (
        <div className="fixed top-8 right-8">
          <AmbientPlayer ambientType={selectedMoodData.ambient} />
        </div>
      )}

      <div className="max-w-4xl mx-auto pt-20">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-sage-900 mb-4 text-center"
        >
          Mood-Based Herbal Remedies
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sage-600 text-center mb-12"
        >
          Select your current mood or concern to discover personalized Ayurvedic remedies
        </motion.p>

        <AnimatePresence mode="wait">
          {!showDetails ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {moodCategories.map((mood) => (
                <motion.button
                  key={mood.id}
                  variants={itemVariants}
                  onHoverStart={() => playHover()}
                  onClick={() => handleMoodSelect(mood.id)}
                  className={`${mood.color} p-6 rounded-xl transition-transform hover:scale-105 text-left relative overflow-hidden`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0"
                    whileHover={{ opacity: 0.1 }}
                  />
                  <mood.icon className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{mood.name}</h3>
                  <p className="text-sm opacity-80">
                    Discover natural Ayurvedic remedies for {mood.name.toLowerCase()}
                  </p>
                </motion.button>
              ))}
            </motion.div>
          ) : selectedMoodData ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-sage-600 hover:text-sage-700"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <div className={`p-2 rounded-lg ${selectedMoodData.color}`}>
                  <selectedMoodData.icon className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-sage-900">
                  Remedies for {selectedMoodData.name}
                </h2>
              </div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 gap-8"
              >
                <div className="space-y-6">
                  <motion.section variants={itemVariants}>
                    <h3 className="text-xl font-semibold text-sage-900 mb-4">Herbal Support</h3>
                    <ul className="space-y-2">
                      {selectedMoodData.remedies.herbs.map((herb, index) => (
                        <motion.li
                          key={index}
                          variants={itemVariants}
                          className="flex items-center gap-2 text-sage-700"
                        >
                          <span className="w-2 h-2 bg-sage-400 rounded-full"></span>
                          {herb}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.section>

                  <motion.section variants={itemVariants}>
                    <h3 className="text-xl font-semibold text-sage-900 mb-4">Therapeutic Teas</h3>
                    <ul className="space-y-2">
                      {selectedMoodData.remedies.teas.map((tea, index) => (
                        <motion.li
                          key={index}
                          variants={itemVariants}
                          className="flex items-center gap-2 text-sage-700"
                        >
                          <span className="w-2 h-2 bg-sage-400 rounded-full"></span>
                          {tea}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.section>
                </div>

                <div className="space-y-6">
                  <motion.section variants={itemVariants}>
                    <h3 className="text-xl font-semibold text-sage-900 mb-4">Recommended Practices</h3>
                    <ul className="space-y-2">
                      {selectedMoodData.remedies.practices.map((practice, index) => (
                        <motion.li
                          key={index}
                          variants={itemVariants}
                          className="flex items-center gap-2 text-sage-700"
                        >
                          <span className="w-2 h-2 bg-sage-400 rounded-full"></span>
                          {practice}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.section>

                  <motion.section variants={itemVariants}>
                    <h3 className="text-xl font-semibold text-sage-900 mb-4">Essential Oils</h3>
                    <ul className="space-y-2">
                      {selectedMoodData.remedies.oils.map((oil, index) => (
                        <motion.li
                          key={index}
                          variants={itemVariants}
                          className="flex items-center gap-2 text-sage-700"
                        >
                          <span className="w-2 h-2 bg-sage-400 rounded-full"></span>
                          {oil}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.section>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-8 p-6 bg-sage-50 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-sage-900 mb-3">Important Notes:</h3>
                <ul className="space-y-2 text-sage-700">
                  <li>• Start with small amounts and observe how your body responds</li>
                  <li>• Consult an Ayurvedic practitioner before starting any new remedy</li>
                  <li>• Some herbs may interact with medications</li>
                  <li>• For persistent symptoms, seek professional medical advice</li>
                </ul>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}