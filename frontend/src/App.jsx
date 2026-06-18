import React from 'react';
import Hero from './components/Hero';
import WorkshopDetails from './components/WorkshopDetails';
import LearningOutcomes from './components/LearningOutcomes';
import FAQ from './components/FAQ';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-brand-100 selection:text-brand-900">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50 backdrop-blur-md bg-white/90">
        <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tight text-brand-900">
            FutureBots<span className="text-brand-600">.</span>
          </span>
          <button 
            onClick={() => document.getElementById('registration-form').scrollIntoView({ behavior: 'smooth' })}
            className="text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-lg transition-colors"
          >
            Register Now
          </button>
        </div>
      </header>

      {/* Assembly Layout */}
      <main>
        <Hero />
        <WorkshopDetails />
        <LearningOutcomes />
        <FAQ />
        <RegistrationForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;