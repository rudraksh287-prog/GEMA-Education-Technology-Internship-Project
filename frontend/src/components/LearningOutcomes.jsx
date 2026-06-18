import React from 'react';

export default function LearningOutcomes() {
  const outcomes = [
    { title: "Introduction to AI Logic", desc: "Understand how machines think, recognize patterns, and make simple decisions." },
    { title: "Robotics Fundamentals", desc: "Explore the core components of hardware structures including sensors, actuators, and microcontrollers." },
    { title: "Visual Block Programming", desc: "Build algorithmic logic and problem-solving patterns without fighting complex syntax." },
    { title: "Smart Automation Projects", desc: "Design systems like automated home security or line-following algorithms in simulated setups." },
    { title: "Critical Thinking & Debugging", desc: "Learn how to systematically isolate errors, fix loop failures, and optimize run-time tasks." }
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-950 tracking-tight">What Your Child Will Master</h2>
          <p className="mt-3 text-slate-600">A curriculum built intentionally to bridge technical engineering concepts with creative play.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl border border-slate-200/60 bg-slate-50/50 hover:bg-white hover:border-brand-600/30 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-50 text-brand-600 font-semibold text-sm mb-4">
                0{index + 1}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{outcome.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{outcome.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}