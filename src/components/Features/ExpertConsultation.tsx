import React, { useState } from 'react';
import { ArrowLeft, Calendar } from 'lucide-react';

interface ExpertConsultationProps {
  onBack: () => void;
}

export default function ExpertConsultation({ onBack }: ExpertConsultationProps) {
  const [formData, setFormData] = useState({
    consultationType: '',
    preferredDate: '',
    preferredTime: '',
    primaryConcern: '',
    additionalNotes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-sage-50 p-8">
      <button
        onClick={onBack}
        className="fixed top-8 left-8 text-sage-600 hover:text-sage-700 flex items-center gap-2"
      >
        <ArrowLeft className="h-5 w-5" />
        Back
      </button>

      <div className="max-w-2xl mx-auto pt-20">
        <h1 className="text-3xl font-bold text-sage-900 mb-8 text-center">Book an Expert Consultation</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">
                Type of Consultation
              </label>
              <select
                value={formData.consultationType}
                onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                className="w-full p-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
              >
                <option value="">Select consultation type</option>
                <option value="initial">Initial Consultation (60 min)</option>
                <option value="followup">Follow-up Session (30 min)</option>
                <option value="specific">Specific Issue Consultation (45 min)</option>
                <option value="emergency">Emergency Consultation (20 min)</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-sage-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full p-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-sage-700 mb-2">
                  Preferred Time
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full p-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                >
                  <option value="">Select time</option>
                  <option value="morning">Morning (9AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 4PM)</option>
                  <option value="evening">Evening (4PM - 8PM)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">
                Primary Health Concern
              </label>
              <textarea
                value={formData.primaryConcern}
                onChange={(e) => setFormData({ ...formData, primaryConcern: e.target.value })}
                className="w-full p-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                rows={4}
                placeholder="Please describe your main health concern..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">
                Additional Notes
              </label>
              <textarea
                value={formData.additionalNotes}
                onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                className="w-full p-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                rows={4}
                placeholder="Any additional information you'd like to share..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors flex items-center justify-center gap-2"
            >
              <Calendar className="h-5 w-5" />
              Schedule Consultation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}