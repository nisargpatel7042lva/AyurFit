import React from 'react';
import { ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react';

interface HealthAnalysisResultProps {
  formData: {
    physicalSymptoms: string;
    mentalState: string;
    sleepPattern: string;
    digestion: string;
    energy: string;
  };
  onBack: () => void;
}

export default function HealthAnalysisResult({ formData, onBack }: HealthAnalysisResultProps) {
  const analyzeSymptoms = () => {
    const symptoms = {
      physical: formData.physicalSymptoms.toLowerCase(),
      mental: formData.mentalState.toLowerCase(),
      sleep: formData.sleepPattern.toLowerCase(),
      digestion: formData.digestion.toLowerCase(),
      energy: formData.energy.toLowerCase()
    };

    const analysis = {
      concerns: [] as string[],
      recommendations: [] as string[],
      herbs: [] as string[],
      lifestyle: [] as string[]
    };

    // Physical symptoms analysis
    if (symptoms.physical.includes('pain') || symptoms.physical.includes('ache')) {
      analysis.concerns.push('Muscular or joint discomfort');
      analysis.recommendations.push('Gentle yoga and stretching exercises');
      analysis.herbs.push('Turmeric and ginger tea');
    }

    // Mental state analysis
    if (symptoms.mental.includes('stress') || symptoms.mental.includes('anxiety')) {
      analysis.concerns.push('Elevated stress levels');
      analysis.recommendations.push('Daily meditation and pranayama');
      analysis.herbs.push('Brahmi and Ashwagandha');
    }

    // Sleep pattern analysis
    if (symptoms.sleep.includes('insomnia') || symptoms.sleep.includes('disturbed')) {
      analysis.concerns.push('Sleep disturbances');
      analysis.recommendations.push('Regular sleep schedule and bedtime routine');
      analysis.herbs.push('Chamomile and Valerian root tea');
    }

    // Digestion analysis
    if (symptoms.digestion.includes('irregular') || symptoms.digestion.includes('bloating')) {
      analysis.concerns.push('Digestive imbalance');
      analysis.recommendations.push('Mindful eating practices');
      analysis.herbs.push('Triphala and Cumin-Coriander-Fennel tea');
    }

    // Energy analysis
    if (symptoms.energy.includes('low') || symptoms.energy.includes('fatigue')) {
      analysis.concerns.push('Low energy levels');
      analysis.recommendations.push('Regular exercise and proper rest');
      analysis.herbs.push('Holy Basil and Licorice root');
    }

    // Default recommendations if no specific issues found
    if (analysis.concerns.length === 0) {
      analysis.concerns.push('General wellness maintenance');
      analysis.recommendations.push('Continue maintaining healthy lifestyle');
      analysis.herbs.push('Regular consumption of seasonal herbs');
    }

    // Add lifestyle recommendations
    analysis.lifestyle = [
      'Follow a regular daily routine',
      'Practice meditation and yoga',
      'Maintain proper sleep schedule',
      'Stay hydrated with warm water',
      'Eat fresh, seasonal foods'
    ];

    return analysis;
  };

  const analysis = analyzeSymptoms();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-sage-50 p-8">
      <button
        onClick={onBack}
        className="fixed top-8 left-8 text-sage-600 hover:text-sage-700 flex items-center gap-2"
      >
        <ArrowLeft className="h-5 w-5" />
        Back
      </button>

      <div className="max-w-4xl mx-auto pt-20">
        <h1 className="text-3xl font-bold text-sage-900 mb-8 text-center">Your Health Analysis Results</h1>

        <div className="space-y-8">
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="h-6 w-6 text-sage-600" />
              <h2 className="text-xl font-bold text-sage-900">Areas of Concern</h2>
            </div>
            <ul className="space-y-3">
              {analysis.concerns.map((concern, index) => (
                <li key={index} className="flex items-center gap-3 text-sage-700">
                  <span className="w-2 h-2 bg-sage-400 rounded-full"></span>
                  {concern}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="h-6 w-6 text-sage-600" />
              <h2 className="text-xl font-bold text-sage-900">Recommendations</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-sage-800 mb-3">Lifestyle Changes</h3>
                <ul className="space-y-3">
                  {analysis.lifestyle.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-sage-700">
                      <span className="w-2 h-2 bg-sage-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-sage-800 mb-3">Specific Recommendations</h3>
                <ul className="space-y-3">
                  {analysis.recommendations.map((recommendation, index) => (
                    <li key={index} className="flex items-center gap-3 text-sage-700">
                      <span className="w-2 h-2 bg-sage-400 rounded-full"></span>
                      {recommendation}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-sage-800 mb-3">Herbal Support</h3>
                <ul className="space-y-3">
                  {analysis.herbs.map((herb, index) => (
                    <li key={index} className="flex items-center gap-3 text-sage-700">
                      <span className="w-2 h-2 bg-sage-400 rounded-full"></span>
                      {herb}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <div className="bg-sage-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-sage-900 mb-3">Important Notes:</h3>
            <ul className="space-y-2 text-sage-700">
              <li>• These recommendations are based on Ayurvedic principles and your responses</li>
              <li>• Always consult with a qualified Ayurvedic practitioner before starting any new treatment</li>
              <li>• Listen to your body and adjust recommendations as needed</li>
              <li>• For serious health concerns, please seek immediate medical attention</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}