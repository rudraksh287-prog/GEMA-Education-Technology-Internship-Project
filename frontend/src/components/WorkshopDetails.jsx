import React from 'react';

export default function WorkshopDetails() {
  const details = [
    { label: 'Age Group', value: '8–14 Years', icon: '🧑' },
    { label: 'Duration', value: '4 Weeks', icon: '📅' },
    { label: 'Mode', value: 'Online (Live)', icon: '💻' },
    { label: 'Fees', value: '₹2,999', icon: '💳' },
    { label: 'Start Date', value: '15 July 2026', icon: '🚀' },
  ];

  return (
    <section id="details" className="py-20 max-w-5xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-950 tracking-tight">Workshop Overview</h2>
        <p className="mt-3 text-slate-600">Everything you need to know about the upcoming summer cohort.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {details.map((item, index) => (
          <div 
            key={index} 
            className={`bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm hover:border-brand-600/30 hover:shadow-md transition-all duration-200 ${
              index === 4 ? 'col-span-2 md:col-span-1' : ''
            }`}
          >
            <div className="text-2xl mb-3">{item.icon}</div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">{item.label}</div>
            <div className="mt-1 text-base font-semibold text-slate-900">{item.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}