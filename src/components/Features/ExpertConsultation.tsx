import React, { useState } from 'react';
import { ArrowLeft, Calendar } from 'lucide-react';
import { timeZones } from '../../data/timeZones';

interface ExpertConsultationProps {
  onBack: () => void;
}

export default function ExpertConsultation({ onBack }: ExpertConsultationProps) {
  const [formData, setFormData] = useState({
    consultationType: '',
    preferredDate: '',
    preferredTime: '',
    timeZone: '',
    primaryConcern: '',
    additionalNotes: ''
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-sage-50 p-8 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
          <Calendar className="h-16 w-16 text-sage-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-sage-900 mb-4">Thank You!</h2>
          <p className="text-sage-700 mb-6">
            Your consultation has been scheduled. We will connect with you soon to confirm your appointment.
          </p>
          <button
            onClick={onBack}
            className="bg-sage-600 text-white px-6 py-2 rounded-lg hover:bg-sage-700 transition-colors"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

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
                required
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
                  required
                  min={new Date().toISOString().split('T')[0]}
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
                  required
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
                Time Zone
              </label>
              <select
                value={formData.timeZone}
                onChange={(e) => setFormData({ ...formData, timeZone: e.target.value })}
                className="w-full p-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                required
              >
                <option value="">Select your time zone</option>
                {timeZones.map((zone) => (
                  <option key={zone.value} value={zone.value}>
                    {zone.label}
                  </option>
                ))}
              </select>
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
                required
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