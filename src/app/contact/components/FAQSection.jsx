"use client";
import { useState } from 'react';

const faqItems = [
  {
    question: "How can I book a car?",
    answer: "Users can book through our website or by contacting our team directly.",
  },
  {
    question: "Can I pick the car delivered to a different location?",
    answer: "Yes, delivery to alternate locations is available.",
  },
  {
    question: "What documents do I need to rent a car?",
    answer: "A valid ID, driving license, and payment method.",
  },
  {
    question: "What is the minimum rental period?",
    answer: "Minimum rental period depends on the vehicle category.",
  },
  {
    question: "Does the price include insurance?",
    answer: "Basic insurance is included. Additional coverage available on request.",
  },
];

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200">
      <button
        className="w-full flex justify-between items-center text-left py-5"
        onClick={onClick}
      >
        <h3 className="text-lg font-semibold text-slate-800" style={{ fontFamily: "Poppins, sans-serif" }}>
          {item.question}
        </h3>
        <svg
          className={`w-6 h-6 text-slate-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="pb-5 text-base text-slate-600" style={{ fontFamily: "Inter, sans-serif" }}>
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white pt-10 pb-16 md:pb-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12" style={{ fontFamily: "Poppins, sans-serif" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
