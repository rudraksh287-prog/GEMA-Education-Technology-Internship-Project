import React, { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do children need prior coding experience to join?",
      answer: "Not at all. This workshop is crafted specifically for beginners. We begin with intuitive, visual block logic architectures before stepping up to programmatic mechanics."
    },
    {
      question: "What hardware tools are required for the sessions?",
      answer: "No physical kits are mandatory. We use professional, cloud-based interactive simulation playgrounds where students can configure circuitry and run software blocks completely online."
    },
    {
      question: "What happens if my child misses a live session?",
      answer: "Every live stream is archived. Registered students receive life-time access to high-definition video playbacks, reference project material, and community support channels."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 max-w-3xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-950 tracking-tight">Frequently Asked Questions</h2>
        <p className="mt-3 text-slate-600">Have questions about the summer camp format? Here are immediate answers.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className="border border-slate-200 bg-white rounded-xl overflow-hidden transition-colors duration-150"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left font-medium text-slate-900 hover:bg-slate-50/50 transition-colors"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <span className={`ml-4 text-slate-400 transition-transform duration-200 transform ${isOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              <div 
                className={`transition-all duration-200 ease-in-out ${
                  isOpen ? 'max-h-40 border-t border-slate-100 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="p-6 text-sm text-slate-600 leading-relaxed bg-slate-50/30">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}