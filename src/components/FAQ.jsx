"use client";
import { useState } from 'react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How can I book a car?",
            answer: "You can book a car through our website by selecting your desired vehicle, choosing your rental dates, and completing the booking process. Alternatively, you can contact our customer service team directly.",
        },
        {
            question: "Can I pick the car delivered to a different location?",
            answer: "Yes! We offer flexible pickup and delivery options. You can have your rental car delivered to your hotel, airport, or any location in Dubai. Additional delivery charges may apply based on the distance.",
        },
        {
            question: "What documents do I need to rent a car?",
            answer: "You'll need a valid driver's license, passport or Emirates ID, and a credit card for the security deposit. International visitors should have an international driving permit along with their original license.",
        },
        {
            question: "What is the minimum rental period?",
            answer: "Our minimum rental period is 24 hours (1 day). We also offer weekly and monthly rental packages at discounted rates for longer-term rentals.",
        },
        {
            question: "Does the price include insurance?",
            answer: "Yes, all our rental prices include comprehensive insurance coverage. Additional coverage options are available for enhanced protection if desired.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white py-16 md:py-24">
            {/* Gradient overlays */}
            <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#0057FF]/5 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#0057FF]/5 blur-3xl" />

            <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-12 md:mb-16 text-center">
                    <p className="text-sm md:text-base text-[#0057FF] font-semibold uppercase tracking-wider mb-3 md:mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                        FAQ
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
                        Got questions? We've got answers!
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
                        Your go-to source for common questions about our car rental service. With clear answers to all things cars.
                    </p>
                </div>

                {/* FAQ Content - Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Left Side - FAQ Questions (order-2 on mobile, order-1 on desktop) */}
                    <div className="space-y-4 order-2 lg:order-1">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md ring-1 ring-slate-200/50 overflow-hidden transition-all duration-300 hover:shadow-lg"
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-5 md:p-6 text-left transition-colors duration-200 hover:bg-slate-50"
                                >
                                    <span className="text-base md:text-lg font-semibold text-slate-900 pr-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                                        {faq.question}
                                    </span>
                                    <svg
                                        className={`flex-shrink-0 h-5 w-5 md:h-6 md:w-6 text-[#0057FF] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="px-5 md:px-6 pb-5 md:pb-6 pt-2">
                                        <p className="text-sm md:text-base text-slate-600 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side - FAQ Image (order-1 on mobile, order-2 on desktop) */}
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-slate-200/50 order-1 lg:order-2">
                        <img
                            src="/faq_image.jpeg"
                            alt="Luxury Car"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
