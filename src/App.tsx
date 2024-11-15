import React, { useState, useEffect } from 'react';
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
import { getCurrentUser } from './utils/auth';
import { AuthState } from './types/auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './components/Resources/Blog';
import DoshaGuide from './components/Resources/DoshaGuide';
import Recipes from './components/Resources/Recipes';
import Research from './components/Resources/Research';
import Support from './components/Contact/Support';
import Partnerships from './components/Contact/Partnerships';
import Careers from './components/Contact/Careers';
import Press from './components/Contact/Press';


// Removed duplicate AppRouter function


function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/support" element={<Support />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/press" element={<Press />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dosha-guide" element={<DoshaGuide />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/research" element={<Research />} />
      </Routes>
    </Router>
  );
}


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
      default:
        return null;
    }
  };

  if (currentFeature) {
    return renderFeature();
  }

  if (authState.isAuthenticated && authState.user) {
    return <Dashboard 
      user={authState.user} 
      onSignOut={() => setAuthState({ user: null, isAuthenticated: false })}
      onFeatureSelect={setCurrentFeature}
    />;
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
      <Features onFeatureSelect={setCurrentFeature} />
      <DoshaSection />
      <About />
      <Footer />
    </div>
  );
}

export default App;