import SessionCard from './SessionCards';

export default function UpcomingSessions() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <SessionCard
        title="Stress Management"
        time="2:00 PM - 3:00 PM"
        instructor="Dr. Priya Verma"
        type="meditation"
        status="upcoming"
      />
      <SessionCard
        title="Ayurvedic Cooking"
        time="4:00 PM - 5:00 PM"
        instructor="Chef Rahul Kumar"
        type="consultation"
        status="upcoming"
      />
      <SessionCard
        title="Evening Meditation"
        time="6:00 PM - 6:30 PM"
        instructor="Dr. Ayush Sharma"
        type="meditation"
        status="upcoming"
      />
      <SessionCard
        title="Sleep Wellness"
        time="8:00 PM - 9:00 PM"
        instructor="Dr. Meera Singh"
        type="consultation"
        status="upcoming"
      />
    </div>
  );
}