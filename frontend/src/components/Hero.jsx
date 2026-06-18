import React from 'react';

export default function Hero() {
  const scrollToRegister = () => {
    const element = document.getElementById('registration-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 text-center">
        {/* <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-brand-700 bg-brand-50 rounded-full mb-6 border border-brand-100">
          <span> Summer 2026 Cohort Now Open</span>
        </div> */}
        
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight max-w-3xl mx-auto leading-[1.15]">
          Build the Future: <br />
          <span className="text-brand-600">AI & Robotics</span> Workshop
        </h1>
        
        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          An immersive, hands-on 4-week online experience engineered for young minds aged 8–14. Master core robotics concepts and AI logic from home.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToRegister}
            className="w-full sm:w-auto px-8 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-lg transition-colors shadow-sm shadow-brand-600/10"
          >
            Enroll Now
          </button>
          <a
            href="#details"
            className="w-full sm:w-auto px-8 py-3.5 bg-slate-50 text-slate-700 font-medium rounded-lg transition-colors border border-slate-200 text-center"
          >
            View Details
          </a>
        </div>
      </div>
    </section>
  );
}