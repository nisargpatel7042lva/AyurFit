import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DoshaSection from './components/DoshaSection';
import About from './components/About';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import LearnMore from './components/LearnMore';
import HealthAnalysis from './components/Features/HealthAnalysis';
import PersonalizedPlans from './components/Features/PersonalizedPlans';
import ExpertConsultation from './components/Features/ExpertConsultation';
import ProgressTracking from './components/Features/ProgressTracking';
import AyurvedicChat from './components/AyurvedicChat';
import MoodBasedRemedies from './components/Features/MoodBasedRemedies';
import Testimonials from './components/Features/Testimonial';
import { getCurrentUser } from './utils/auth';
import { AuthState } from './types/auth';

  
function App() {
  const [authState, setAuthState] = useState<AuthState>(getCurrentUser());
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLearnMore, setShowLearnMore] = useState(false);
  const [currentFeature, setCurrentFeature] = useState<string | null>(null);

  useEffect(() => {
    const auth = getCurrentUser();
    setAuthState(auth);
  }, []);

  const renderFeature = () => {
    switch (currentFeature) {
      case 'health-analysis':
        return <HealthAnalysis onBack={() => setCurrentFeature(null)} />;
      case 'personalized-plans':
        return <PersonalizedPlans onBack={() => setCurrentFeature(null)} />;
      case 'expert-consultation':
        return <ExpertConsultation onBack={() => setCurrentFeature(null)} />;
      case 'progress-tracking':
        return <ProgressTracking onBack={() => setCurrentFeature(null)} />;
      case 'ayurvedic-chat':
        return <AyurvedicChat onBack={() => setCurrentFeature(null)} />;
      case 'mood-remedies':
        return <MoodBasedRemedies onBack={() => setCurrentFeature(null)} />;
      default:
        return null;
    }
  };

  if (currentFeature) {
    return renderFeature();
  }

  if (authState.isAuthenticated && authState.user) {
    return (
      <Dashboard
        user={authState.user}
        onSignOut={() => setAuthState({ user: null, isAuthenticated: false })}
        onFeatureSelect={setCurrentFeature}
      />
    );
  }

  if (showSignUp) {
    return (
      <SignUp
        onBack={() => setShowSignUp(false)}
        onSuccess={() => {
          setAuthState(getCurrentUser());
          setShowSignUp(false);
        }}
        onSignInClick={() => {
          setShowSignUp(false);
          setShowSignIn(true);
        }}
      />
    );
  }

  if (showSignIn) {
    return (
      <SignIn
        onBack={() => setShowSignIn(false)}
        onSuccess={() => {
          setAuthState(getCurrentUser());
          setShowSignIn(false);
        }}
        onSignUpClick={() => {
          setShowSignIn(false);
          setShowSignUp(true);
        }}
      />
    );
  }

  if (showLearnMore) {
    return <LearnMore onBack={() => setShowLearnMore(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white">
      <Navbar onGetStarted={() => setShowSignIn(true)} />
      <Hero
        onGetStarted={() => setShowSignIn(true)}
        onLearnMore={() => setShowLearnMore(true)}
      />
      <Dashboard/>
      <Features onFeatureSelect={setCurrentFeature} />
      <DoshaSection />
      <Testimonials /> 
      <About />
      <Footer />
    </div>
  );
}

export default App;