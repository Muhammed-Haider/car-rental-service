"use client";

const features = [
  {
    title: "Premium Fleet",
    description: "Curated top-tier vehicles for the discerning driver.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M7 4V2h10v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 6h14v2a4 4 0 01-4 4H9a4 4 0 01-4-4V6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 14v4a2 2 0 002 2h0a2 2 0 002-2v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "Instant Delivery",
    description: "From booking to driving in record time.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "Flexible Terms",
    description: "Daily, weekly, or monthly plans tailored to you.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7" cy="7" r="1.5" fill="currentColor" />
      </svg>
    )
  },
  {
    title: "Pristine Condition",
    description: "Every vehicle is detailed to perfection.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M21 13l-6.5-6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="15" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  }
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gradient-to-b from-black to-[#0D0D0D] text-white py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 px-4">
          <h2 
            className="text-2xl md:text-3xl font-bold tracking-[0.15em] text-white/80 uppercase mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Why Choose Us
          </h2>

          <div className="relative inline-block mb-8">
            <div className="h-[2px] w-36 md:w-44 bg-gradient-to-r from-[#8B3FBF] via-[#B844E8] to-transparent rounded-full"></div>
            <span className="absolute -right-3 -top-3 text-[#B844E8]">
              <svg width="32" height="14" viewBox="0 0 64 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <g transform="translate(64,0) scale(-1,1)">
                  <path d="M10 18c-2 0-3.5-1.5-3.5-3.5S8 11 10 11h20c4 0 8-6 12-6h6c3 0 6 3 6 6v7c0 1.1-.9 2-2 2H10z" fill="currentColor" opacity="0.95" />
                  <circle cx="18" cy="20" r="3" fill="#0F172A" />
                  <circle cx="46" cy="20" r="3" fill="#0F172A" />
                </g>
              </svg>
            </span>
          </div>

          <h3 
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-6 text-white max-w-4xl"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Unmatched Service, Superior Cars<br className="hidden md:block" />
            and Hassle-Free Experience
          </h3>

          <p 
            className="mx-auto max-w-2xl text-base md:text-lg text-white/70 leading-relaxed font-light"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Choosing us means experiencing unparalleled luxury with reliable service, ensuring an exceptional driving experience in every detail.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-20 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left transition-all duration-300"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center shadow-lg group-hover:border-[#B844E8]/40 group-hover:shadow-[0_0_20px_rgba(184,68,232,0.1)] transition-all duration-300">
                <div className="text-white/80 group-hover:text-[#B844E8] transition-colors">
                  {feature.icon}
                </div>
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-xl md:text-2xl text-white mb-2 group-hover:text-[#B844E8] transition-colors">
                  {feature.title}
                </h4>
                <p className="text-sm md:text-base text-white/60 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}