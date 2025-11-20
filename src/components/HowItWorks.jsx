"use client";
import { useState, useEffect, useRef } from 'react';

export default function HowItWorks() {
    const [visibleSteps, setVisibleSteps] = useState([]);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

            if (isVisible && visibleSteps.length === 0) {
                // Start animation sequence
                setTimeout(() => setVisibleSteps([0]), 100);
                setTimeout(() => setVisibleSteps([0, 1]), 400);
                setTimeout(() => setVisibleSteps([0, 1, 2]), 700);
            }
        };

        // Check on mount
        handleScroll();

        // Check on scroll
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [visibleSteps]);

    const steps = [
        {
            number: "1",
            title: "Choose a car",
            description: "Browse our exclusive fleet. Lambos to exotic cars. Luxurious vehicles including luxury sedans, sports cars, SUVs and convertibles. Find the perfect ride for any occasion.",
        },
        {
            number: "2",
            title: "Pick-up date",
            description: "Select your rental dates. Check your have selected a valid date and time. Our team will contact you promptly to confirm the details.",
        },
        {
            number: "3",
            title: "Get your car",
            description: "Choose from our pick-up options. We can pick up at the airport, hotel, or wherever you are. We will deliver it to you.",
        },
    ];

    return (
        <section ref={sectionRef} className="relative w-full overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white py-12 md:py-16 lg:py-20">
            {/* Gradient overlays */}
            <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#0057FF]/5 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#0057FF]/5 blur-3xl" />

            <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Left Side - Title and Button */}
                    <div className="space-y-4 md:space-y-6 text-center lg:text-left">
                        <div>
                            <p className="text-xs md:text-sm lg:text-base text-[#0057FF] font-semibold uppercase tracking-wider mb-2 md:mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                                HOW IT WORKS
                            </p>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
                                Rent a car just <span className="text-[#0057FF]">with</span>
                                <br />
                                <span className="text-[#0057FF]">3 steps</span>
                            </h2>
                        </div>

                        <button className="inline-flex items-center gap-2 rounded-lg bg-[#0057FF] px-5 py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-3.5 text-sm md:text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-[#0048d1] hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0057FF]/70 focus:ring-offset-2 focus:ring-offset-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                            Rent a car
                            <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>

                    {/* Right Side - Steps with connecting line */}
                    <div className="relative">
                        {/* Connecting vertical line */}
                        <div className="absolute left-5 md:left-6 lg:left-7 top-6 md:top-8 bottom-6 md:bottom-8 w-0.5 bg-gradient-to-b from-[#0057FF] via-[#0057FF]/50 to-[#0057FF] hidden sm:block" />

                        {/* Steps */}
                        <div className="space-y-4 md:space-y-6 lg:space-y-8">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`relative flex gap-3 md:gap-4 lg:gap-6 transition-all duration-700 ease-out ${visibleSteps.includes(index)
                                            ? 'opacity-100 translate-x-0'
                                            : 'opacity-0 translate-x-8'
                                        }`}
                                >
                                    {/* Step Number Circle */}
                                    <div className="flex-shrink-0 flex h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-[#0057FF] text-white font-bold text-base md:text-lg lg:text-xl shadow-lg ring-4 ring-[#0057FF]/20 z-10">
                                        {step.number}
                                    </div>

                                    {/* Step Content Card */}
                                    <div className="flex-1 rounded-xl md:rounded-2xl bg-white p-4 md:p-5 lg:p-6 shadow-xl ring-1 ring-slate-200/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:ring-[#0057FF]/20">
                                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-slate-900 mb-1.5 md:mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                                            {step.title}
                                        </h3>
                                        <p className="text-xs md:text-sm lg:text-base text-slate-600 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
