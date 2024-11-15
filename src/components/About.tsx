import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-sage-900 mb-4">About AyurFit</h2>
          <div className="h-1 w-20 bg-sage-600 mx-auto"></div>
        </div>
        
        <div className="prose prose-sage max-w-none space-y-6 text-sage-800">
          <p className="text-lg leading-relaxed">
            AyurFit is a personalized digital wellness platform that blends the time-honored principles 
            of Ayurveda with cutting-edge AI technology to guide users on a journey toward balanced 
            health and well-being. At AyurFit, we believe that true wellness comes from understanding 
            and harmonizing the unique mind-body constitution of each individual, or "dosha."
          </p>

          <p className="text-lg leading-relaxed">
            By assessing users' lifestyle habits, health goals, and symptoms, AyurFit delivers 
            tailored Ayurvedic recommendations, natural remedies, and actionable lifestyle adjustments 
            to support holistic health.
          </p>

          <p className="text-lg leading-relaxed">
            With AyurFit, users receive not only symptom-based solutions but also daily wellness 
            routines that include diet tips, yoga, mindfulness practices, and seasonal adjustments—all 
            aligned with their dosha and personalized wellness profile.
          </p>

          <div className="bg-sage-50 p-6 rounded-xl my-8">
            <h3 className="text-xl font-semibold text-sage-900 mb-4">Our Mission</h3>
            <p className="text-sage-700 italic">
              To make Ayurvedic wellness accessible to everyone, providing a path to healthier, 
              happier living through personalized, natural solutions that respect the body's 
              innate balance.
            </p>
          </div>

          <div className="bg-sage-50 p-6 rounded-xl my-8">
            <h3 className="text-xl font-semibold text-sage-900 mb-4">Our Vision</h3>
            <p className="text-sage-700 italic">
              A world where individuals are empowered with the knowledge and tools to take control 
              of their health through ancient wisdom, modern science, and intuitive AI-driven insights.
            </p>
          </div>

          <p className="text-lg leading-relaxed text-center font-medium text-sage-900">
            Rediscover balance with AyurFit—your holistic health companion in a digital world.
          </p>
        </div>
      </div>
    </section>
  );
}